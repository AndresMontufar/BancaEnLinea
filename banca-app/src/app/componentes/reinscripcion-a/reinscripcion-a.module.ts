import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinscripcionAPageRoutingModule } from './reinscripcion-a-routing.module';

import { ReinscripcionAPage } from './reinscripcion-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinscripcionAPageRoutingModule
  ],
  declarations: [ReinscripcionAPage]
})
export class ReinscripcionAPageModule {}
