import { clearCachedDriveAccessToken } from '../firebase';
import { PokemonType, SavedTeam, TeamCategory } from '../types/pokemon';
import {
  buildShowdownFileName,
  exportTeamToShowdown,
  importTeamFromShowdown,
  parseShowdownFilenameToTeamName,
  TEAM_CATEGORIES,
} from '../utils/showdown';

const DRIVE_API_BASE = 'https://www.googleapis.com/drive/v3';
const DRIVE_UPLOAD_BASE = 'https://www.googleapis.com/upload/drive/v3';
const FOLDER_NAME = 'BlazeDex 2 - Squadre Showdown';

export class DriveAuthError extends Error {
  constructor(message = 'Sessione Google Drive scaduta o non autorizzata.') {
    super(message);
    this.name = 'DriveAuthError';
  }
}

export interface DriveShowdownFile {
  id: string;
  name: string;
  modifiedTime: string;
  size?: string;
  webViewLink?: string;
  shared?: boolean;
  appProperties?: Record<string, string>;
}

let cachedFolderId: string | null = null;

export function resetDriveFolderCache(): void {
  cachedFolderId = null;
}

async function driveFetch(
  url: string,
  accessToken: string,
  init: RequestInit = {}
): Promise<Response> {
  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${accessToken}`);

  const res = await fetch(url, { ...init, headers });
  if (res.status === 401) {
    clearCachedDriveAccessToken();
    resetDriveFolderCache();
    throw new DriveAuthError();
  }
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Google Drive API (${res.status}): ${body.slice(0, 200)}`);
  }
  return res;
}

export async function ensureShowdownFolder(accessToken: string): Promise<string> {
  if (cachedFolderId) {
    try {
      const checkRes = await driveFetch(
        `${DRIVE_API_BASE}/files/${cachedFolderId}?fields=id,trashed`,
        accessToken
      );
      const checkData = (await checkRes.json()) as { id?: string; trashed?: boolean };
      if (checkData.id && !checkData.trashed) {
        return checkData.id;
      }
    } catch (err) {
      if (err instanceof DriveAuthError) throw err;
    }
    cachedFolderId = null;
  }

  const q = encodeURIComponent(
    `name = '${FOLDER_NAME}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`
  );
  const searchRes = await driveFetch(
    `${DRIVE_API_BASE}/files?q=${q}&fields=files(id,name)&pageSize=5`,
    accessToken
  );
  const searchJson = (await searchRes.json()) as { files?: { id: string }[] };
  if (searchJson.files && searchJson.files.length > 0) {
    cachedFolderId = searchJson.files[0].id;
    return cachedFolderId;
  }

  const createRes = await driveFetch(`${DRIVE_API_BASE}/files?fields=id`, accessToken, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: FOLDER_NAME,
      mimeType: 'application/vnd.google-apps.folder',
      appProperties: { blazedexFolder: 'showdown-teams' },
    }),
  });
  const created = (await createRes.json()) as { id: string };
  cachedFolderId = created.id;
  return created.id;
}

export async function listDriveShowdownFiles(
  accessToken: string
): Promise<DriveShowdownFile[]> {
  const folderId = await ensureShowdownFolder(accessToken);
  const q = encodeURIComponent(
    `('${folderId}' in parents or appProperties has { key='blazedexApp' and value='blazedex2' }) and mimeType = 'text/plain' and trashed = false`
  );
  const fields = encodeURIComponent(
    'files(id,name,modifiedTime,size,webViewLink,shared,appProperties)'
  );
  const res = await driveFetch(
    `${DRIVE_API_BASE}/files?q=${q}&orderBy=modifiedTime desc&pageSize=50&fields=${fields}`,
    accessToken
  );
  const data = (await res.json()) as { files?: DriveShowdownFile[] };
  return data.files ?? [];
}

function buildTeamAppProperties(team: SavedTeam): Record<string, string> {
  const props: Record<string, string> = {
    blazedexApp: 'blazedex2',
    blazedexTeamId: team.id.slice(0, 100),
    category: team.category.slice(0, 60),
    mode: team.mode,
  };
  if (team.category === 'Monotype' && team.monotype) {
    props.monotype = team.monotype;
  }
  return props;
}

function buildMultipartBody(
  metadata: Record<string, unknown>,
  showdownContent: string,
  boundary: string
): string {
  return [
    `--${boundary}`,
    'Content-Type: application/json; charset=UTF-8',
    '',
    JSON.stringify(metadata),
    `--${boundary}`,
    'Content-Type: text/plain; charset=UTF-8',
    '',
    showdownContent,
    `--${boundary}--`,
  ].join('\r\n');
}

export function findMatchingDriveFile(
  files: DriveShowdownFile[],
  team: SavedTeam
): DriveShowdownFile | undefined {
  const expectedName = buildShowdownFileName(team.name).toLowerCase();
  return (
    files.find((f) => f.appProperties?.blazedexTeamId === team.id) ??
    files.find((f) => f.name.toLowerCase() === expectedName)
  );
}

