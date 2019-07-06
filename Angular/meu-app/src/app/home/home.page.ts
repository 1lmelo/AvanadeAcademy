import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  date = new Date();

  constructor(public alertControler: AlertController) {}

  async exibirAlerta(){
    const alerta = await this.alertControler.create({
       header: 'Olá',
       subHeader: 'Como você esta?',
       buttons: ['Bem', 'Mal'],
     });

     await alerta.present();
  }

  open(){
    
  }

}
