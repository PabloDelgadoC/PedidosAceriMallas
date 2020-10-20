import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarBuyPage } from './car-buy.page';

const routes: Routes = [
  {
    path: '',
    component: CarBuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarBuyPageRoutingModule {}
