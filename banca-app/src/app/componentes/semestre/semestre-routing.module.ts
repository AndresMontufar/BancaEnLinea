import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemestrePage } from './semestre.page';

const routes: Routes = [
  {
    path: '',
    component: SemestrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemestrePageRoutingModule {}
