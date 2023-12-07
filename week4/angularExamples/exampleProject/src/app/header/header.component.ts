import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() username: string = "";
  usernameProps: any = {};

  ngOnChanges(): void {
      this.usernameProps = {
        'longname': this.username.length >= 10,
        'shortname': this.username.length < 10,
        'startswithA': this.username.startsWith("A")
      }
  }
}
