import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../../services/post';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Ipost } from '../../model/post';
import { MatDialog, MatDialogActions, MatDialogConfig } from '@angular/material/dialog';
import { Matconfirmatioin } from '../matconfirmatioin/matconfirmatioin';
import { MATERIAL_MODULE } from '../../const/material';

@Component({
  selector: 'app-post-details',
  imports: [RouterModule, MATERIAL_MODULE],
  templateUrl: './post-details.html',
  styleUrl: './post-details.scss',
})
export class PostDetails implements OnInit {
  postobj!:Ipost;
  _postObject=inject(Post);
 _postId!: string;

 constructor(private _route: ActivatedRoute,
  private _router: Router,
  private Matdia:MatDialog
 ){}


 _postservice=inject(Post)
  ngOnInit(): void {
     this.getsiglepost()
    
  }


  getsiglepost(){
   this._postId=this._route.snapshot.params['id'];
    this._postObject.getsiglepost(this._postId).subscribe((post)=>{
      console.log(post)
    });

  }


  delete(){
      let matcon=new MatDialogConfig() 
      this.Matdia.open(Matconfirmatioin, matcon)
      .afterClosed().subscribe(res=>{
        if(res){
            this._postservice.deletepost(this._postId).subscribe({
      next: ()=>{
          this._postservice.Snackbar('post deleted successfully', 'Close', {})
        this._router.navigate(['posts'])
      },
      error: (err)=>{
         this._postservice.Snackbar(`${err}`, 'Close', {})
        
       
      }
     }) 
        }
      })

       
     
  }

  
}
