import {Component} from "@angular/core";
import {Item} from './models/item';
import {Item as ItemComponent} from './item';
import {Config} from './config';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ],
    directives: [ItemComponent]
})
export class appComponent {
    private title: string;
    private version: string;
    private collection: [Item];
    private newItem: Item;

    constructor() {
        this.title = Config.APP_TITLE;
        this.version = Config.APP_VERSION;
        this.collection = Config.FAKE_COLLECTION;

        this.resetNewItem();
    }

    resetNewItem() {
        this.newItem = new Item({reference: '', name: '', state: 0});
    }

    onGetDetails(item) {
        console.log(item);
    }

    createObject() {
        this.collection.push(this.newItem);
        this.resetNewItem();        
    }
}