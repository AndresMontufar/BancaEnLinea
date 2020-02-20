import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../servicios/registro-usuario.service';
import {crearusuario} from '../../Modelos/CrearUsuario';
import {Router} from '@angular/router';

import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
})
export class RegistroUsuarioComponent implements OnInit {

  carnet1: number;
  nombre1: string;
  apellido1: string;
  dpi1: number;
  correo1: string;
  contrasena1: string;
  contra2: string;
  fecha_nac1: string;
  request: crearusuario;

  newUser(carnet1, nombre1, apellido1, dpi1, correo1, contrasena1, fecha_nac1, habilitado1) : crearusuario{
    return{
      carnet: carnet1,
      nombre: nombre1,
      apellido: apellido1,
      dpi: dpi1,
      correo: correo1,
      contrasena: contrasena1,
      fecha_nac: fecha_nac1,
      habilitado: habilitado1
    }
  };

  constructor(private Usuarioservice: RegistroUsuarioService, private router : Router,
              public alertController: AlertController) { }

  ngOnInit() {}

  Registrar(){
    this.request = this.newUser(this.carnet1, this.nombre1, this.apellido1, this.dpi1, this.correo1, this.contrasena1, this.fecha_nac1, 1);
    if(this.contra2 === this.contrasena1){
      this.Usuarioservice.registrar(this.request).subscribe(
          res =>{
            this.presentAlert('Felicidades', 'Usuario Registrado');
            this.returnLogin();
          },
          error => console.error(error)
      )
    }
    else{
      this.presentAlert('Error', 'La contraseña no coincide');
    }
  }

  returnLogin(){
    this.router.navigate(['login'])
  }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
