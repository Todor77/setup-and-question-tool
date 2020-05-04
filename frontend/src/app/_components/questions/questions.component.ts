import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NewQuestionComponent} from "../new-question/new-question.component";
import {Question} from "../../_common/entities/question";
import {QuestionService} from "../../_common/services/question/question.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Array<Question> = [];
  questionsCount: number;
  querySearch: string;
  isNewEntry: boolean = true;
  currentPage: number = 0;
  numberOfPages: number = 0;

  constructor(private modalService: NgbModal,
              private questionService: QuestionService) { }

  ngOnInit() {
    this.fetchQuestionsChunk(this.currentPage);
  }

  //maybe better to set a question nummber and on that number to navigate as id
  getQuestionId(question) {
    return this.questionService.getQeustionId(question);
  }

  addOrEditQuestion(isNewEntry: boolean, question?) {
    const modalRef = this.modalService.open(NewQuestionComponent, {size: 'lg'});
    if(!isNewEntry) {
      modalRef.componentInstance.question = question;
      modalRef.componentInstance.isNewEntry = false;
    }
    if(isNewEntry) {
      modalRef.componentInstance.question = new Question();
      modalRef.componentInstance.isNewEntry = true;
    }
    modalRef.result.then((response) => {
      if(response == 'Close click'){
        return;
      }
      this.questions.push(response);
    })
  }

  delete(question: Question, index) {
    this.questionService.delete(question).subscribe(response => {
      console.log(response);
      this.questions.splice(index, 1);
    });
  }

  getNumberAsArray(number) {
    var numbersArray: number[] = new Array(number), temporaryArray: number[] = [];
    for (var i = 0; i < numbersArray.length; i++) {
      temporaryArray.push(i);
    }
    return temporaryArray;
  }

  fetchQuestionsChunk(requestedPage: number) {
    this.questionService.fetchQuestionsChunk(requestedPage).subscribe(response => {
      this.setQuestions(requestedPage, response);
    })
  }

  private setQuestions(requestedPage: number, response) {
    this.questions = response.results;
    if(response.page) {
      this.numberOfPages = response.page.totalPages;
      this.questionsCount = response.page.totalElements;
    }
    if(requestedPage >= 0 && requestedPage < this.numberOfPages) {
      this.currentPage = requestedPage;
    }
  }

  trackByIndex(index) {
    return index
  }
}
