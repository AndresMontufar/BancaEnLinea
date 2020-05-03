import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinscripcionAPage } from './reinscripcion-a.page';

const routes: Routes = [
  {
    path: '',
    component: ReinscripcionAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinscripcionAPageRoutingModule {}
