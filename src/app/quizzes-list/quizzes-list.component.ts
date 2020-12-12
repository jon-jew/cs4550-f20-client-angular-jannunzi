import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../services/quiz-service';

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.css']
})
export class QuizzesListComponent implements OnInit {

  constructor(private service: QuizService,
              private route: ActivatedRoute) { }

  courseId = '';
  quizzes: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('quizParams', params);
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
    });

  }

}
