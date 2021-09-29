import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { AsistenciaComponent } from './asistencia/asistencia.component'

@NgModule({
  declarations:[FooterComponent, 
                AsistenciaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterComponent, 
    AsistenciaComponent
  ]
})
export class ComponentsModule { }
