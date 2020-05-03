import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialCuentaPage } from './historial-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialCuentaPageRoutingModule {}
