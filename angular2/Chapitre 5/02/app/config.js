"use strict";
var Config = (function () {
    function Config() {
    }
    Object.defineProperty(Config, "APP_TITLE", {
        get: function () { return 'Application livreur pour le client'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config, "APP_VERSION", {
        get: function () { return '1.0'; },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map