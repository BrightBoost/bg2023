import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../providers/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      data => {
        this.postList = data;
        console.log(data);
      }
    );
    
  }
}
