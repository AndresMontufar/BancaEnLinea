import { Component, OnInit } from '@angular/core';
import {crearusuario} from '../../Modelos/CrearUsuario';
import {RegistroUsuarioService} from '../../servicios/registro-usuario.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  carnet: number;
  name: string;
  lastName: string;
  transaction: number;
  amount: number;
  request: crearusuario;

  newUser(carnet, name, lastName, dpi, email, password, date, active) : crearusuario{
    return{
      carnet: carnet,
      nombre: name,
      apellido: lastName,
      dpi: dpi,
      correo: email,
      contrasena: password,
      fecha_nac: date,
      habilitado: active
    }
  };

  constructor(private Usuarioservice: RegistroUsuarioService) { }

  ngOnInit() {}

  Register(){
    this.request = this.newUser(this.carnet, this.name, this.lastName, 0, '', '', new Date(), true)
    this.Usuarioservice.registrar(this.request).subscribe(
        res =>{
          console.log(res)
        },
        error => console.error(error)
    )
  }

}
