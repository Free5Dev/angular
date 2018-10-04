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
var item_1 = require('./item');
var item_form_1 = require('./item.form');
var item_filter_1 = require('./pipes/item.filter');
var config_1 = require('./config');
var appComponent = (function () {
    function appComponent() {
        this.title = config_1.Config.APP_TITLE;
        this.version = config_1.Config.APP_VERSION;
        this.collection = config_1.Config.FAKE_COLLECTION;
    }
    appComponent.prototype.onGetDetails = function (item) {
        console.log(item);
    };
    appComponent.prototype.onCreateItem = function (item) {
        this.collection.push(item);
    };
    appComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: [
                'app/app.component.css'
            ],
            directives: [item_1.Item, item_form_1.ItemForm],
            pipes: [item_filter_1.ItemPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], appComponent);
    return appComponent;
}());
exports.appComponent = appComponent;
//# sourceMappingURL=app.component.js.map