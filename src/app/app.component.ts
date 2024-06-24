import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HealthBarComponent } from './health-bar/health-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GameComponent,HealthBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Monster_Slayer';
}
