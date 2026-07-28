type Translations = Record<string, Record<string, string>>;

export interface NegodesignConfig {
    translations?: Translations;
}

let config: NegodesignConfig = {};

export function defineNegodesignConfig(userConfig: NegodesignConfig): NegodesignConfig {
    config = userConfig;
    return config;
}

export function getConfig(): NegodesignConfig {
    return config;
}
