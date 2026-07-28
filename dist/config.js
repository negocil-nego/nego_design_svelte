let config = {};
export function defineNegodesignConfig(userConfig) {
    config = userConfig;
    return config;
}
export function getConfig() {
    return config;
}
