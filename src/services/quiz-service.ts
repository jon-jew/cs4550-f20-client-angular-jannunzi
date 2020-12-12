import { Injectable } from "@angular/core";

const options = {

  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3008",
    "Access-Control-Allow-Credentials": "false",
  },
};

@Injectable()
export class QuizService {
  findAllQuizzes = () =>
    fetch("http://localhost:3008/api/quizzes", options).then((response) =>
      response.json()
    );
  findQuizForCourse = (qid: any) =>
    fetch(
      `http://localhost:3008/api/quizzes/${qid}`,
      options
    ).then((response) => response.json());
  findQuestionsForQuiz = (qid: any) =>
    fetch(
      `http://localhost:3008/api/quizzes/${qid}/questions`,
      options
    ).then((response) => response.json());
}
