import { Component } from '@angular/core';
import { productosObj } from '../productosObj';
import { DessertsService } from '../desserts.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
    cheeseCake:productosObj={
      id:1,
      name:'Cheese Cake Arandanos',
      price:1200,
      filling:["Arandanos","galletitas","mani"]
    }
    productosLista:productosObj[]=[];
    /* selectedP?:productosObj;
    onSelect(producto:productosObj):void{
      this.selectedP=producto;
    } */
    constructor(private dessertService:DessertsService){}
    /* getDessert(): void {
      this.productosLista = this.dessertService.getHeroes();
    } */
    getDessert(): void {
      this.dessertService.getList()
          .subscribe(p => this.productosLista = p);
    }
    ngOnInit(): void {
      this.getDessert();
    }
}
