import { Component, inject, signal } from '@angular/core';
import { RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { MATERIAL_MODULE } from './const/material';
import { Post } from './services/post';

@Component({
  selector: 'app-root',
  imports: [...MATERIAL_MODULE, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crud-20');
  
  _postservice=inject(Post);



}
