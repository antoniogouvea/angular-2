import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthorsComponent} from './authors.component';
import {BoldComponent} from './bold.component';
import {AutogrowComponent} from './auto-grow.component';
import {LikeComponent} from './like.component';
import {MediaComponent} from './media.component';
import {AlbumComponent} from './albums.component';
import {ContactComponent} from './contact.component';

import {UserService} from './user.service';
import {HTTP_PROVIDERS} from 'angular2/http';




@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumComponent, useAsDefault: true },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }

])

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
        <h1>Angular 2 Boilerplate</h1>
        <authors></authors>
        <my-bold></my-bold>
        <autogrow (keyup)="start($event)" ></autogrow>
        <like likes=15></like>
        <media avatar={{user.url}} nome={{user.nome}}></media>
        <div *ngFor="#follower of followers">
        <media avatar={{follower.url}} nome={{follower.nome}}></media>
        </div>
        
    `,
    directives: [AuthorsComponent, BoldComponent, AutogrowComponent, LikeComponent, MediaComponent, ROUTER_DIRECTIVES, AlbumComponent, ContactComponent],
    providers: [UserService, HTTP_PROVIDERS]
})

export class AppComponent implements OnInit {
    public user: iUser = { url: "", nome: "" };
    public followers: iUser[];

    constructor(private _userService: UserService) {
    }
    start(e) {
        var value = e.target.value;
        if (value.length >= 3) {
            this.getUser(value);
        }
    }
    getUser(nome?) {
        this._userService.getUser(nome).subscribe(JSON => {
            this.user.url = JSON.url;
            this.user.nome = JSON.nome;
        });
        this._userService.getFollowers(nome).subscribe(JSON => this.followers = JSON)
    }
    ngOnInit() {
        this.getUser();
    }
}
interface iUser {
    url: string;
    nome: string;
}