import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'
import {PerfilUsuarioService} from '../../servicios/perfil-usuario.service'
import {Router} from '@angular/router';
import {crearusuario} from '../../Modelos/CrearUsuario';
import {AlertController} from '@ionic/angular';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

    carnet1: number;
    nombre1: string;
    apellido1: string;
    dpi1: number;
    correo1: string;
    contrasena1: string;
    fecha_nac1: string;
    habilitado1: number;
    bloqueado: string;
    request: crearusuario;

  constructor(private perfilUsuarioServic: PerfilUsuarioService, private global: GlobalService, private router : Router,
              public alertController: AlertController) { }

  ngOnInit() {
      this.bloqueado = 'true';
      console.log(this.global.carne)
      //this.request = this.newLogin(this.carne, this.password);
      this.perfilUsuarioServic.datos(this.global.carne).subscribe(
      res =>{
          console.log(res)
          this.carnet1 = +res[0].carnet
          this.nombre1 = res[0].nombre
          this.apellido1 = res[0].apellido
          this.dpi1 = +res[0].dpi
          this.correo1 = res[0].correo
          this.fecha_nac1 = new Date(res[0].fecha_nac).getFullYear().toString() + '-' + (new Date(res[0].fecha_nac).getMonth()+1).toString() +'-' + (new Date(res[0].fecha_nac).getDate()+1).toString()
          console.log(this.fecha_nac1)
          this.contrasena1 = res[0].contrasena
          this.habilitado1 = +res[0].habilitado
      },
      error => console.error(error)
      )
  }


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

    Modificar(){
      if(this.bloqueado == 'true'){
          this.bloqueado = 'false';
          console.log(this.fecha_nac1)
      }
      else{
          console.log('inicio registro');
          this.Regisrar();
          console.log('fin registro');
          this.bloqueado = 'true';
          this.router.navigate([`/home/${this.global.carne}`])
      }

    }

     Regisrar(){
        this.request = this.newUser(this.carnet1, this.nombre1, this.apellido1, this.dpi1, this.correo1, this.contrasena1, this.fecha_nac1, this.habilitado1);
        this.perfilUsuarioServic.registrar(this.request,this.global.carne).subscribe(
            res =>{
                this.presentAlert('Felicidades','Datos modificados')
            },
            error => console.error(error)
        )
    }

    eliminar(){
        this.perfilUsuarioServic.eliminar(this.global.carne).subscribe(
            res =>{
                this.presentAlert('Sistema','Usuario Deshabilitado')
            },
            error => console.error(error)
        )
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
