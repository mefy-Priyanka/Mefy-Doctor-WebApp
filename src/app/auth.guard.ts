import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    doctorProfileId: any;
    constructor(private router: Router) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ) {
        this.doctorProfileId = localStorage.getItem('doctorId');
        if (this.doctorProfileId) {
            // logged in so return true'
            // this.router.navigate(['/dashboard'])
            return true;
        }
        
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/newlogin']);
            return false;
    




    }
}