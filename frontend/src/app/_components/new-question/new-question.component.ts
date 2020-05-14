import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Question} from "../../_common/entities/question";
import {NgForm} from "@angular/forms";
import {QuestionService} from "../../_common/services/question/question.service";
import {Answer} from "../../_common/entities/answer";

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  @Input()
  question: Question;

  @Input()
  isNewEntry: boolean;

  answer: Answer = new Answer();

  constructor(public activeModal: NgbActiveModal,
              private questionService: QuestionService) { }

  ngOnInit() {
  }

  save(questionForm: NgForm) {
    if(!questionForm.valid){
      return;
    }
    if(this.isNewEntry) {
      this.questionService.create(this.question).subscribe(response => {
        this.close(response);
      });
    } else {
      this.questionService.update(this.question).subscribe(response => {
        this.close(response);
      });
    }

  }

  close(response) {
    this.activeModal.close(response);
  }
}
