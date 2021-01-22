import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Service } from '../models/Service';

@Injectable({
  providedIn: 'root'
})


export class ServicesService {
    constructor(private firestore: AngularFirestore) {
        
    }

    getAllServices(sortBy = 'createdAt'): Observable<any> {
        return this.firestore.collection('reviews', ref => {
            return ref.orderBy(sortBy, 'desc')
        }).snapshotChanges()
    }

    createService(service: Service): Promise<any> {
        const id = this.firestore.createId();
        return this.firestore.collection('reviews').add({...service, id})
      }
}