import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapagosPageRoutingModule } from './listapagos-routing.module';

import { ListapagosPage } from './listapagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapagosPageRoutingModule
  ],
  declarations: [ListapagosPage]
})
export class ListapagosPageModule {}
