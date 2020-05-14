import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../_common/entities/answer";
import {QuestionService} from "../../_common/services/question/question.service";
import {Question} from "../../_common/entities/question";

@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.css']
})
export class AnswerEditComponent implements OnInit {

  @Input()
  answer: Answer;

  @Input()
  isNewEntry: boolean;

  @Input()
  question: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
  }

  save() {

    if(this.isNewEntry) {
      this.questionService.answers().create(this.answer).subscribe(response => {
        console.log(response);
      });
    } else {
      this.questionService.answers().patch(this.answer).subscribe(response => {
        console.log(response);
      });
    }
  }

  close() {

  }
}
