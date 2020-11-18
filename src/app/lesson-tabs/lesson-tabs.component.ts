import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ModuleService } from "../../services/module-service";
import { LessonService } from "../../services/lesson-service";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  modules = [];
  lessons = [];
  course = '';
  selectedLesson = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleService,
    private lessonService: LessonService,
  ) {}
  
  selectLesson = (lesson) => {
    this.selectedLesson = lesson;
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      const moduleId = params.moduleId;
      this.course = params.courseId;
      if (typeof moduleId !== "undefined") {
        this.lessonService
          .findLessonsForModule(moduleId)
          .then((lessons) => {
            this.lessons = lessons
            console.log(lessons);
          });
      }
    });
  }

}
