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

  fetchQuestionsChunk(currentPage: number) {
    let pageSize = 20;
    let page = currentPage ? currentPage : 0;

    return this.getAll(page, pageSize, 'question,asc')
  }
}
