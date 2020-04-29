import { Component, OnInit } from '@angular/core';
import {faCoffee, faPassport, faUser} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faCoffeeIcon = faCoffee;
  faUserNameIcon = faUser;
  faPasswordIcon = faPassport;
  constructor() { }

  ngOnInit() {
  }

}
