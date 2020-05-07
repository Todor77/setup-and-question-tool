import { Component, OnInit } from '@angular/core';
import {faCoffee, faPassport, faUser} from '@fortawesome/free-solid-svg-icons';
import {HttpHeaders} from "@angular/common/http";
import {AuthGuardService} from "../_common/services/auth/auth-guard.service";
import {AccountService} from "../_common/services/account/account.service";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faCoffeeIcon = faCoffee;
  faUserNameIcon = faUser;
  faPasswordIcon = faPassport;


  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const userName = form.value.username;
    const password = form.value.password;

    const headers =
      new HttpHeaders()
        .append('Authorization', 'Basic' + btoa(userName + ':' + password))
        .append('Content-Type', 'application/x-ww-form-urlencoded');


    this.accountService.login(form).subscribe(response => {
      console.log(response);
    }, (err) => {
      console.log(err);
    });

    return false;
  }
}
