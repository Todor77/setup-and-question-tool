import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Question} from "../_common/entities/question";
import {NgForm} from "@angular/forms";
import {QuestionService} from "../_common/services/question/question.service";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  question: Question = new Question();

  constructor(public activeModal: NgbActiveModal,
              private questionService: QuestionService) { }

  ngOnInit() {
  }

  save(questionForm: NgForm) {
    if(!questionForm.valid){
      return;
    }
    this.questionService.create(this.question).subscribe(response => {
      console.log(response);
      this.close(response);

    }, error => {
      console.log(error);
    });
  }

  close(response) {
    this.activeModal.close(response);
  }
}
