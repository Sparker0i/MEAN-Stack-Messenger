import { Component, OnInit } from '@angular/core';
import { PostListService } from '../post-list/post-list.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = ""
  enteredContent = ""

  constructor(private postListService: PostListService) { }

  ngOnInit(): void {

  }

  onAddPost() {
    this.postListService.onAddPost(this.enteredTitle, this.enteredContent)
  }

}
