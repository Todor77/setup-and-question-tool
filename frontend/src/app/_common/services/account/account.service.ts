import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {User} from "../../entities/user";
import {NgForm} from "@angular/forms";

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userSubject: BehaviorSubject<User>

  constructor(private router: Router,
              private http: HttpClient) {
  }

  login(form: NgForm) {
    return this.http.post<User>("/login" ,{username: form.value.username, password: form.value.password})
  }

  logout() {
    this.http.post('/api/logout', {}).subscribe(response => {
      console.log(response);
      //here we have to navigate to /login
    })
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null}
}
