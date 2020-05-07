import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AccountService} from "../account/account.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,
              private accountService: AccountService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.accountService.isLogged()) {
      return true;
    }
    //not logged in then redirect to login page
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;

  }

}
