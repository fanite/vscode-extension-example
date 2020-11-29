type DefaultOptions = {
  sdkRoot: string | null;
  udid: string | null;
  appDeviceReadyTimeout: string | null;
  useKeystore: string | null;
  keystorePath: string | null;
  keystorePassword: string | null;
  keyAlias: string | null;
  keyPassword: string | null;
  executable: object;
  tmpDir: string | null;
  curDeviceId: string | null;
  emulatorPort: string | null;
  logcat: string | null;
  binaries: object;
  instrumentProc: string | null;
  suppressKillServer: string | null;
  jars: object;
  adbPort: number;
  adbExecTimeout: number;
  remoteAppsCacheLimit: number;
  buildToolsVersion: string | null;
  allowOfflineDevices: boolean;
  allowDelayAdb: boolean;
};

declare class ADB {
  /**
   * ADB 实例
   * @param options
   */
  constructor(options?: DefaultOptions);
  /**
   * 创建ADB实例
   * @param options
   */
  createADB(options?: DefaultOptions): ADB;

  getPIDsByName(arg: string): void;
}

declare namespace ADB {
  export const DEFAULT_ADB_PORT: 5037;
  export function createADB(options?: DefaultOptions): ADB;
}

export as namespace ADBLib;

export = ADB;
