import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFechasPageRoutingModule } from './lista-fechas-routing.module';

import { ListaFechasPage } from './lista-fechas.page';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFechasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaFechasPage]
})
export class ListaFechasPageModule {}
