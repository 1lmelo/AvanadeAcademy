import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/typings/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private pCont = new BehaviorSubject(0); 

  cont = this.pCont.asObservable();

  constructor(private httpCliente: HttpClient) { }

  getTodos(userId): Observable<Todo[]> {
    return this.httpCliente.get<Todo[]>('http://localhost:3000/users/' + userId + '/todos');
  }
 
 

  adicionarTodo(todo: Todo){
    return this.httpCliente.post('http://localhost:3000/todos', todo);
  }



  aumetar(){
      this.pCont.next(this.pCont.value + 1);
  }

  diminuir(){
      this.pCont.next(this.pCont.value - 1);
  }

  getTodo(id){
    return this.httpCliente.get('http://localhost:3000/todos/' +id);
  }

  deleteTodo(id){
    return this.httpCliente.delete('http://localhost:3000/todos/' +id);
  }

  updateTodo(id, todo){
    return this.httpCliente.put('http://localhost:3000/todos/' +id, todo);
  }

}
