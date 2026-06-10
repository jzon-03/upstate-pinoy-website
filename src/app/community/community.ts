import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-community',
  standalone: false,
  templateUrl: './community.html',
  styleUrl: './community.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityComponent {}
