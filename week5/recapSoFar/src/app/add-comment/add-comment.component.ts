import { Component } from '@angular/core';
import { Comment } from "../models/comment.model";
import { CommentService } from '../providers/comment.service';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  comment: Comment = new Comment(0, 0, "", "", "");

  constructor(private commentService: CommentService) {

  }
  submitComment() {
    this.commentService.postComment(this.comment).subscribe(
      data => console.log(data)
    );
  }
}
