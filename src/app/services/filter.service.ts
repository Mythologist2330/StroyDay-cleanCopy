import { Injectable } from '@angular/core';
import { IFilter } from '../interfaces/IFilter';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  
  constructor(private afs: AngularFirestore) {
  }

  createFilter(filter) {
    const id = this.afs.createId()
    this.afs.collection('filters').add({...filter, id}).then(console.log)
  }

  getAllFilters(): Observable<IFilter[]> {
    return this.afs.collection<IFilter>('filters').valueChanges()
  }

}
