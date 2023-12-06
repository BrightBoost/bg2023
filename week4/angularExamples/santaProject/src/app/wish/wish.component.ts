import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  wish!: any;
  wishes: Array<any> = [
    { id: 1, name: "MacBook Pro" },
    { id: 2, name: "High-Resolution Dual Monitors" },
    { id: 3, name: "Ergonomic Chair" },
    { id: 4, name: "Subscription to Coding Courses" },
    { id: 5, name: "Noise-Cancelling Headphones" },
    { id: 6, name: "Professional Development Books" },
    { id: 7, name: "Software Licenses (e.g., IDEs)" },
    { id: 8, name: "Desk Organizer Set" },
    { id: 9, name: "High-Speed Internet Subscription" },
    { id: 10, name: "Coffee Machine" }
  ];

  constructor(private activatedRoute: ActivatedRoute) {
   
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.wish = this.wishes.find(w =>  w.id == params["id"]);
    })
  }

}
