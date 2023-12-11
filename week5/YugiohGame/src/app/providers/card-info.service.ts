import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { OnlineCard } from '../models/online-card.model';

@Injectable({
  providedIn: 'root'
})
export class CardInfoService {

  private url: string = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Get all the cards from the api
  getAllCards(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }
}
