import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IPerformersCard } from '../interfaces/IPerformersCard';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

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
      this.renderCardsSub()
    }

  getAllPerformersCard(params?): Observable<any>  {
    return this.http.get(this.url, {params})
  }

  renderCardsSub(params = {}): Subscription {
    return this.getAllPerformersCard(params).subscribe(
      data => {
        this.subjectCards$.next(data);
      }
    );
  }

  createPerformersCard(card: IPerformersCard): Promise<any> {
    const id = this.firestore.createId();
    return this.firestore.collection('performersCard').add({...card, id});
  }

  deletePerformersCard(cardId: string): Promise<void> {
    return this.firestore.doc('performersCard/' + cardId).delete();
  }

  updatePerformersCard(card: IPerformersCard): Promise<void> {
    return this.firestore.doc('performersCard/' + card.id).update(card);
  }





}
