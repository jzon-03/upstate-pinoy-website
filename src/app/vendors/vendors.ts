import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { VendorsService } from '../services/vendors.service';
import { Vendor } from '../models/vendor.model';

@Component({
  selector: 'app-vendors',
  standalone: false,
  templateUrl: './vendors.html',
  styleUrl: './vendors.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorsComponent implements OnInit {
  private vendorsService = inject(VendorsService);
  vendors = signal<Vendor[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.vendorsService.getVendors().subscribe({
      next: (vendors) => {
        this.vendors.set(vendors.sort((a, b) => a.name.localeCompare(b.name)));
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching vendors:', err);
        this.error.set('Failed to load vendors. Please try again later.');
        this.loading.set(false);
      }
    });
  }
}
