import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { IMetroStation } from '../interfaces/IMetro';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

    constructor(private afs: AngularFirestore) {
    }

    getMetro(city: string): Observable<IMetroStation> {
        return this.afs.collection<IMetroStation>('metro')
            .doc('AFMgnV8d75SLkyPTGTjP')
            .valueChanges()
            .pipe(first())
    }

    createOrder(metro: IMetroStation): Promise<any> {
        const id = this.afs.createId();
        return this.afs.collection('orders').add({...metro, id})
      }
}