import {Component, Input, OnInit} from '@angular/core';
import {Answer} from "../../_common/entities/answer";
import {Question} from "../../_common/entities/question";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input()
  answer: Answer;

  constructor() { }

  ngOnInit(): void {
  }

}
