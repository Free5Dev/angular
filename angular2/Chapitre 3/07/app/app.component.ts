import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: [
        '.state-0 { color: red }',
        '.state-1 { color: blue }',
        '.state-2 { color: green }',
    ]
})
export class appComponent {
    private title: string;
    private version: string;
    private collection: [any];

    constructor() {
        this.title = 'Application livreur';
        this.version = '1.0';
        this.collection = [
            {reference: '1234', name: 'Thomas', state: 0},
            {reference: '3456', name: 'Gabriel', state: 1},
            {reference: '5678', name: 'Eloise', state: 2}
        ];
    }
}