import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class appComponent {
    private title: string;
    private version: string;
    private collection: [any];

    constructor() {
        this.title = 'Application livreur';
        this.version = '1.0';
        this.collection = [
            {reference: '1234', name: 'Thomas'},
            {reference: '3456', name: 'Gabriel'},
            {reference: '5678', name: 'Eloise'},
        ]
    }
}