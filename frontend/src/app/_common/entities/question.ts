import {Answer} from "./answer";

export class Question {
  question: string;
  answer_id: number;
  _links: links;

}


interface links {
  answer: {
    href: string;
    templated: boolean;
  }
}
