import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuficienciaPageRoutingModule } from './suficiencia-routing.module';

import { SuficienciaPage } from './suficiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuficienciaPageRoutingModule
  ],
  declarations: [SuficienciaPage]
})
export class SuficienciaPageModule {}
