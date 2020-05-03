import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialCuentaPageRoutingModule } from './historial-cuenta-routing.module';

import { HistorialCuentaPage } from './historial-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialCuentaPageRoutingModule
  ],
  declarations: [HistorialCuentaPage]
})
export class HistorialCuentaPageModule {}
