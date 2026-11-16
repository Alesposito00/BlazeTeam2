import { initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  User,
} from 'firebase/auth';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
void setPersistence(auth, browserLocalPersistence).catch(() => {
  // Fallback silently if storage restrictions apply
});

export const DRIVE_SCOPES = ['https://www.googleapis.com/auth/drive.file'] as const;

export const googleProvider = new GoogleAuthProvider();
for (const scope of DRIVE_SCOPES) {
  googleProvider.addScope(scope);
}
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Strictly in-memory OAuth access token cache (never stored in localStorage/sessionStorage)
let cachedDriveAccessToken: string | null = null;
let isSigningIn = false;

onAuthStateChanged(auth, (user) => {
  if (!user && !isSigningIn) {
    cachedDriveAccessToken = null;
  }
});

export function getCachedDriveAccessToken(): string | null {
  return cachedDriveAccessToken;
}

export function clearCachedDriveAccessToken(): void {
  cachedDriveAccessToken = null;
}

export async function signInWithGoogleDrive(): Promise<{
  user: User;
  accessToken: string | null;
}> {
  isSigningIn = true;
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken ?? null;
    cachedDriveAccessToken = accessToken;
    return { user: result.user, accessToken };
  } finally {
    isSigningIn = false;
  }
}
