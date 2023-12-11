import { Component } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YugiohGame';
  card: Card = new Card(1, "Blue eyed dragon", 8, "some src", "Dragon with blue eyes", "dragon", 3000, 2500); // certified beast

}
