import { Injectable } from '@angular/core';
import { productosObj } from './productosObj';
import { productosList } from './listP';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  constructor(private messageService: MessageService) { }
  /* getHeroes(): productosObj[] {
    return productosList;
  } */
  getList(): Observable<productosObj[]> {
    const productosList2 = of(productosList);
    this.messageService.add('HeroService: fetched heroes');
    return productosList2;
  }
  getDessert(id: number): Observable<productosObj> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const dessert = productosList.find(h => h.id === id)!;
    this.messageService.add(`dessertService: fetched hero id=${id}`);
    return of(dessert);
  }
}