import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

    enviar(){
        console.log(this.email, this.senha, this.confirmarSenha);
        this.authService.createAccount(this.email, this.senha).subscribe((value: any) => {
          alert('Usuario criado com sucesso');
          console.log(value);
         
          localStorage.setItem('token', value.idToken);
      
          this.authService.setUser({
            email: value.email,
            id: value.localId,
             });
        });
    }
   
}
