import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})


export class CategoryService {
    private subjectCategory$ = new BehaviorSubject([]);
    public get categories$(): Observable<Category[]> {
        return this.subjectCategory$.asObservable();
      }

    constructor(private firestore: AngularFirestore) {
      this.renderCategoriesSub();
    }

    getAllCategories() {
      return this.firestore.collection<Category>('categories', ref => ref.orderBy('title'))
        .snapshotChanges()
        .pipe(            
            first()
          )
    }

    getCategoryById(id: string): Observable<Category> {
        return this.firestore.doc<Partial<Category>>('categories/' + id).get().pipe(
          first(),
          map(cat => cat.data() ? new Category({...cat.data(), id}) : null)
        )
    }    

    getNodeCategory(parentId = 'Отсутствует'): Observable<Category[]> {
      return this.categories$.pipe(
        map(categories => categories.filter(cat => cat.parent === parentId))
      )
    }

    async getChainCategoryById(id: string, chain: Category[] = []): Promise<Category[]> {
      let category = await this.getCategoryById(id).toPromise();
      chain.unshift(category);
      if (category.parent !== 'Отсутствует') {
        return await this.getChainCategoryById(category.parent, chain);
      }
      return chain;
    }

    async createCategory(category: Category): Promise<void> {
      await this.firestore.collection('categories').add({...category});
      this.renderCategoriesSub();
    }

    async deleteCategory(id: string): Promise<void> {
      await this.firestore.doc('categories/' + id).delete();
      this.renderCategoriesSub();
    }

    async updateCategory(id: string, category: Category): Promise<void> {
      await this.firestore.doc('categories/' + id).update({...category});
      this.renderCategoriesSub();
    }   

    renderCategoriesSub(): Subscription {
        return this.getAllCategories().subscribe(
            snaps => {                
                const data = snaps.map(snap => {
                    return new Category({ 
                        id: snap.payload.doc.id,
                        ...snap.payload.doc.data()
                    });
                });
                this.subjectCategory$.next(data);
            }
        );
    }
}