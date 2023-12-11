import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment.model';
import { CommentService } from '../providers/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(data => {
      this.comments = data 
    });
  }
}
