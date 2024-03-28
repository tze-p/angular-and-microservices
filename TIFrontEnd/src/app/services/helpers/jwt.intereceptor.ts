import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../common/authenticator.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const isLoggedIn = this.authenticationService.isLoggedIn();
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    //Authorization: `Bearer ${this.authenticationService.getToken()}`
                    authorization: `${this.authenticationService.getToken()}`
                }
            });
        }
        // console.log('Is logged: ' + isLoggedIn + ', isUrl: ' + isApiUrl)
        // console.log('URL: ' + environment.apiUrl)
        // console.log('Token: ' + `${this.authenticationService.getToken()}`)
        return next.handle(request);
    }
}