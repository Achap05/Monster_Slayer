import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor() { };
  playerHealth : number = 100;


  attack(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  attackDamage (min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  
  
  specialAttack(): number {
    return Math.floor(Math.random() * 20) + 10;
  }

  heal(): void {
    const healAmount = Math.floor(Math.random() * 10) + 1;
    this.playerHealth = Math.min(this.playerHealth + healAmount);
  }

  takeDamage(damage: number): void {
    this.playerHealth = Math.max(0, this.playerHealth - damage);
  }
}
