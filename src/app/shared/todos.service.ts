import { Injectable } from "@angular/core";
import { ITodo } from "../models/todo";
import { todos } from "../data/todos";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({providedIn: 'root'}) //декоратор для работы с сервисами (внутри он должен принимать providedIn: 'root' для того чтобы автоматически зарегистрироваться в модулях)
export class TodosService{
  public todos:ITodo[] = []
  constructor(private http:HttpClient){
  }
    
  // Создаем метод который из бекенда получает данные (todos)
  fetchTodos(): Observable<ITodo[]>{ //объект Observable (из rxjs) для того чтобы уведомлять (так как метод fetchTodos асинхронный)
   return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5') //qwery параметр ?_limit=5 - означает что из всего возможного кол-ва todos (от сервера) выведется только 5
   .pipe(tap(todos=>this.todos = todos))
  }

      onToggle(id: number){ //метод для зачеркивания и выделения (cheked) todo 
        const idx = this.todos.findIndex(t=>t.id === id)
        this.todos[idx].completed = !this.todos[idx].completed
      }

      removeTodo(id: number){ //метод удаления todo
        this.todos = this.todos.filter(t=>t.id !== id)
      }

      addTodo(todo: ITodo){ //метод добавления todo
        this.todos.push(todo)
      }
}