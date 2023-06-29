import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
  todosPage = "Todos Page"
  public todos:ITodo[]=[
    {
      id: 1,
      title: "Купить хлеб",
      completed: true,
      date: new Date(),
  },
  {
      id: 2,
      title: "Купить масло",
      completed: false,
      date: new Date(),
  },
  {
      id: 3,
      title: "Купить рыбу",
      completed: false,
      date: new Date(),
  },
  ]

  onToggle(id: number){
    const idx = this.todos.findIndex(t=>t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
    
  }
  

  constructor(){

  }

ngOnInit(): void {
  
}
}
