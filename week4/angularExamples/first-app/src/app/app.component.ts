import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blabla-app';
  date: Date = new Date();

  addName(name: string) {
    console.log('add name:', name);
  }
}
