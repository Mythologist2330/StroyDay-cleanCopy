import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { IMetroStation } from '../interfaces/IMetro';

@Injectable({
  providedIn: 'root'
})


export class LocationService {
  
    constructor(private afs: AngularFirestore) {}

    getMetro(city: string): Observable<IMetroStation[]> {
        return this.afs.collection<IMetroStation>('metro', ref => ref.where('city', '==', city))
            .valueChanges()
            .pipe(first())
    }

    createMetro(metro: IMetroStation): Promise<any> {
        const id = this.afs.createId();
        return this.afs.collection('metro').add({...metro, id})
      }
      
    createDistrict(district): Promise<any> {
      const id = this.afs.createId();
      return this.afs.collection('district').add({...district, id})
    }

    getDistricts(city: string): Observable<any[]> {
      return this.afs.collection('district', ref => ref.where('city', '==', city))
          .valueChanges()
          .pipe(first())
  }
}