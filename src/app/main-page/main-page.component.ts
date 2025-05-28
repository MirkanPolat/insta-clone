import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';

export interface Post {
  username: string;
  img: string;
  likes: number;
  isliked: boolean;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink, SinglePostComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  posts: Post[] = [
    {
      username: 'user1',
      img: 'banana.jpg', 
      likes: 4,
      isliked: true
    },
    {
      username: 'user2',
      img: 'currant.jpg',
      likes: 62,
      isliked: true
    },
    {
      username: 'user3',
      img: 'orange.jpg',
      likes: 8,
      isliked: true 
    }
  ]

}