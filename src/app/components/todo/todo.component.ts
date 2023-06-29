import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoTitle='Todo Component'
  @Input() todos:ITodo[] = []
  @Output() onToggle = new EventEmitter<number>()
  

  constructor(){}

  ngOnInit(): void {
  }

  onChange(id: number){
    this.onToggle.emit(id)
  }
}
