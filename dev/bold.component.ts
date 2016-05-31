import {Component} from 'angular2/core';

@Component({
    selector: 'my-bold',
    template: `
        <p (click)="setBold()" [class.bold]="isBold">
            {{ text }}
        </p>
    `,
})

export class BoldComponent {
    text : string;
    isBold : boolean;
    
    constructor() {
        this.text = "Adicionando a classe 'bold' ao clicar...";
        this.isBold = false;
    }
    
    setBold() {
        this.isBold = !this.isBold;
    }

}