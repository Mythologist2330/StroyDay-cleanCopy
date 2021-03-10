import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { Performer } from '../models/Performer';

@Injectable({
  providedIn: 'root'
})

export class PerformersCardService {

  private readonly url ='https://us-central1-stroyday-93226.cloudfunctions.net/getCards/cards';
  public subjectCards$ = new BehaviorSubject([]);
  public get cards$(): Observable<any> {
    return this.subjectCards$.asObservable();
  }

  constructor(
    private firestore: AngularFirestore,
    private http: HttpClient
    ) { 
      this.renderCardsSub();
    }

  getAllPerformersCard(params?): Observable<any>  {
    return this.http.get(this.url, {params})
      .pipe(
        // tap(console.log)
      )
  }

  renderCardsSub(params = {}): Subscription {
    return this.getAllPerformersCard(params).subscribe(
      data => {
        this.subjectCards$.next(data);
      }
    );
  }

  getPerformersCardById(id: string): Observable<Performer> {
    return this.firestore.doc<Partial<Performer>>('performers/' + id)
      .get().pipe(
        map(card => card.data() ? new Performer({...card.data(), id}) : null),
      )
  }

  createPerformersCard(card: Performer): Promise<any> {
    const id = this.firestore.createId();
    return this.firestore.collection('performers').add({...card, id});
  }

  deletePerformersCard(cardId: string): Promise<void> {
    return this.firestore.doc('performers/' + cardId).delete();
  }

  updatePerformersCard(card: Performer): Promise<void> {
    return this.firestore.doc('performers/' + card.id).update({...card});
  }

}
