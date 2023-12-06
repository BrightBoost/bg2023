import { Component } from '@angular/core';

@Component({
  selector: 'app-event-change-select',
  templateUrl: './event-change-select.component.html',
  styleUrls: ['./event-change-select.component.css']
})
export class EventChangeSelectComponent {
  chosen: string = "";

  onChangeSelect(e: any) {
    this.chosen = e.target.value;
  }
}
