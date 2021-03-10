import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PerformersCardService } from 'src/app/services/performers-card.service'
import { Performer } from '../models/Performer';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})

export class PersonalAreaComponent implements OnInit {

  public performer: Performer;
  public id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private cardSrv: PerformersCardService) {}
  
  ngOnInit(): void {
    this.activatedRoute.params     
      .subscribe(params => this.id = params.id)
  }


}