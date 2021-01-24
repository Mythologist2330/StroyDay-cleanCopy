import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Order, Segment, Status } from '../models/Order';

@Injectable({
  providedIn: 'root'
})


export class OrderService {

    constructor(private afs: AngularFirestore) {
    }

    getAllOrders(performerId: string, filter?: string): Observable<Order[]> {
        return this.afs.collection<Order>('orders', ref => {
            return ref.where('performerId', '==', performerId)
        }).valueChanges()
    }

    createOrder(order: Order): Promise<any> {
        const id = this.afs.createId();
        return this.afs.collection('orders').add({...order, id})
      }

    async updateOrderStatus(id: string, status: string) {
      let docId: string;
      this.afs.collection('reviews', ref => ref.where('id', '==', id))
        .get().pipe(
        //   tap(v => docId = v.docs[0].id),
        //   tap(() => this.afs.collection<Review>('reviews').doc(docId).update({replies}))
        ).subscribe(console.log)
    }
}