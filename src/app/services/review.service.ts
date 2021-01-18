import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Review } from '../models/Review';

@Injectable({
  providedIn: 'root'
})


export class ReviewService {
    constructor(private firestore: AngularFirestore) {

    }

    getAllReview(performerId: string, sortBy = 'createdAt'): Observable<any> {
        return this.firestore.collection('reviews', ref => {
            return ref.where('performerId', '==', performerId).orderBy(sortBy, 'desc')
        }).snapshotChanges()
    }

    createReview(review: Review): Promise<any> {
        const id = this.firestore.createId();
        return this.firestore.collection('reviews').add({...review, id})
      }
}