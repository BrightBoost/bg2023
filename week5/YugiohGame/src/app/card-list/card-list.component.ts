import { Component, OnInit } from '@angular/core';
import { YugiohService } from '../providers/yugioh.service';
import { Card } from '../models/card.model';
import { CardInfoService } from '../providers/card-info.service';
import { OnlineCard } from '../models/online-card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [];
  onlineCards: OnlineCard[] = [];
  constructor(private yugiohService: YugiohService, private cardInfoService: CardInfoService ) {

  }

  ngOnInit(): void {
      this.cards = this.yugiohService.getCards();
      this.cardInfoService.getAllCards().subscribe(data => {
        this.onlineCards = data.data;
        console.log(this.onlineCards);
      })
  }
}
