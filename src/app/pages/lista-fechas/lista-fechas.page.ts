import { Component } from '@angular/core';
import {FechasService} from '../../services/fechas.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-lista-fechas',
  templateUrl: './lista-fechas.page.html',
  styleUrls: ['./lista-fechas.page.scss'],
})
export class ListaFechasPage{

  fechas: any = []

  constructor(private fechasService: FechasService, private alertController: AlertController) { }

  loadFechas(){
    this.fechasService.getFecha().subscribe(
      
      (res) => {
      this.fechas = res;
    },

    (err) => console.log(err)
    );
  }

  ngOnInit() {
    this.loadFechas();
  }

  ionViewWillEnter(){
    this.loadFechas();
  }

  async deleteFecha(id){
    const alert = await this.alertController.create({
      header: 'Eliminar fecha',
      message: '¿Estás seguro que quieres eliminar la fecha seleccionada?',
      buttons: [{
        text: 'Si',
        handler: () =>{
          this.fechasService.deleteFecha(id).subscribe(
            (res) => {
              this.loadFechas();
            },
            (err) => console.error(err)
          );
        },
      },
      'Cancelar',
    ],
    });

    await alert.present();
  }

  editFecha(id: string){
    console.log(id)
  }
}
