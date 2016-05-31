import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <p (click)="toggleCurtir()" [class.bold]="clicado">S2 {{ likes }}</p>
    `,
})

export class LikeComponent {
    //likes : number;
    @Input() likes;
    clicado : boolean;
    
    constructor () {
        this.likes = 0;
        this.clicado = false;
    }
    
    toggleCurtir() {
        if (this.clicado) {
            this.likes--;
        }
        else {
            this.likes++;
        }
        this.clicado = !this.clicado;
    }
}