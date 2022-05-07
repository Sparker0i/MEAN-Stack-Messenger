import { Component } from '@angular/core';
import { PostListService } from './posts/post-list/post-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostListService]
})
export class AppComponent {
  title = 'MEAN-Stack-Messenger';
}
