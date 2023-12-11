import { Injectable } from '@angular/core';
import { Comment } from "../models/comment.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  // private commentsArray: Comment[] = [
  //   new Comment(1, 1, "blabla", "bla@bla.bla", "BLA!"),
  //   new Comment(2, 4, "Wow! That's amazing.", "john@doe.com", "John")
  // ];

  private httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) }

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get("https://jsonplaceholder.typicode.com/comments", this.httpOptions).pipe(map(res => <Comment[]>res));
  }
}
