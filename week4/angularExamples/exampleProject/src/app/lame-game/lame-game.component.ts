import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lame-game',
  templateUrl: './lame-game.component.html',
  styleUrls: ['./lame-game.component.css']
})
export class LameGameComponent {
  @Output() dinosaurClickedEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() heartClickedEvent: EventEmitter<number> = new EventEmitter<number>();

  onBtnClicked(event: any) {
    if(event.target.id == "btn1") {
      this.dinosaurClickedEvent.emit(1);
    } else if(event.target.id == "btn2") {
      this.heartClickedEvent.emit(1);
    }
  }
}
