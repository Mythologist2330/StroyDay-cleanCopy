import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Service } from '../models/Service';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {
    constructor(private firestore: AngularFirestore) {
        
    }

    getAllServices(): Observable<Service[]> {
        return this.firestore.collection<Service>('services').valueChanges().pipe(first())
    }

    createService(service: Service): Promise<any> {
        const id = this.firestore.createId();
        return this.firestore.collection('services').add({...service, id})
      }
}