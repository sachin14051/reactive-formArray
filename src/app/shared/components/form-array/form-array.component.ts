import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  signIn !: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.formSkillArray()
  }

  signInForm() {
    console.log(this.signIn.value);   
   }

  formSkillArray(){
    this.signIn = new FormGroup({
      skills: new FormArray([
        new FormControl(null, [Validators.required]),
        new FormControl(null, [Validators.required]),
        new FormControl(null, [Validators.required])
      ])
    })
  }

  get skillsArray() : FormArray {
    return this.signIn.get('skills') as FormArray
  }



  onAdd() {
    if( !(this.skillsArray.length > 5)){
      this.skillsArray.push( new FormControl(null, [Validators.required]))
    }
  }

  onDelete(i:any){
    console.log(i);

    this.skillsArray.removeAt(i)
  }

}
