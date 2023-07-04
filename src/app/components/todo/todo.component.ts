import { delay } from 'rxjs';
import { TodosService } from './../../shared/todos.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoTitle='Todo Component'
  searchString: string = ''

  public loading:boolean = true //создаем приватную переменнную loading (она доступна только в классе TodoComponent) для того чтобы менять флаг при загрузке данных
  
  constructor(public todosService: TodosService){} // Инжектируем сервис todosService (концепция Депенденси инжекшин) для того чтобы он был доступен в компоненте

  // При инициализации компонента TodoComponent мы вызываем метод fetchTodos и подписываемся на него с помощью subscribe
  ngOnInit(): void {
      this.todosService.fetchTodos()
      .pipe(delay(2000)) //создает искуственную задержку при загрузке данных с сервера
      .subscribe(()=>{
      this.loading = false //при загрузке данных меняется флаг (на false)
    })
  }

  onChange(id: number){ //вызываем метод зачеркивания и выделения todo из сервиса
    this.todosService.onToggle(id)
  }

  removeTodo(id: number){ //вызываем метод удаления todo из сервиса
    this.todosService.removeTodo(id)
  }
}
