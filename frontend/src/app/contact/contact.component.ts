import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {WorkSheet} from "../domain/work-sheet";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  groups : WorkSheet;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<WorkSheet>('/api/groups').subscribe(response => {
      this.groups = response[0];
    })
  }

}
