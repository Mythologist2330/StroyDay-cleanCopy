import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IMetroStation } from 'src/app/interfaces/IMetro';
import { Performer } from 'src/app/models/Performer';
import { LocationService } from 'src/app/services/location.service';
import { PerformersCardService } from 'src/app/services/performers-card.service';
import { IDistrict } from 'src/app/interfaces/IDistrict';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})

export class BasicInfoComponent implements OnInit {

  public infoForm: FormGroup;
  public card: Performer;
  public cardSub$: Subscription;
  public metro$: Observable<IMetroStation>
  public districts$: Observable<IDistrict>
  
  constructor(private router: Router,
              public fb: FormBuilder,
              private cardSrv: PerformersCardService,
              private locationSrv: LocationService) {}


  ngOnInit(): void {
    this.metro$ = this.locationSrv.getMetro('Санкт-Петербург') // Hardcode
      .pipe(
        map((metro: IMetroStation[]) => metro.find(val => val.city === 'Санкт-Петербург')) // Hardcode
        );

    this.districts$ = this.locationSrv.getDistricts('Санкт-Петербург')
      .pipe(
        map((district: IDistrict[]) => district.find(val => val.city === 'Санкт-Петербург')) // Hardcode
        );
    

    this.cardSub$ = this.cardSrv.getPerformersCardById('7wx8WNLYh66KXGGSIl9N') // Hardcode
      .pipe(
        tap(data => this.initForm(data)),
        tap(data => this.card = data)
        )
      .subscribe(console.log);
  }

  initForm(card: Performer) {
    this.infoForm = this.fb.group({
      departureAreas: this.fb.array([], Validators.required),
      metro: this.fb.array([], Validators.required),
      contactPerson: this.fb.array([], Validators.required),
      location: this.fb.group({
        city: [card.location.city || '', Validators.required],
        house: card.location.house || '',
        typographicLiterature: card.location.typographicLiterature || '',
        street: card.location.street || '',
        housing: card.location.housing || '',
        apartment: card.location.apartment || ''
      }),
      type: this.fb.array([])
    });

    if (card.location.departureAreas) {
      card.location.departureAreas.map(area => {
        this.addDepartureArea({
          locality: area.locality,
          district: area.district
        })
      })
    }

    if (card.location.metro) {
      card.location.metro.map(station => {
        this.addMetro(station);
      })      
    }    

    if (card.contactPerson) {
      card.contactPerson.map(person => {
        this.addContactPerson({
          lastName: person.lastName,
          firstName: person.firstName,
          tel: person.tel,
          email: person.email,
          active: person.active 
        })      
      })      
    }

    if (card.type) {
      card.type.map(type => {
        this.addPerformerType({
          title: type.title,
          requisites: type.requisites,
          active: type.active
        })
      })
    }
  }
  
  submitInfo() {
    this.card.location.departureAreas = this.array('departureAreas').map(data => data.value);
    this.card.location.metro = this.array('metro').map(metro => metro.value);
    this.card.contactPerson = this.array('contactPerson').map((person: FormGroup) => person.value);
    this.card.location = {...this.card.location, ...this.infoForm.get('location').value};
    this.card.type = this.array('type').map(type => type.value);
    
    this.cardSrv.updatePerformersCard(this.card).then(() => {
      this.router.navigate(['/personalArea/' + this.card.id + '/profile'])
    })
  }

  array(title: string): Array<any> {
    return this.infoForm.get(title)['controls']
  }

  deleteElement(array, i: number) {
    array.splice(i, 1)
  }

  addDepartureArea(area = { locality: '', district: '' }) {
    this.infoForm.get('departureAreas')['controls'].push(this.fb.group(area));
  }

  addMetro(metro = '') {
    this.array('metro').push(new FormControl(metro))
  }

  addContactPerson(person = {lastName: '', firstName: '', tel: '', email: '', active: false }) {
    this.array('contactPerson').push(this.fb.group(person))
  }

  addPerformerType(type = { title: '', requisites: '', active: false }) {
    this.array('type').push(this.fb.group(type))
  }

  switchActive(title: string, index: number) {
    this.array(title).forEach((type: FormGroup, i) => {
      if (i !== index) {
        type.controls.active.setValue(false);
      }      
    })
  }

  changePhone(value) {
    console.log(value)
  }

}