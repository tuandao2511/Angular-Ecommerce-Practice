import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 

  prudct_title = 'my-angular-practice';
  names = ["A","B","C"];
  product = {};
  image : string = "https://dienmaycholon.vn/public/userupload/images/iphone-12-5g.png";
  products : any [] = [
    {id:1, name: 'iphone 5', image: this.image, price: 12000},
    {id:2, name: 'iphone 6', image: this.image, price: 16000},
    {id:3, name: 'iphone 7', image: this.image, price: 18000},
    {id:4, name: 'iphone 8', image: this.image, price: 18000},
    {id:5, name: 'iphone 9', image: this.image, price: 18000},
    {id:6, name: 'iphone 10', image: this.image, price: 18000}
  ]

  ngOnInit(): void {
  }

  addToCartParent(product: any) {
    this.product = product;
  }
  
  viewMore(product: any) {
    console.log(product);
  }

}
