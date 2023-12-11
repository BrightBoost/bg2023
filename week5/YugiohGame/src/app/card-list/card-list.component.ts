import { Component, OnInit } from '@angular/core';
import { YugiohService } from '../providers/yugioh.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [];
  constructor(private yugiohService: YugiohService ) {

  }

  ngOnInit(): void {
      this.cards = this.yugiohService.getCards();
  }
}
