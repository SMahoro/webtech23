import { Injectable } from '@angular/core';
import { Router,  ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree, CanActivate} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'

})
export class AuthguardGuard  {
  constructor( private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree {
    return this.auth.isLoggedin()
      ? true
      : this.router.parseUrl('/login');
  }
}
