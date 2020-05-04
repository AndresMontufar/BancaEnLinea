import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasemestrePageRoutingModule } from './listasemestre-routing.module';

import { ListasemestrePage } from './listasemestre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasemestrePageRoutingModule
  ],
  declarations: [ListasemestrePage]
})
export class ListasemestrePageModule {}