export async function createDriveShowdownFile(
  accessToken: string,
  team: SavedTeam
): Promise<DriveShowdownFile> {
  const showdownText = exportTeamToShowdown(team);
  if (!showdownText.trim()) {
    throw new Error('Aggiungi almeno un Pokémon alla squadra prima di salvare su Google Drive.');
  }

  const folderId = await ensureShowdownFolder(accessToken);
  const fileName = buildShowdownFileName(team.name);
  const boundary = `blazedex_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const metadata = {
    name: fileName,
    mimeType: 'text/plain',
    parents: [folderId],
    description: `Squadra BlazeDex 2 (${team.category} · ${team.mode}) in formato Pokémon Showdown`,
    appProperties: buildTeamAppProperties(team),
  };

  const fields = encodeURIComponent(
    'id,name,modifiedTime,size,webViewLink,shared,appProperties'
  );
  const res = await driveFetch(
    `${DRIVE_UPLOAD_BASE}/files?uploadType=multipart&fields=${fields}`,
    accessToken,
    {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body: buildMultipartBody(metadata, showdownText, boundary),
    }
  );
  return (await res.json()) as DriveShowdownFile;
}

export async function updateDriveShowdownFile(
  accessToken: string,
  fileId: string,
  team: SavedTeam
): Promise<DriveShowdownFile> {
  const showdownText = exportTeamToShowdown(team);
  if (!showdownText.trim()) {
    throw new Error('La squadra è vuota: impossibile aggiornare il file Showdown.');
  }

  const fileName = buildShowdownFileName(team.name);
  const boundary = `blazedex_upd_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const metadata = {
    name: fileName,
    mimeType: 'text/plain',
    description: `Squadra BlazeDex 2 (${team.category} · ${team.mode}) in formato Pokémon Showdown`,
    appProperties: buildTeamAppProperties(team),
  };

  const fields = encodeURIComponent(
    'id,name,modifiedTime,size,webViewLink,shared,appProperties'
  );
  const res = await driveFetch(
    `${DRIVE_UPLOAD_BASE}/files/${encodeURIComponent(fileId)}?uploadType=multipart&fields=${fields}`,
    accessToken,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body: buildMultipartBody(metadata, showdownText, boundary),
    }
  );
  return (await res.json()) as DriveShowdownFile;
}

export async function enableDriveLinkSharing(
  accessToken: string,
  fileId: string
): Promise<DriveShowdownFile> {
  await driveFetch(
    `${DRIVE_API_BASE}/files/${encodeURIComponent(fileId)}/permissions`,
    accessToken,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        role: 'reader',
        type: 'anyone',
      }),
    }
  );

  const fields = encodeURIComponent(
    'id,name,modifiedTime,size,webViewLink,shared,appProperties'
  );
  const res = await driveFetch(
    `${DRIVE_API_BASE}/files/${encodeURIComponent(fileId)}?fields=${fields}`,
    accessToken
  );
  return (await res.json()) as DriveShowdownFile;
}

export async function downloadDriveShowdownFileContent(
  accessToken: string,
  fileId: string
): Promise<string> {
  const res = await driveFetch(
    `${DRIVE_API_BASE}/files/${encodeURIComponent(fileId)}?alt=media`,
    accessToken
  );
  return res.text();
}

export async function getDriveFileMetadata(
  accessToken: string,
  fileId: string
): Promise<DriveShowdownFile> {
  const fields = encodeURIComponent(
    'id,name,modifiedTime,size,webViewLink,shared,appProperties'
  );
  const res = await driveFetch(
    `${DRIVE_API_BASE}/files/${encodeURIComponent(fileId)}?fields=${fields}`,
    accessToken
  );
  return (await res.json()) as DriveShowdownFile;
}

export async function deleteDriveShowdownFile(
  accessToken: string,
  fileId: string
): Promise<void> {
  await driveFetch(`${DRIVE_API_BASE}/files/${encodeURIComponent(fileId)}`, accessToken, {
    method: 'DELETE',
  });
}

export function buildSavedTeamFromDriveShowdown(
  file: DriveShowdownFile,
  showdownText: string
): SavedTeam | null {
  const parsedMembers = importTeamFromShowdown(showdownText);
  if (parsedMembers.length === 0) return null;

  const padded: SavedTeam['members'] = [null, null, null, null, null, null];
  parsedMembers.slice(0, 6).forEach((m, i) => {
    padded[i] = m;
  });

  const rawCat = file.appProperties?.category as TeamCategory | undefined;
  const category: TeamCategory =
    rawCat && TEAM_CATEGORIES.includes(rawCat) ? rawCat : 'Run Principale';
  const mode = file.appProperties?.mode === 'Standard' ? 'Standard' : 'Challenge Mode';
  const monotype =
    category === 'Monotype' && file.appProperties?.monotype
      ? (file.appProperties.monotype as PokemonType)
      : undefined;

  return {
    id:
      file.appProperties?.blazedexTeamId ||
      `team-drive-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
    name: parseShowdownFilenameToTeamName(file.name),
    category,
    monotype,
    mode,
    notes: `Importata da Google Drive (${file.name})`,
    updatedAt: file.modifiedTime ? new Date(file.modifiedTime).getTime() || Date.now() : Date.now(),
    members: padded,
  };
}

export function extractDriveFileIdFromInput(input: string): string | null {
  const trimmed = input.trim();
  const matchPath = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]{10,})/);
  if (matchPath) return matchPath[1];
  const matchQuery = trimmed.match(/[?&](?:id|driveTeam)=([a-zA-Z0-9_-]{10,})/);
  if (matchQuery) return matchQuery[1];
  return null;
}
