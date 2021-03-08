import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {

  public servicesForm: FormGroup;
  constructor(public fb: FormBuilder) {}


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.servicesForm = this.fb.group({
      services: this.fb.array([])
    })
  }

  submit() {}

  arrayService(title: string): FormArray {
    return this.servicesForm.get(title)['controls']
  }

  deleteElement(array, i: number) {
    array.splice(i, 1)
  }

  addService() {
    this.arrayService('services').push(this.fb.group({
      service: [''],
      low: [''],
      standard: [''],
      premium: ['']
    }));
  }

}