import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const appRoutes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'course', component: CourseDetailsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
