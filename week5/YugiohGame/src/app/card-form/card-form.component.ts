import { Component } from '@angular/core';
import { Card } from '../models/card.model';
import { YugiohService } from '../providers/yugioh.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  card: Card = new Card(0, "", 0, "", "", "", 0, 0);

  constructor(private yugiohService: YugiohService) {

  }
  onSubmit() {
    console.log(JSON.stringify(this.card));
    this.yugiohService.addCard(this.card);
  }
}
