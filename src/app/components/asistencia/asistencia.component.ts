import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {

  listaAsignaturas: any = [
    {
      id:1,
      nombre:"PROGRAMACIÓN DE APLICACIONES MOVILES",
      porcentaje: "100%"
    },
    {
      id:2,
      nombre:"ARQUITECTURA",
      porcentaje: "100%"
    },
    {
      id:3,
      nombre:"CALIDAD DE SOFTWARE",
      porcentaje: "100%"
    },
    {
      id:4,
      nombre:"INGLES INTERMEDIO",
      porcentaje: "100%"
    },
    {
      id:5,
      nombre:"ESTADISTICA DESCRIPTIVA",
      porcentaje: "100%"
    },
    {
      id:6,
      nombre:"DOCTRINA SOCIAL DE LA IGLESIA",
      porcentaje: "100%"
    },
    {
      id:7,
      nombre:"ETICA PARA EL TRABAJO",
      porcentaje: "100%"
    }
    
  ]
  constructor() { }

  ngOnInit() {}

}
