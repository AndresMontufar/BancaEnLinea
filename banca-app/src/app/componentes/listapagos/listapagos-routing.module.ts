import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapagosPage } from './listapagos.page';

const routes: Routes = [
  {
    path: '',
    component: ListapagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapagosPageRoutingModule {}
