import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'it.blazedex2.app',
  appName: 'BlazeDex 2',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#09090b',
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
};

export default config;
