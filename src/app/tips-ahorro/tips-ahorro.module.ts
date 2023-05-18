import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipsAhorroPageRoutingModule } from './tips-ahorro-routing.module';

import { TipsAhorroPage } from './tips-ahorro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsAhorroPageRoutingModule
  ],
  declarations: [TipsAhorroPage]
})
export class TipsAhorroPageModule {}
