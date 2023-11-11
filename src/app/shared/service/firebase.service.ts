import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnInit {
  
   postsUrl : string = `${environment.baseUrl}/posts.json`
  constructor(private _http:HttpClient) { }
  ngOnInit(): void {
  }

  getAllposts():Observable<any>{
    return this._http.get<any>(this.postsUrl)

  }

  addPost(obj:any){
    return this._http.post<any>(this.postsUrl, obj)

  }
}
