import { Injectable } from '@angular/core';
import { productosObj } from './productosObj';
import { productosList } from './listP';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DessertsService {
  private dessertUrl = 'api/dessert';  // URL to web api

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


  constructor( private http: HttpClient,private messageService: MessageService) { }
  /* getHeroes(): productosObj[] {
    return productosList;
  } */
  /* getList(): Observable<productosObj[]> {
    const productosList2 = of(productosList);
    return productosList2;
  } */
  /** GET heroes from the server */
  getList(): Observable<productosObj[]> {
  return this.http.get<productosObj[]>(this.dessertUrl).pipe(
    tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<productosObj[]>('getList', []))
  );
  }

  getDessert(id: number): Observable<productosObj> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    /* const dessert = productosList.find(h => h.id === id)!;
    this.messageService.add(`dessertService: fetched hero id=${id}`);
    return of(dessert); */
    const url=`${this.dessertUrl}/${id}`;
    return this.http.get<productosObj>(url).pipe(
      tap(_ => this.log(`fetched dessert id=${id}`)),
      catchError(this.handleError<productosObj>(`getDessert id=${id}`))
    );
  }
  private log(message: string) {
    this.messageService.add('DessertService: fetched dessert {$message}');
  }
  /** PUT: update the hero on the server */
  updateDessert(p: productosObj): Observable<any> {
    return this.http.put(this.dessertUrl, p, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${p.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addDessert(dessert: productosObj): Observable<productosObj> {
    return this.http.post<productosObj>(this.dessertUrl, dessert, this.httpOptions).pipe(
      tap((newDessert: productosObj) => this.log(`added productosObj w/ id=${newDessert.id}`)),
      catchError(this.handleError<productosObj>('addDessert'))
    );
  }
}