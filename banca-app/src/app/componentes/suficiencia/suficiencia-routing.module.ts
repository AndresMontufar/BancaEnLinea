import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuficienciaPage } from './suficiencia.page';

const routes: Routes = [
  {
    path: '',
    component: SuficienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuficienciaPageRoutingModule {}
