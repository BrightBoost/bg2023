import { Component } from '@angular/core';

@Component({
  selector: 'app-populate-select',
  templateUrl: './populate-select.component.html',
  styleUrls: ['./populate-select.component.css']
})
export class PopulateSelectComponent {
  people: Array<string> = ["Sophie", "Amy", "Louisa", "Lovro"];
  people2: Array<any> = [{ id: 1, name: "Cameron" }, { id: 2, name: "Anastasiia" }, { id: 3, name: "Amber" }];
}
