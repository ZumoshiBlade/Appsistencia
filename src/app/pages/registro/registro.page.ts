import { Component, OnInit } from '@angular/core';
import { Usua, UsuariosService} from 'src/app/services/usuarios.service'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  center = "ion-text-start";
  titulo = "¡REGISTRATE!";

  user: Usua = {
    nombre: '',
    password: ''
  }

  constructor( private usuariosService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  saveUser(password, passconfirm) {
    if (password.value == passconfirm.value){
      this.usuariosService
      .createUser(this.user.nombre, this.user.password)
      .subscribe((res) => {this.router.navigate(['/home']);}, 
      (err) => console.log(err));
    }
    else(
      console.log('Las contraseñas no coinciden')
    )
  }
}
