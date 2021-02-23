import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent implements OnInit {

  public infoForm: FormGroup;

  departureAreas = []
  metro = []
  contactFace = []
  performerType = []




  constructor(public fb: FormBuilder) {}


  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.infoForm = this.fb.group({
      departureAreas: this.fb.group({
        locality: this.fb.control(''),
        district: this.fb.control('')
      }),

      metro: this.fb.group({
        subwayStation: this.fb.control('')
      }),

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
    console.log(this.infoForm)
  };

  get array() {
    return this.infoForm.get('array') as FormArray;
  }

  addElement() {
    this.array.push(this.fb.control(''));
  }




  addDepartureArea() {
    this.departureAreas.push({locality: '', district: ''})
  }

  addMetro() {
    this.metro.push({subwayStation: ''})
  }

  addContactFace() {
    this.contactFace.push({lastName: '', firstName: '', tel: '', email: ''})
  }

  addPerformerType() {
    this.performerType.push({performerType: '', requisites: ''})
  }

}