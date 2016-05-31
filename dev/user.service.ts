import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable'
@Injectable()
export class UserService {
    private _urluser = 'https://api.github.com/users/';
    constructor(private _http: Http) { }
    getUser(name = "octocat") {
        return this._http.get(this._urluser + name)
            .map(res => res.json())
            .map(json => {
                return {
                    url: json.avatar_url,
                    nome: json.login,
                    followersUrl: json.followers_url
                }
            })
    }
    getFollowers(name?) {
        return this.getUser(name).flatMap(json => {
            return this._http.get(json.followersUrl)
                .map(res => res.json())
                .map(json => json.map(obj => {
                    return {
                        url: obj.avatar_url,
                        nome: obj.login
                    }
                }
                ))
        })


    }
}
