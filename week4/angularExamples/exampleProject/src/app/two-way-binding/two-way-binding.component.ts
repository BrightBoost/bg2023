import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  name: string = "";

  submittingTheForm(event: any) {
    console.log("submitting the form");
    console.dir(event);
  }
}
