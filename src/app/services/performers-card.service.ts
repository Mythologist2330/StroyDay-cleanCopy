import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerformersCard } from '../interfaces/IPerformersCard';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PerformersCardService {

  private readonly url ='https://us-central1-stroyday-93226.cloudfunctions.net/getCards/cards';

  constructor(
    private firestore: AngularFirestore,
    private http: HttpClient
    ) { }

  getAllPerformersCard(params): Observable<any>  {
    return this.http.get(this.url, {params});
  }

  getPerformersWithQuery(): CollectionReference<any> {
      return this.firestore.collection('performersCard').ref
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
