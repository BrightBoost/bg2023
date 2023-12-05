import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnChanges {
  @Input() name!: string;
  @Input() age!: number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes:", changes)
  }
}
