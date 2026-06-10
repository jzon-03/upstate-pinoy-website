import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.html',
  styleUrl: './vendors.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VendorsComponent {}
