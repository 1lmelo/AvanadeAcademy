import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-contador-botoes',
  templateUrl: './contador-botoes.component.html',
  styleUrls: ['./contador-botoes.component.css']
})
export class ContadorBotoesComponent implements OnInit {
      cont = 0;
  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.cont.subscribe(value => {
     this.cont = value;
    });
  }

}

