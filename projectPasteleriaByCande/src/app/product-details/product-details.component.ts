import { Component,Input } from '@angular/core';
import { productosObj } from '../productosObj';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DessertsService } from '../desserts.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product? : productosObj;
  constructor(
    private route: ActivatedRoute,
    private Service:DessertsService ,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.Service.getDessert(id)
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.product) {
      this.Service.updateDessert(this.product)
        .subscribe(() => this.goBack());
    }
  }
}

