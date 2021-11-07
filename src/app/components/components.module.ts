import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { AsistenciaComponent } from './asistencia/asistencia.component'
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations:[FooterComponent, 
                AsistenciaComponent, 
                HeaderComponent
                
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FooterComponent, 
    AsistenciaComponent,
    HeaderComponent
    
  ]
})
export class ComponentsModule { }
