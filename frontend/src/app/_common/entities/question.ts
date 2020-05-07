import {Answer} from "./answer";

export class Question {
  id: number;
  question: string;
  answer: Answer;

  constructor() {
    this.id = null;
    this.question = null;
    this.answer = new Answer();
  }
}
