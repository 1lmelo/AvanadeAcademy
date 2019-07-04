import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  cont = 0;

  title = 'Aula3-testes';


  constructor() { }

  ngOnInit() {
  }

  
  aumentar(){
    this.cont++;
  }

    diminuir(){
      this.cont--;
    }


}
