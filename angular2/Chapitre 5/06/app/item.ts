import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Item as ItemModel} from './models/item'; 

@Component({
    selector: 'item',
    templateUrl: 'app/item.html'
})
export class Item {
    @Input() item: ItemModel;

    getDetails(event: Event) {
        event.preventDefault();
    }
}