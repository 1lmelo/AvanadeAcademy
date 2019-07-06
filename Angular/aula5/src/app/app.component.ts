import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula5';
  counter$: Observable<number>;

  constructor(private store: Store<number>){}

  ngOnInit(){
    this.counter$ = this.store.select("counter");
  }




}
