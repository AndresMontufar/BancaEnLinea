import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemestrePageRoutingModule } from './semestre-routing.module';

import { SemestrePage } from './semestre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemestrePageRoutingModule
  ],
  declarations: [SemestrePage]
})
export class SemestrePageModule {}
