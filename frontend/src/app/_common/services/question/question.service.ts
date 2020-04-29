import { Injectable } from '@angular/core';
import {CrudService} from "../crud.service";
import {HttpClient} from "@angular/common/http";
import {Question} from "../../entities/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends CrudService<Question>{

  constructor(http: HttpClient) {
    super(http, "questions");
  }

  navigate(question: Question) {
    window.location.href = this.getSelfLink(question).replace(this.restEndpoint, "");
  }
}
