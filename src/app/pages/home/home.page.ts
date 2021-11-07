import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuariosService, Usua } from 'src/app/services/usuarios.service'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  center="ion-text-center";
  titulo = "DUOC UC";

  user: any = []

  constructor(private userService: UsuariosService, public navController: NavController, private router: Router, private activatedRoute: ActivatedRoute) {}

  loadUser(){
    this.userService.ShowUsers().subscribe((res) => {this.user = res;})
  }

  ngOnInit(){
    this.loadUser()
  }

  ionViewWillEnter(){
    this.loadUser()
  }

  login(nombre, password){
    for (var aux of this.user){
      if (aux.nombre == nombre.value){
        console.log('nombre de usuario bien ingresado')
        if (aux.password == password.value){
          console.log('Contraseña correcta')
          this.router.navigate(['/inicio'])
        }
        else{
          console.log('Contraseña incorrecta')
        }
      }
      else{
        console.log('nombre de usuario mal ingresado')
      }
    }
  }
}


