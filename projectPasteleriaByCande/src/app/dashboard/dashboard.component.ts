import { Component } from '@angular/core';
import { DessertsService } from '../desserts.service';
import { productosObj } from '../productosObj';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  productosLista:productosObj[]=[];
  constructor(private dessertService:DessertsService){}
  getDessert(): void {
    this.dessertService.getList()
        .subscribe(p => this.productosLista = p);
  }
  ngOnInit(): void {
    this.getDessert();
  }
}
