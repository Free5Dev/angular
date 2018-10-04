"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var item_1 = require('./models/item');
var item_2 = require('./item');
var config_1 = require('./config');
var appComponent = (function () {
    function appComponent() {
        this.title = config_1.Config.APP_TITLE;
        this.version = config_1.Config.APP_VERSION;
        this.collection = config_1.Config.FAKE_COLLECTION;
        this.resetNewItem();
    }
    appComponent.prototype.resetNewItem = function () {
        this.newItem = new item_1.Item({ reference: '', name: '', state: 0 });
    };
    appComponent.prototype.onGetDetails = function (item) {
        console.log(item);
    };
    appComponent.prototype.createObject = function () {
        this.collection.push(this.newItem);
        this.resetNewItem();
    };
    appComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: [
                'app/app.component.css'
            ],
            directives: [item_2.Item]
        }), 
        __metadata('design:paramtypes', [])
    ], appComponent);
    return appComponent;
}());
exports.appComponent = appComponent;
//# sourceMappingURL=app.component.js.map