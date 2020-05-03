import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioCursoVacacionesPageRoutingModule } from './cambio-curso-vacaciones-routing.module';

import { CambioCursoVacacionesPage } from './cambio-curso-vacaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioCursoVacacionesPageRoutingModule
  ],
  declarations: [CambioCursoVacacionesPage]
})
export class CambioCursoVacacionesPageModule {}
