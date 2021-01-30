import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalMapaPage } from './local-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: LocalMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalMapaPageRoutingModule {}
