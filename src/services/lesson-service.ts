import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/modules/${moduleId}/lessons`)
      .then(response => response.json())
}
