import { Component, OnInit } from '@angular/core';
import { FechasService, Fech } from 'src/app/services/fechas.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.page.html',
  styleUrls: ['./fecha.page.scss'],
})
export class FechaPage implements OnInit {

  editing = false;
  date: Fech = {
    fecha: '',
    descripcion: ''
  }

  constructor(private fechasService: FechasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      if (paramMap.get('id')){
        this.editing = true;
        this.fechasService.getFechaById(paramMap.get('id')).subscribe((res)=> {
          this.date = res;
          console.log(this.date)
        });
      }
    })
  }

  saveDate() {
    this.fechasService
    .createFecha(this.date.fecha, this.date.descripcion)
    .subscribe(res => {this.router.navigate(['/lista-fechas']);}, err => console.error(err));
  }

  updateDate() {
    this.fechasService.updateFecha(this.date.id, {
      fecha: this.date.fecha,
      descripcion: this.date.descripcion
    }).subscribe(res => {
      this.router.navigate(['/lista-fechas'])
    })
  }
}
