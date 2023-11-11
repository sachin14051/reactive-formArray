import { Component, OnInit } from '@angular/core';
import { Observable, observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
   data = of(1,2,3,4,5,6,7,8,9)
  constructor() { }

  ngOnInit(): void {
   this.myobservable.subscribe((res)=>{
    return console.log(res);
    
   })
  }
  myobservable= new Observable((observer)=>{
    observer.next(this.data)
    
  })

}
