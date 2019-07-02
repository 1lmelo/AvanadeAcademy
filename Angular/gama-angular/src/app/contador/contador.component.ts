import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }
  cont = 0;

  ngOnInit() {
    setInterval(() => {
      this.cont++;
  }, 1000);
  

  }

}
