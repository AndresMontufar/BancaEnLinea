import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuVacacionesPageRoutingModule } from './menu-vacaciones-routing.module';

import { MenuVacacionesPage } from './menu-vacaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuVacacionesPageRoutingModule
  ],
  declarations: [MenuVacacionesPage]
})
export class MenuVacacionesPageModule {}
