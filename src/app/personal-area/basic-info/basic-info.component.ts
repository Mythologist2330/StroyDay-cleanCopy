import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent implements OnInit {

  public infoForm: FormGroup;
  constructor(public fb: FormBuilder) {}


  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.infoForm = this.fb.group({

      departureAreas: this.fb.array([]),

      metro: this.fb.array([]),

      contactFace: this.fb.array([]),

      location: this.fb.group({
        locality: this.fb.control(''),
        house: this.fb.control(''),
        typographicLiterature: this.fb.control(''),
        street: this.fb.control(''),
        housing: this.fb.control(''),
        apartment: this.fb.control('')
      }),

      performerType: this.fb.array([])

    })
  }



  submit() {
    console.log(this.infoForm)
  }

  array(title: string): FormArray {
    return this.infoForm.get(title)['controls']
  }

  deleteElement(array, i: number) {
    array.splice(i, 1)
  }

  addDepartureArea() {
    this.array('departureAreas').push(this.fb.group({
      locality: [''],
      district: ['']
    }));
  }

  addMetro() {
    this.array('metro').push(this.fb.group({
      subwayStation: ['']
    }))
  }

  addContactFace() {
    this.array('contactFace').push(this.fb.group({
      lastName: [''],
      firstName: [''],
      tel: [''],
      email: ['']
    }))
  }

  addPerformerType() {
    this.array('performerType').push(this.fb.group({
      performerType: [''],
      requisites: ['']
    }))
  }

}