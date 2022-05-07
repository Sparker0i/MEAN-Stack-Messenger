import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostListService } from './post-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  /* posts = [
    {title: "First Post", content: "This is the first post's content"},
    {title: "Second Post", content: "This is the second post's content"},
    {title: "Third Post", content: "This is the third post's content"}
  ] */
  posts: Post[] = []

  constructor(private postListService: PostListService) { }

  ngOnInit(): void {
    this.posts = this.postListService.getPosts()
    this.postListService.postsUpdated.subscribe(
      (posts: Post[]) => {
        this.posts = posts
      }
    )
  }

}
