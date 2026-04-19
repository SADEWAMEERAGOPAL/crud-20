import { Component, inject, OnInit, signal } from '@angular/core';
import { Post } from '../../services/post';
import { PostCard } from '../post-card/post-card';
import { MATERIAL_MODULE } from '../../const/material';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-post-dashboard',
  imports: [PostCard, ...MATERIAL_MODULE, RouterModule],
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
})
export class PostDashboard  implements OnInit{
title=signal('post-dashboard works')

 _postservice=inject(Post);

ngOnInit(): void {
  this._postservice.getposts().subscribe((posts) => {
    console.log(posts)
    // Handle the retrieved posts
  });
}

}
