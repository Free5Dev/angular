import {Component} from "@angular/core";
import {Item} from './models/item';
import {Item as ItemComponent} from './item';
import {ItemForm} from './item.form';
import {Config} from './config';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ],
    directives: [ItemComponent, ItemForm]
})
export class appComponent {
    private title: string;
    private version: string;
    private collection: [Item];

    constructor() {
        this.title = Config.APP_TITLE;
        this.version = Config.APP_VERSION;
        this.collection = Config.FAKE_COLLECTION;
    }

    onGetDetails(item) {
        console.log(item);
    }

    onCreateItem(item) {
        this.collection.push(item);
    }
}