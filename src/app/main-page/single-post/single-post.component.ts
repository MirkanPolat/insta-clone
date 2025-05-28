import { Component, Input } from '@angular/core';
import { Post } from '../../main-page/main-page.component'; 


@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

  @Input() singlepost!: Post;

  toggleLike(singlepost: Post) {
    if (singlepost.isliked) {
      singlepost.isliked = !singlepost.isliked
      singlepost.likes += 1
    } else {
      singlepost.isliked = !singlepost.isliked
      singlepost.likes -= 1
    }
  }

}
