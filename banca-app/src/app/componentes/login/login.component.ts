import { Component, OnInit } from '@angular/core';
import {Login} from '../../Modelos/Login';
import {LoginService} from '../../servicios/login.service'
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

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

  constructor(private loginService: LoginService, private router : Router,
              public alertController: AlertController) { }

  ngOnInit() {

  }

  validateLogin(){
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

  f(){
    this.router.navigate([`/reinscripcion-a`])
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
