import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipsAhorroPage } from './tips-ahorro.page';

const routes: Routes = [
  {
    path: '',
    component: TipsAhorroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipsAhorroPageRoutingModule {}
