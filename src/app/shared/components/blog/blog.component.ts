import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 signIn !: FormGroup
 @Input() custompro !: string  ;

 @Output() msg : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.msg.emit("child to parent")

    
    this.signIn = new FormGroup({
      blog : new FormArray([
        new FormGroup({
          title: new FormControl(null, [Validators.required]),
          body: new FormControl(null, [Validators.required])
        })
      ])

    })
  }

  get blogArray() : FormArray{
    return this.signIn.get('blog') as FormArray;
  }

  onSubmit(){}

  addBlog(){
    this.blogArray.push(new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required])
    }))
  }
}
