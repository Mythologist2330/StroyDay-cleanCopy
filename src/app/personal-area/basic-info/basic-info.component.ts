import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent implements OnInit {

  public infoForm: FormGroup;
  metro = [];
  contactFace = [];
  performerType = [];
  constructor(public fb: FormBuilder) {}


  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.infoForm = this.fb.group({
      departureAreas: this.fb.array([]),

      metro: this.fb.array([]),

      contactFace: this.fb.group({
        lastName: this.fb.control(''),
        firstName: this.fb.control(''),
        tel: this.fb.control(''),
        email: this.fb.control('')
      }),

      location: this.fb.group({
        locality: this.fb.control(''),
        house: this.fb.control(''),
        typographicLiterature: this.fb.control(''),
        street: this.fb.control(''),
        housing: this.fb.control(''),
        apartment: this.fb.control('')
      }),

      performerType: this.fb.group({
        performerType: this.fb.control(''),
        requisites: this.fb.control('')
      })
    })
  }



  submit() {
    // console.log(this.infoForm, 'ddsas')
  }

  get array(): FormArray {
    return this.infoForm.get('departureAreas')['controls']
  }

  get arrayMetro(): FormArray {
    return this.infoForm.get('metro')['controls']
  }

  deleteElement(array, i: number) {
    console.log(array[i]) // не забыть удалить
    array.splice(i, 1)
  }


  addDepartureArea() {
    this.array.push(this.fb.group({
      locality: [''],
      district: ['']
    }));
  }

  addMetro() {
    this.arrayMetro.push(this.fb.group({
      subwayStation: ['']
    }))
  }










  addContactFace() {
    this.contactFace.push({lastName: '', firstName: '', tel: '', email: ''})
  }

  addPerformerType() {
    this.performerType.push({performerType: '', requisites: ''})
  }

}