import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo/todo.service';
import { map, debounceTime } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cont = 0;
  email = '';
  constructor(public todoService: TodoService, private authService: AuthService) {}

  ngOnInit() {
    this.todoService.cont.pipe(map( x => x * 2), debounceTime(2000)).subscribe(value => {
     this.cont = value;


     if(token){
       this.authService.verifyToken(token).subscribe((v: any) =>{
          this.authService.verifyToken.setUser({
            email: v.users[0].email,
          });
       });
     }

     this.authService.currentUser.subscribe((v) => {
      if (v !== null) {
        this.email = v.email;
      }
    });
 



    });
  }

}