import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { User } 		 from '../user/user';

import '../operators/rxjs-operators';

@Injectable()
export class ApiService {

	private http:Http;
	private domain:String;
	private user:User;

	constructor(http: Http) {
		this.http   = http;
		this.domain = "http://localhost:3002";
	}

	setUser(user: User) {
		this.user = user;
	}

	getUser() {
		return this.user;
	}

	createAuthorizationHeader(headers:Headers) {
		headers.append('Authorization', 'Basic ' + btoa(this.user.name + ':' + this.user.password)); 
		headers.append("Content-Type", "application/x-www-form-urlencoded");
	}

	get(url) {
		let headers  = new Headers();
		this.createAuthorizationHeader(headers);
		let finalUrl = this.domain + url;
		return this.http.get(finalUrl, {
		  headers: headers
		});
	}

	post(url, data, headers:Headers) {
		this.createAuthorizationHeader(headers);
		let finalUrl = this.domain + url;
		let finalUrl = this.domain + url;
		return this.http.post(this.finalUrl, data, {
		  headers: headers
		});
	}
}