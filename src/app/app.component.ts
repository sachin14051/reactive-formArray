import { Component, OnInit } from '@angular/core';
import { JsonService } from './shared/service/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts:any
  constructor(private _json:JsonService){}
  ngOnInit(): void {
   this._json.getAllposts().subscribe(res=> this.posts =res)
       
  }
  
}
