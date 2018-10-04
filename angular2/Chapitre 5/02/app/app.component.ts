import {Component} from "@angular/core";
import {Item} from './models/item';
import {Config} from './config';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ]
})
export class appComponent {
    private title: string;
    private version: string;
    private collection: [Item];
    private newItem: Item;

    constructor() {
        this.title = Config.APP_TITLE;
        this.version = Config.APP_VERSION;
        this.collection = [
            new Item({reference: '1234', name: 'Thomas', state: 0}),
            new Item({reference: '3456', name: 'Gabriel', state: 1}),
            new Item({reference: '5678', name: 'Eloise', state: 2})
        ];

        this.resetNewItem();
    }

    resetNewItem() {
        this.newItem = new Item({reference: '', name: '', state: 0});
    }

    getDetails(event: Event, parameter: string) {
        event.preventDefault();
        let element = event.target || event.srcElement || event.currentTarget;

        console.log(element);
        console.log(parameter);
    }

    createObject() {
        this.collection.push(this.newItem);
        this.resetNewItem();        
    }
}