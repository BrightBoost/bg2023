import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  computerType: string = "";
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(
        (params) => {
          this.computerType = params["type"];
        }
      );
  }


}
