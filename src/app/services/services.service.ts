import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Service } from '../models/Service';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

    public services: Service[] = [];
    private subjectService$ = new BehaviorSubject([]);
    public get services$(): Observable<Service[]> {
      return this.subjectService$.asObservable();
    }

    constructor(private firestore: AngularFirestore) {
      this.renderServicesSub()
    }

    getAllServices(): Observable<DocumentChangeAction<Service>[]> {
      return this.firestore.collection<Service>('services')
        .snapshotChanges()
        .pipe(
            first()
          )
    }

    getServiceById(id: string): Observable<Service> {
      return this.firestore.doc('services/' + id).get().pipe(
        first(),
        map(srv => srv.data() ? new Service(srv.data()) : null)
      )
    } 

    getServicesByParentId(id: string): Observable<Service[]> {
      return this.services$.pipe(
        map(services => services.filter(srv => srv.parent === id))
      )
    }

    async createService(service: Service): Promise<void> {
      await this.firestore.collection('services').add({...service});
      this.renderServicesSub();
    }

    async updateService(id: string, service: Service): Promise<void> {
      await this.firestore.doc('services/' + id).update({...service});
      this.renderServicesSub();
    }

    async deleteService(id: string): Promise<void> {
      await this.firestore.doc('services/' + id).delete();
      this.renderServicesSub();
    }

    renderServicesSub(): Subscription {
      return this.getAllServices().subscribe(
          snaps => {                
              const data = snaps.map(snap => {
                  return new Service({ 
                      id: snap.payload.doc.id,
                      ...snap.payload.doc.data()
                  });
              });
              this.subjectService$.next(data);
          }
      );
  }
}