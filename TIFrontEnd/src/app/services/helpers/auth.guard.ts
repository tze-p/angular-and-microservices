import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../common/authenticator.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.isLoggedIn()) {
            // logged in so return true
            return true;
        }
        console.log ("Not logged in");

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}