import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vendor } from '../models/vendor.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  private db = getFirestore(initializeApp(environment.firebase));

  getVendors(): Observable<Vendor[]> {
    const vendorsCollection = collection(this.db, 'vendors');
    
    return new Observable<any[]>(subscriber => {
      const unsubscribe = onSnapshot(vendorsCollection, 
        (snapshot) => {
          const vendors = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          subscriber.next(vendors);
        },
        (error) => {
          subscriber.error(error);
        }
      );
      return () => unsubscribe();
    }).pipe(
      map((vendors: any[]) => vendors as Vendor[])
    );
  }
}
