import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy()">+1</button>
    <button (click)="resetValue()" >Reset</button>
    <button (click)="increaseBy(false)">-1</button>
  `
})
export class CounterComponent{
  public counter: number  = 10;

  increaseBy(value: boolean = true):void{
    (value) ?this.counter +=1 : this.counter -=1 ;
  }

  resetValue(): void{
    this.counter = 10;
  }
}
