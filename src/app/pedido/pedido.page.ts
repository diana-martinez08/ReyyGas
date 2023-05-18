import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage{

  constructor(private navCtrl: NavController) {
    
   }

  goTotipoPago(){
    this.navCtrl.navigateForward('./Tipo-Pago');
  }

}
