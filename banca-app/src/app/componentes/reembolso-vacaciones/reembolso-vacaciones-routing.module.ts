import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReembolsoVacacionesPage } from './reembolso-vacaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ReembolsoVacacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReembolsoVacacionesPageRoutingModule {}
