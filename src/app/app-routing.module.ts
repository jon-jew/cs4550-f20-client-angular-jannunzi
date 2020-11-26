import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseNavigatorComponent } from "./course-navigator/course-navigator.component";
import {QuizzesListComponent} from './quizzes-list/quizzes-list.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  { path: "courses", component: CourseNavigatorComponent },
  { path: "courses/:courseId/modules", component: CourseNavigatorComponent },
  {
    path: "courses/:courseId/modules/:moduleId/lessons",
    component: CourseNavigatorComponent,
  },
  {
    path: "courses/:courseId/modules/:moduleId/lessons/:lessonId/topics",
    component: CourseNavigatorComponent,
  },
  {
    path:
      "courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets",
    component: CourseNavigatorComponent,
  },
  {path: 'courses/:courseId/quizzes', component: QuizzesListComponent},
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
