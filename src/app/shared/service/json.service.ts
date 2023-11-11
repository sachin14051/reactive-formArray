import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService implements OnInit{
  baseUrl :string = `https://jsonplaceholder.typicode.com/posts`
  constructor(private _http : HttpClient) { }
  ngOnInit(): void {
  }

  getAllposts():Observable<any>{
  return  this._http.get<any>(this.baseUrl)
  }
}
