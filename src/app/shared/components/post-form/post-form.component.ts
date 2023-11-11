import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
   
   postForm !: FormGroup
  constructor(private _http:FirebaseService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title : new FormControl(null, [Validators.required,Validators.minLength(4), Validators.maxLength(8)]),
      description : new FormControl(null, [Validators.required,Validators.minLength(4), Validators.maxLength(8)]),
      
    })
  }

  onCreate(){
    this._http.addPost(this.postForm.value)
     
      this.postForm.reset()
      
  }

}
