import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
// import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-true-false-question",
  templateUrl: "./true-false-question.component.html",
  styleUrls: ["./true-false-question.component.css"],
})
export class TrueFalseQuestionComponent implements OnInit {
  constructor() {}

  @Input()
  question = { _id: "", title: "", question: "", answer: "", correct: "" };
  @Input()
  answer = "";
  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () => {
    this.answerChange.emit(this.answer);
  };

  @Input()
  grading = false;

  select = (event: any) => {
    if (!this.grading) {
      this.answer = event.target.value;
      this.answerChange.emit(this.answer);
    }
  };

  grade = () => {
    this.grading = true;
  };

  ngOnInit(): void {
    // console.log('test');
  }
}
