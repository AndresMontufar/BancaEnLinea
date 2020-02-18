import { Component, OnInit } from '@angular/core';
import {Login} from '../../Modelos/Login';
import {LoginService} from '../../sevicios/login.service'
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

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  validateLogin(){
    if(this.password !== '' && this.carne){
      this.request = this.newLogin(this.carne, this.password);
      this.loginService.Login(this.request).subscribe(
          res =>{
            console.log(res)
          },
          error => console.error(error)
      )
    }
  }
}
