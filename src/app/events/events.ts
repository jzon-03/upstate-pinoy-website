import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.html',
  styleUrls: ['./events.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent implements OnInit {
  private eventsService = inject(EventsService);
  events = signal<Event[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.eventsService.getEvents().subscribe({
      next: (events) => {
        var eventsData = events.filter((event) => {
          const now = new Date();
          const eventExpirationDate = event.expirationDate ? new Date(event.expirationDate) : null;
          return eventExpirationDate ? eventExpirationDate >= now : true;
        });
        this.events.set(eventsData.sort((a, b) => a.date.getTime() - b.date.getTime()));
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching events:', err);
        this.error.set('Failed to load events. Please try again later.');
        this.loading.set(false);
      }
    });
  }
}
