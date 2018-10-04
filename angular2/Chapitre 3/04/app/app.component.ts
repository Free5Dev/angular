import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class appComponent {
    private title: string;
    private text: string;

    constructor() {
        this.title = 'Salut !';
        this.text = 'Un paragraphe';
    }
}