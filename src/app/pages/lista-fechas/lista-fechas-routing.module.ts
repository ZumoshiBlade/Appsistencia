import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFechasPage } from './lista-fechas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFechasPage
  },
  {
    path: 'fecha',
    loadChildren: () => import('../fecha/fecha.module').then( m => m.FechaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFechasPageRoutingModule {}
