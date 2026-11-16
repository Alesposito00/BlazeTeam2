# BlazeDex 2 — Guida Compilazione APK Android

L'app è già configurata sia come **progetto nativo Capacitor Android** (`android/` + `capacitor.config.ts`) sia come **PWA completa** compatibile con Bubblewrap / PWABuilder.

## Opzione 1 — Compilazione automatica su GitHub (senza Android Studio)
1. Esporta o carica questo progetto su un repository GitHub.
2. Apri la scheda **Actions → Build Android APK** su GitHub e avvia il workflow (`Run workflow`), oppure esegui un push su `main`/`master`.
3. Al termine, scarica l'artifact **`BlazeDex2-debug-apk`** contenente `app-debug.apk` e installalo sul tuo dispositivo Android.

## Opzione 2 — Compilazione locale con Android Studio / Gradle
Requisiti: Node.js 20+, Java 21 e Android SDK (Android Studio).

```bash
npm install
npm run build:android
cd android
./gradlew assembleDebug
```

Il file APK generato si troverà in:
`android/app/build/outputs/apk/debug/app-debug.apk`

Per compilare un APK Release firmato, apri la cartella `android/` in Android Studio (`npm run cap:open`) e seleziona **Build → Generate Signed Bundle / APK**.

## Opzione 3 — APK TWA da URL pubblicato (PWABuilder)
Se pubblichi l'app web su un dominio HTTPS (Shared App URL), puoi generare un pacchetto Android `.apk` direttamente su [PWABuilder](https://www.pwabuilder.com/) inserendo l'URL pubblico dell'app.
