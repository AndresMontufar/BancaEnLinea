import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetrasadaPage } from './retrasada.page';

const routes: Routes = [
  {
    path: '',
    component: RetrasadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetrasadaPageRoutingModule {}
