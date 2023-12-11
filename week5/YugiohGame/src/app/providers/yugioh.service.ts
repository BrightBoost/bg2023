import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class YugiohService {
  private cards: Card[] = [
    new Card(1, "Blue-Eyes White Dragon", 8, "blue-eyes.jpg", "This legendary dragon is a powerful engine of destruction.", "Dragon", 3000, 2500),
    new Card(2, "Dark Magician", 7, "dark-magician.jpg", "The ultimate wizard in terms of attack and defense.", "Spellcaster", 2500, 2100),
    new Card(3, "Red-Eyes Black Dragon", 7, "red-eyes.jpg", "A ferocious dragon with a deadly attack.", "Dragon", 2400, 2000),
    new Card(4, "Exodia the Forbidden One", 3, "exodia.jpg", "An automatic victory can be declared by the player whose hand contains this card along with the Right Leg/Left Leg/Right Arm/Left Arm of the Forbidden One.", "Spellcaster", 1000, 1000),
    new Card(5, "Slifer the Sky Dragon", 10, "slifer.jpg", "The heavens twist and thunder roars, signaling the coming of this ancient creature, and the dawn of true power.", "Dragon", 4000, 4000),
];

  constructor() { }

  getCards(): Card[] {
    return this.cards;
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

}
