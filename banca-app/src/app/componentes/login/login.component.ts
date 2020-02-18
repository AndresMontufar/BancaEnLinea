import { Component, OnInit } from '@angular/core';
import {Login} from '../../Modelos/Login';
import {LoginService} from '../../sevicios/login.service'
import {Router} from '@angular/router';

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

  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit() {

  }

  validateLogin(){
    if(this.password !== '' && this.carne){
      this.request = this.newLogin(this.carne, this.password);
      this.loginService.Login(this.request).subscribe(
          res =>{
            if(res === true){
              this.router.navigate([`/home/${this.request.carnet}`])
            }
          },
          error => console.error(error)
      )
    }
  }

  register(){
    this.router.navigate(['Registro'])
  }
}
