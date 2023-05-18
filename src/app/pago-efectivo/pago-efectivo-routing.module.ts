import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoEfectivoPage } from './pago-efectivo.page';

const routes: Routes = [
  {
    path: '',
    component: PagoEfectivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoEfectivoPageRoutingModule {}
