import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NewQuestionComponent} from "../new-question/new-question.component";
import {Question} from "../_common/entities/question";
import {QuestionService} from "../_common/services/question/question.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Array<Question> = [];
  questionsCount: number;
  constructor(private modalService: NgbModal,
              private questionService: QuestionService) { }

  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionService.getAll<Question>().subscribe(response => {
      this.questions = response.results;
      this.questionsCount = response.page.totalElements;
    })
  }

  //maybe bette to set a question nummber and on that number to navigate as id
  getId(question) {
    return this.questionService.getId(question);
  }

  navigateToDetailPage(question) {
    this.questionService.navigate(question);
  }

  addNew() {
    const modalRef = this.modalService.open(NewQuestionComponent, {size: 'lg'})
    modalRef.result.then((response) => {
      if(response == 'Close click'){
        return;
      }
      this.questions.push(response);
    })
  }

}
