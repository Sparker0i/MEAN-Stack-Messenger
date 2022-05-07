import { EventEmitter, Injectable } from '@angular/core';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostListService {
  posts: Post[] = []
  postsUpdated = new EventEmitter<Post[]>()

  constructor() { }

  getPosts() {
    return this.posts.slice()
  }

  onAddPost(title: string, content: string) {
    this.posts.push(new Post(title = title, content = content))
    this.postsUpdated.emit(this.posts)
  }
}
