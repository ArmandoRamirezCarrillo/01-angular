import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `This is a hero named ${this.name} who is ${this.age} years old.`;
  }

  changeHero():void{
    this.name = 'captain america';
  }

  changeAge():void{
    this.age = 50;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
