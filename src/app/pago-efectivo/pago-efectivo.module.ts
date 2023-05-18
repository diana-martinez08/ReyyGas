import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagoEfectivoPageRoutingModule } from './pago-efectivo-routing.module';

import { PagoEfectivoPage } from './pago-efectivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoEfectivoPageRoutingModule
  ],
  declarations: [PagoEfectivoPage]
})
export class PagoEfectivoPageModule {}
