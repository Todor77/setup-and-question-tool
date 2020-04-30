import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../_common/services/question/question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../_common/entities/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: Question = new Question();
  questionId: string;

  constructor(private questionService: QuestionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.route.params.subscribe(params => {
      this.questionId = params.id;
      this.questionService.getById<Question>(params.id).subscribe(response => {
        this.question = response;
      })
    })
  }

  next() {
    //should fix, ist not 30 a fix number , so this will work till 30, and should work will end of the questions.
    if(this.questionId == '30') return 30;
    return parseInt(this.questionId) + 1;
  }

  previous() {
    if(this.questionId == '1') return 1;
    return parseInt(this.questionId) - 1;
  }
}
