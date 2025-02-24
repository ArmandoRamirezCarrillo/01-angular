import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public faTrash = faTrash;

  @Input()
  public characterList: Character[] = [{
    name: 'trunks',
    power: 10
  }];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    if(!id) return;
    this.onDeleteId.emit(id.toString());
  }
}
