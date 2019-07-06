import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  count = 0;
  counter$: Observable<number>;

  constructor(private store: Store<number>) { }

  ngOnInit() {
   this.store.select('counter').subscribe(value => {
      this.counter$ = value;
    })
  }

  aumentar(){
    this.store.dispatch({
      type: 'INCREMENT',
    });
  }

  diminuir(){
    this.store.dispatch({
      type: 'DECREMENT',
    });
  }


}
