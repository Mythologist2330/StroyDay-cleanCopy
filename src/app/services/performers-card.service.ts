import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerformersCard } from '../interfaces/IPerformersCard';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class PerformersCardService {

  constructor(private firestore: AngularFirestore) { }

  getAllPerformersCard(): Observable<any>  {
    return this.firestore.collection('performersCard').valueChanges();
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
