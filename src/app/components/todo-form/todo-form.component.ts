import { TodosService } from './../../shared/todos.service';
import { Component } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title:string = ''


  constructor(public todosService: TodosService){ // Инжектируем сервис todosService (концепция Депенденси инжекшин) для того чтобы он был доступен в компоненте
  }

  // Метод который будет добавлять новую todo
  addTodo(){
    const todo: ITodo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }

    this.todosService.addTodo(todo)// обращаемся через сервис (todosService) к методу addTodo для добавления todo
    this.title = '' //чистим строку после добавления todo
  }
}
