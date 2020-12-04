import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-multiple-choice-question",
  templateUrl: "./multiple-choice-question.component.html",
  styleUrls: ["./multiple-choice-question.component.css"],
})
export class MultipleChoiceQuestionComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  @Input()
  question = {
    _id: "",
    title: "",
    type: "",
    choices: [],
    correct: "",
    question: "",
  };
  @Input()
  answer = "";
  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () => this.answerChange.emit(this.answer);
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

  ngOnInit(): void {}
}
