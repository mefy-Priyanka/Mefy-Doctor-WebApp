import { Injectable } from '@angular/core';
// import { FuseConfigService } from './core/services/config.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    doctorProfileId: any;
    constructor(private router: Router) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ) {
        this.doctorProfileId = localStorage.getItem('loginId');
        if (this.doctorProfileId) {

            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);


        return false;
    }
}