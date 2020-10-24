import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  image : string = "https://dienmaycholon.vn/public/userupload/images/iphone-12-5g.png";
  products : any [] = [
    {id:1, name: 'iphone 5', image: this.image, price: 12000},
    {id:2, name: 'iphone 6', image: this.image, price: 16000},
    {id:3, name: 'iphone 7', image: this.image, price: 18000},
    {id:4, name: 'iphone 8', image: this.image, price: 18000},
    {id:5, name: 'iphone 9', image: this.image, price: 18000},
    {id:6, name: 'iphone 10', image: this.image, price: 18000}
  ]
  product: any;


  constructor(private router: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const id = this.router.snapshot.queryParamMap.get('id');
    this.router.params.subscribe((res :any) => {
      const id = res.id;
      const product = this.products.filter((item) => {
          return item.id == id;
      })[0];
      this.product = product;
      console.log(product);
    })
  }

}
