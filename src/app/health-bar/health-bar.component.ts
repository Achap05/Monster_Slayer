import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { MonsterService } from '../monster.service';
import { PlayerService } from '../player.service';



@Component({
  selector: 'app-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './health-bar.component.html',
  styleUrl: './health-bar.component.css'
})
export class HealthBarComponent {
  monster = inject(MonsterService);
  player = inject(PlayerService);
}
