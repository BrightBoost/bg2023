import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../providers/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(
      data => {
        this.courses = data;
      }
    );
  }

  goToCoursePage(id: number) {
    this.router.navigate(["/course"], {
      queryParams: { id: id}
    });
  }
}
