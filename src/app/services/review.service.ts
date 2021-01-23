import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IComment } from '../interfaces/IComment';
import { Review } from '../models/Review';

@Injectable({
  providedIn: 'root'
})


export class ReviewService {
    constructor(private afs: AngularFirestore) {

    }

    getAllReview(performerId: string, sortBy = 'createdAt'): Observable<Review[]> {
        return this.afs.collection<Review>('reviews', ref => {
            return ref.where('performerId', '==', performerId)
        }).valueChanges()
    }

    createReview(review: Review): Promise<any> {
        const id = this.afs.createId();
        return this.afs.collection('reviews').add({...review, id})
      }

    async updateReview(id: string, replies: IComment[]) {
      let docId: string;
      this.afs.collection('reviews', ref => ref.where('id', '==', id))
        .get().pipe(
          tap(v => docId = v.docs[0].id),
          tap(() => this.afs.collection<Review>('reviews').doc(docId).update({replies}))
        ).subscribe(console.log)
    }
}