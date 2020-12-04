import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuestionService } from "../../services/question-service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  questions = [];
  quizId = "";
  constructor(private svc: QuestionService, private route: ActivatedRoute) {}

  submitQuiz = () => {
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: "POST",
      body: JSON.stringify(this.questions),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  ngOnInit(): void {
    this.route.params.subscribe((ps) => {
      this.quizId = ps.quizId;
      this.svc
        .findQuestionsForQuiz(this.quizId)
        .then((qs) => (this.questions = qs));
    });
  }
}
