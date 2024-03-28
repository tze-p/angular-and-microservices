import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { GlobalUser } from '../../model/global/global.entity'
import { Observable } from 'rxjs';
import { ErrorHandler } from '../common/ErrorHandler.service';

import * as moment from "moment";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService extends ErrorHandler {
     
    constructor(    
        private router: Router,
        private http: HttpClient) {
        super();
    }
      
    login(username:string, password:string ): Observable<any> {
        // console.log(`${environment.apiUrl}/api/login`);
        return this.http.post(
            `${environment.apiUrl}/api/login`, 
            {username, password});
    }

    setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        // console.log("Set Session: " + authResult.id_token);
        // console.log("Set Session: " + authResult.expiresIn);
        localStorage.setItem('id_token', authResult.id_token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }          

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        this.router.navigate(['/login']);
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    

    getToken() {
        const token = localStorage.getItem("id_token");
        return token;
    }

}