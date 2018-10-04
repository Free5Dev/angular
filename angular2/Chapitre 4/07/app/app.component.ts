import {Component} from "@angular/core";

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
    private collection: [any];
    private newItem: {reference:string, name:string, state:number};

    constructor() {
        this.title = 'Application livreur';
        this.version = '1.0';
        this.collection = [
            {reference: '1234', name: 'Thomas', state: 0},
            {reference: '3456', name: 'Gabriel', state: 1},
            {reference: '5678', name: 'Eloise', state: 2}
        ];

        this.resetNewItem();
    }

    resetNewItem() {
        this.newItem = {reference: '', name: '', state: 0};
    }

    getDetails(event: Event, parameter: string) {
        event.preventDefault();
        let element = event.target || event.srcElement || event.currentTarget;

        console.log(element.id);
        console.log(parameter);
    }

    createObject() {
        this.collection.push(this.newItem);
        this.resetNewItem();        
    }
}