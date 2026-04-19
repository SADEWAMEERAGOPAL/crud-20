import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable, tap } from 'rxjs';
import { Ipost } from '../model/post';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Post {
  
  private readonly Base_Url=environment.Base_Url;
  private readonly Blogs_Url=`${this.Base_Url}/Blogs.json`;

  private _http=inject(HttpClient);
  private  _snackbar=inject(MatSnackBar)

  postsignala=signal<Ipost[]>([]);
  siglepostsignal=signal<Ipost | null>(null)
  Spinner=signal<boolean>(false)

LoaderShow(){
  this.Spinner.set(true)
}


LoaderHide(){
  this.Spinner.set(false)
}


  createPost(post:Ipost):Observable<Ipost>{
    return this._http.post<Ipost>(this.Blogs_Url, post)
  }
 

  getposts():Observable<Ipost[]>{
    
    this.LoaderShow()

    return this._http.get<Ipost[]>(this.Blogs_Url).pipe(
      map((obj:any)=>{
        let postsArr: Ipost[]=[];
        for(let key in obj){
          postsArr.push({...obj[key], id:key})
        }
        return postsArr;
      }), 
      tap(posts=>{
        this.postsignala.set(posts);
         this.LoaderHide()

      }))

  
      
    
    
  }

  
  getsiglepost(id:string):Observable<Ipost>{
    this.LoaderShow()

    return this._http.get<Ipost>(`${this.Base_Url}/Blogs/${id}.json`).pipe(
      tap(post=>{
        this.siglepostsignal.set(post);
        this.LoaderHide()
      })
    );
  }

  deletepost(id: string):Observable<any>{
    let deleteUrl: string=`${this.Base_Url}/Blogs/${id}.json`;
    return this._http.delete(deleteUrl)
    
  }
 
  updatepost(upost:Ipost):Observable<Ipost>{
    let updateUrl: string=`${this.Base_Url}/Blogs/${upost.id}.json`;
    return this._http.patch<Ipost>(updateUrl, upost)
  }


  Snackbar(message: string, icon='Close', {
  }){
    this._snackbar.open(message, icon, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
