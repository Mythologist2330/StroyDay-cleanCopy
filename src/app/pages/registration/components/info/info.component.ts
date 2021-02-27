import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {

    form: FormGroup;
    contactData: FormGroup;
    kindOfProfile: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            avatar: new FormControl(''),
            background: new FormControl(''),
            nameOfPage: new FormControl('', Validators.required),
            aboutMyself: new FormControl('', Validators.required),
            contactData: new FormGroup({
                contactDataEmail: new FormControl('', [Validators.required, Validators.email]),
                contactDataTel: new FormControl('', Validators.required),
                contactFaceName: new FormControl('', Validators.required),
                contactFaceEmail: new FormControl('', [Validators.required, Validators.email]),
                contactFaceTel: new FormControl('', Validators.required)
            }),

            kindOfProfile: new FormGroup({
                face: new FormArray([
                    new FormControl('Физическое лицо'),
                    new FormControl('Юридическое лицо')
                ], Validators.required),

                activityEconomy: new FormArray([
                    new FormControl('Строительство')
                ], Validators.required),

                activityStandard: new FormArray([
                    new FormControl('Водопровод')
                ], Validators.required),

                activityPremium: new FormArray([
                    new FormControl('Электрика')
                ], Validators.required)
            }),

            region: new FormArray([
                new FormControl('Москва'),
                new FormControl('Санкт-Петербург')
            ], Validators.required),

            city: new FormArray([
                new FormControl('Москва'),
                new FormControl('Санкт-Петербург')
            ], Validators.required),

            street: new FormControl('', Validators.required),
            district: new FormControl('', Validators.required),
            metro: new FormControl('', Validators.required)
        })
    }

    submit() {
        if (this.form.valid) {
            console.log(this.form)
        }
    }

}