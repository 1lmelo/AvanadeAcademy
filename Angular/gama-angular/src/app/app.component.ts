import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lucas';
  items = ['2', '3', 'Hamburguer', '8', '9'];
  ngOnInit(){
   
  
    setTimeout(() =>{
        this.title = 'Melo'

    }, 2000);

}


novoItem(){
  const text = prompt('Digite um nome');
  this.items.push(text);
}


limparItem(){
  this.items = [];
}


}
