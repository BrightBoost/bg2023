import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-score-bar',
  templateUrl: './score-bar.component.html',
  styleUrls: ['./score-bar.component.css']
})
export class ScoreBarComponent implements OnChanges {
  @Input() nrClicksDino: number = 0;
  @Input() nrClicksHeart: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['nrClicksDino']) {
        console.log("Dino changed");
      } else if(changes["nrClicksHeart"]) {
        console.log("Heart changed");
      }
  }

}
