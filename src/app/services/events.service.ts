import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../models/event.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private db = getFirestore(initializeApp(environment.firebase));

  getEvents(): Observable<Event[]> {
    const eventsCollection = collection(this.db, 'events');
    
    return new Observable<any[]>(subscriber => {
      const unsubscribe = onSnapshot(eventsCollection, 
        (snapshot) => {
          const events = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          subscriber.next(events);
        },
        (error) => {
          subscriber.error(error);
        }
      );
      return () => unsubscribe();
    }).pipe(
      map((events: any[]) => {
        return events.map(event => {
          const eventDate = event.date?.toDate ? event.date.toDate() : new Date(event.date);
          const month = eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
          const day = eventDate.getDate().toString();
          
          return {
            ...event,
            date: eventDate,
            month,
            day
          } as Event;
        });
      })
    );
  }
}
