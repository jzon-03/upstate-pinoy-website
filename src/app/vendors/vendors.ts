import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vendors',
  standalone: false,
  templateUrl: './vendors.html',
  styleUrl: './vendors.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorsComponent {}
