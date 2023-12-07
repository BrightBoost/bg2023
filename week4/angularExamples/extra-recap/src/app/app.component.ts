import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'extra-recap';
  name = "Zoe";
  example: string = "";

  sayHi() {
    alert("hi!");
  }

  changeExample(text: string) {
    this.example = text;
  }
  changeName() {
    this.name = "blabla";
  }
}
