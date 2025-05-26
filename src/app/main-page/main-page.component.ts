import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  username: string;
  img: string;
  likes: number;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  posts: Post[] = [
    {
      username: 'user1',
      img: 'banana.jpg', 
      likes: 0 
    },
    {
      username: 'user2',
      img: 'currant.jpg',
      likes: 0
    },
    {
      username: 'user3',
      img: 'heart-black.png',
      likes: 0
    },
    {
      username: 'user4',
      img: 'heart-red.png',
      likes: 0
    },
    {
      username: 'user5',
      img: 'orange.jpg',
      likes: 0
    }
  ]

}
