type Translations = Record<string, Record<string, string>>;
export interface NegodesignConfig {
    translations?: Translations;
}
export declare function defineNegodesignConfig(userConfig: NegodesignConfig): NegodesignConfig;
export declare function getConfig(): NegodesignConfig;
export {};
