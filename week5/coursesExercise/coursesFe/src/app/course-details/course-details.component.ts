import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../providers/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course!: Course;

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(
        param => {
          const id = param['id'];
          if(id) {
            this.courseService.getCourseById(id).subscribe(
              data => {
                this.course = data;
              }
            )
          }
        }
      )
  }


}
