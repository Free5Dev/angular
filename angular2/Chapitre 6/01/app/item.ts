import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Item as ItemModel} from './models/item'; 

@Component({
    selector: 'item',
    templateUrl: 'app/item.html',
    styleUrls: [
        'app/app.component.css'
    ]
})
export class Item {
    @Input() item: ItemModel;
    @Output() onGetDetails = new EventEmitter();

    getDetails(event: Event) {
        event.preventDefault();
        
        this.onGetDetails.emit(this.item);
    }
}