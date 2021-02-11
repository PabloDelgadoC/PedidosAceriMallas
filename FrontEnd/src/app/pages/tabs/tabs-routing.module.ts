import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'car-buy',
        loadChildren: () => import('../car-buy/car-buy.module').then( m => m.CarBuyPageModule)
      },
      {
        path: 'assistant',
        loadChildren: () => import('../assistant/assistant.module').then( m => m.AssistantPageModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('../catalog/catalog.module').then( m => m.CatalogPageModule)
      },
      {
        path: 'cupons',
        loadChildren: () => import('../cupons/cupons.module').then( m => m.CuponsPageModule)
      },{
        path: 'locales',
        loadChildren: () => import('../locales/locales.module').then( m => m.LocalesPageModule)
      },
      {
        path: 'galery',
        loadChildren: () => import('../galery/galery.module').then( m => m.GaleryPageModule)
      },
      {
        path: 'pedidos',
        loadChildren: () => import('../pedidos/pedidos.module').then( m => m.PedidosPageModule)
      },
      {
        path: 'locales/local1',
        loadChildren: () => import('../local-mapa/local-mapa.module').then( m => m.LocalMapaPageModule)
      },
      {
        path: 'sugerencias',
        loadChildren: () => import('../sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
