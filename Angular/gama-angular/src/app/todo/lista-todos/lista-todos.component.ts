import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/typings/Todo';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {
    todos = [];
    // todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.todoService.getTodos(user.id).subscribe((todos) => {
        this.todos = todos;
      });
    });
    }

    onDeleteItem(id){
      console.log(id);
      this.todoService.deleteTodo(id).subscribe(v =>{
        alert('To-do apagado com sucesso');
        this.todos = this.todos.filter(todo => todo.id === id);
      });
    }
  }


