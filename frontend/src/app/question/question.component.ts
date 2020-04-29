import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../_common/services/question/question.service";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../_common/entities/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question = new Question();

  constructor(private questionService: QuestionService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.route.params.subscribe(params => {
      this.questionService.getById<Question>(params.id).subscribe(response => {
        this.question = response;
      })
    })
  }

}
