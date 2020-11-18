import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModuleService } from "../../services/module-service";
import { LessonService } from "../../services/lesson-service";

@Component({
  selector: "app-module-list",
  templateUrl: "./module-list.component.html",
  styleUrls: ["./module-list.component.css"],
})
export class ModuleListComponent implements OnInit {
  modules = [];
  lessons = [];
  course = "";
  selectedModule = { }

  constructor(
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleService,
    private lessonService: LessonService,
  ) {}

  selectModule = (module) => {
    this.selectedModule = module;
    this.lessonService
      .findLessonsForModule(module)
      .then((lessons) => (this.lessons = lessons));
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const courseId = params.courseId;
      this.course = params.courseId;
      if (typeof courseId !== "undefined") {
        this.moduleService
          .findModulesForCourseId(courseId)
          .then((modules) => (this.modules = modules));
      }
    });
  }
}
