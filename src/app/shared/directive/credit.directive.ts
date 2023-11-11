import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCredit]'
})
export class CreditDirective implements OnInit {
  
  constructor(private eleRef : ElementRef, 
               private renderer : Renderer2) { }
  
   ngOnInit(): void {
  
   }
   @HostListener('input' , ['$event'])
   onadd(eve:any){
    let val = (eve.target as HTMLInputElement).value
    if(val.length > 16){
       val =val.substring(0,16)
       console.log(val);  
        (eve.target as HTMLInputElement).value=val
      }
      
  }
}
