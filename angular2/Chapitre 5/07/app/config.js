"use strict";
var item_1 = require('./models/item');
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
    Object.defineProperty(Config, "FAKE_COLLECTION", {
        get: function () {
            return [
                new item_1.Item({ reference: '1234', name: 'Thomas', state: 0 }),
                new item_1.Item({ reference: '3456', name: 'Gabriel', state: 1 }),
                new item_1.Item({ reference: '5678', name: 'Eloise', state: 2 })
            ];
        },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map