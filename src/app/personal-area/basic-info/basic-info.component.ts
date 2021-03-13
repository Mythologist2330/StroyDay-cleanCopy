import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IMetroStation } from 'src/app/interfaces/IMetro';
import { Performer } from 'src/app/models/Performer';
import { LocationService } from 'src/app/services/location.service';
import { PerformersCardService } from 'src/app/services/performers-card.service';

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
  
  constructor(public fb: FormBuilder,
              private cardSrv: PerformersCardService,
              private locationSrv: LocationService) {}


  ngOnInit(): void {
    this.metro$ = this.locationSrv.getMetro('Санкт-Петербург')
      .pipe(
        map((metro: IMetroStation[]) => metro.find(val => val.city === 'Санкт-Петербург'))
        );

    this.cardSub$ = this.cardSrv.getPerformersCardById('7wx8WNLYh66KXGGSIl9N')
      .pipe(
        tap(data => this.initForm(data)),
        tap(data => this.card = data)
        )
      .subscribe(console.log);
  }

  initForm(card: Performer) {
    this.infoForm = this.fb.group({
      departureAreas: this.fb.array([]),
      metro: this.fb.array([]),
      contactPerson: this.fb.array([]),
      location: this.fb.group({
        locality: card.location.locality || '',
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

    this.cardSrv.updatePerformersCard(this.card).then(console.log)
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

}