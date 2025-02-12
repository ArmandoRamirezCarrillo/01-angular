import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  // public counter: number  = 10;

  // increaseBy(value: boolean = true):void{
  //   (value) ?this.counter +=1 : this.counter -=1 ;
  // }

  // resetValue(): void{
  //   this.counter = 10;
  // }
}
