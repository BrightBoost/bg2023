import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-explained',
  templateUrl: './binding-explained.component.html',
  styleUrls: ['./binding-explained.component.css']
})
export class BindingExplainedComponent {
  notChanged: boolean = true;
  onChangeText() {
    this.notChanged = false;
  }
}
