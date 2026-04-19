import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../services/post';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MATERIAL_MODULE } from '../../const/material';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, MATERIAL_MODULE, RouterModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.scss',
})
export class PostForm implements OnInit {
  postForm!: FormGroup;
  Userid: Array<string>=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  postId!: string
  IsinEditmode: boolean=false;

   _postService=inject(Post);
   

   constructor(private router: Router, private _routes:ActivatedRoute){}

  createForm(){
    this.postForm=new FormGroup({
       title: new FormControl(null, [Validators.required]),
       content: new FormControl(null, [Validators.required]),
       Userid: new FormControl(null, [Validators.required])
    })
  }


ngOnInit(): void {
   this.createForm()
   
  this.EditPost()
}

Addpost(){
  if(this.postForm.valid){
    let getObj=this.postForm.value;
     this._postService.createPost(getObj).subscribe({
      next: data=>{
        this._postService.Snackbar('new Post Added Successfully', 'Close', {})
        this.router.navigate(['posts'])
      },
      error: err=>{
         this._postService.Snackbar('something went wrong', 'Close', {})
      }
     }) 
  }
}


EditPost(){
  this.postId=this._routes.snapshot.params['id'];

  if(this.postId){
    this._postService.getsiglepost(this.postId).subscribe({
    next: data=>{
      this.postForm.patchValue(data);
      this.IsinEditmode=true
    }
  })
  }
  
}

UpdatePost(){
  if(this.postForm.valid){
    let updatepost={...this.postForm.value, id:this.postId};
    this._postService.updatepost(updatepost).subscribe({
      next: data=>{
        this._postService.Snackbar('post updated successfully', 'Close', {})
        this.router.navigate(['posts'])
        this.IsinEditmode=false
        
      },
      error: err=>{
         this._postService.Snackbar('something went wrong', 'Close', {})
        
      }
    })
  }
}

}
