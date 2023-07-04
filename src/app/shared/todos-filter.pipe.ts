import { Pipe, PipeTransform } from "@angular/core";
import { ITodo } from "../models/todo";


@Pipe({ name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
    transform(todos: ITodo[], search: string = ''):ITodo[] {
        if (!search.trim()){
            return todos
        }

        return todos.filter(todo => {
            return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
    }
}
