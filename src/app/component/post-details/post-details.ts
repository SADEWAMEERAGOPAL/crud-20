import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../../services/post';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Ipost } from '../../model/post';

@Component({
  selector: 'app-post-details',
  imports: [JsonPipe],
  templateUrl: './post-details.html',
  styleUrl: './post-details.scss',
})
export class PostDetails implements OnInit {
  postobj!:Ipost;
  _postObject=inject(Post);
 _postId!: string;

 constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    
  }

}
