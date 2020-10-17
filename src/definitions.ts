declare module '@capacitor/core' {
  interface PluginRegistry {
    call: callPlugin;
  }
}

export interface callPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
