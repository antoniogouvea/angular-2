import {Component} from 'angular2/core';

@Component({
    selector: 'autogrow',
    template: `
        {{ text }} <input (focus)="onFocus($event)" (blur)="onBlur($event)">
    `,
})

export class AutogrowComponent {
    text : string;
    
    constructor() {
        this.text = "AutoGrow";
    }
    
    onFocus($event) {
        //console.log($event.target.style.width);
        $event.target.style.width = 200;
    }
    onBlur($event) {
        //console.log($event.target.style.width);
        $event.target.style.width = 150;
    }
    
}