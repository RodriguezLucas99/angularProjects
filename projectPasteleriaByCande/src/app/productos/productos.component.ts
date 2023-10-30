import { Component } from '@angular/core';
import { productosObj } from '../productosObj'

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
}
