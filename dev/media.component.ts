import {Component, Input} from 'angular2/core';

@Component({
    selector: 'media',
    template: `
  <div>
  <img [src]=avatar />
  <span>{{nome}}</span>
  </div>
  `,
  styles:[`
    img{
       width:100px;
       height:auto;
       border-radius:100%;
       vertical-align:middle; 
    }  
  `] 
})
export class MediaComponent {
    @Input() avatar = '';
    @Input() nome = '';

    constructor() {

    }
}