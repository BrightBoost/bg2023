import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private endpoint: string = "http://localhost:8081/api/"

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get(this.endpoint + "courses")
      .pipe(map(res => <Course[]>res));
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get(this.endpoint + "courses/" + id)
    .pipe(map(res => <Course>res));
  }
}
