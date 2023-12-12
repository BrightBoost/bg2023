import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // specify a root url
  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts"

  // specify http options
  private httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) }
  // inject httpclient
  constructor(private http: HttpClient) { }

  // create a method that calls the api
  getPosts(): Observable<Post[]> {
    return this.http.get(this.baseUrl).pipe(map(res => <Post[]>res));

  }
}
