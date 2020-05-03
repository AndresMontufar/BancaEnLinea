import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReembolsoVacacionesPageRoutingModule } from './reembolso-vacaciones-routing.module';

import { ReembolsoVacacionesPage } from './reembolso-vacaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReembolsoVacacionesPageRoutingModule
  ],
  declarations: [ReembolsoVacacionesPage]
})
export class ReembolsoVacacionesPageModule {}
