import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasemestrePage } from './listasemestre.page';

const routes: Routes = [
  {
    path: '',
    component: ListasemestrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasemestrePageRoutingModule {}
