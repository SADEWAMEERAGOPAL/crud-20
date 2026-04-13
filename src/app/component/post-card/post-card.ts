import { Component, Input, input } from '@angular/core';
import { Ipost } from '../../model/post';
import { MATERIAL_MODULE } from '../../const/material';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [...MATERIAL_MODULE, RouterModule],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
@Input() post!:Ipost;
}
