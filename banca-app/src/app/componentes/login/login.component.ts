import { Component, OnInit } from '@angular/core';
import {Login} from '../../Modelos/Login';
import {LoginService} from '../../servicios/login.service'
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {GlobalService} from '../../servicios/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  carne: number;
  password: string;
  request: Login;

  newLogin(carne, password) : Login{
    return{
      carnet: carne,
      contrasena: password
    }
  };

  constructor(private loginService: LoginService, public router : Router,
              public alertController: AlertController, public global: GlobalService) { }

  ngOnInit() {

  }

  validateLogin(){
    this.global.carne = this.carne;
    if(this.password !== '' && this.carne){
      this.request = this.newLogin(this.carne, this.password);
      this.loginService.Login(this.request).subscribe(
          res =>{
            console.log(res);
            if(res === true){
              this.router.navigate([`/home/${this.request.carnet}`])
            }
            else{
              this.presentAlert('Ups...','Usuario Incorrecto o Deshabilitado')
            }
          },
          error => console.error(error)
      )
    }
  }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  register(){
    this.router.navigate(['Registro'])
  }
}
