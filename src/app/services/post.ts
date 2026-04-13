import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable, tap } from 'rxjs';
import { Ipost } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class Post {
  
  private readonly Base_Url=environment.Base_Url;
  private readonly Blogs_Url=`${this.Base_Url}/Blogs.json`;

  private _http=inject(HttpClient);
  postsignala=signal<Ipost[]>([]);
  

  getposts():Observable<Ipost[]>{
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
      }))

      
    
    
  }
}
