import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heartClicked: number = 0;
  dinoClicked: number = 0;
  name: string = "";
  title = 'exampleProject';
  varAge: number = 32;
  fields: string[] = ["id", "name", "price"];
  items = [
    { id: 1, name: 'bananas', price: 10.99 },
    { id: 2, name: 'banana cake', price: 19.99 },
    { id: 3, name: 'apples', price: 4.99 },
    { id: 4, name: 'apple cake', price: 8.99 }
    ];

    filterText = 'cake';
    sortField = 'price';
    sortOrder = 'asc';

  onClickChangeAgeBtn() {
    this.varAge = 33;
  }

  changeFilter(text: string) {
    this.filterText = text;
  }

  onChangeFieldFilter(text: string) {
    this.sortField = text;
  }

  onChangeSortOrder(text: string) {
    this.sortOrder = text;
  }

  setUsername(name: string) {
    this.name = name;
  }

  onHeartClicked() {
    console.log("💛");
    this.heartClicked++;
  }

  onDinoClicked() {
    console.log("🦖");
    this.dinoClicked++;
  }
}
