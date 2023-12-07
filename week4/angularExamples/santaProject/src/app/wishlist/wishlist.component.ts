import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
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

  constructor(private router: Router) {

  }

  getWishPage(id: number, name: string) {
    this.router.navigate(["/wish"], {
      queryParams: { id: id, name: name }
    });
  }

  addWish(wishName: string) {
    this.wishes.push({id: this.wishes.length + 1, name: wishName});
  }

}
