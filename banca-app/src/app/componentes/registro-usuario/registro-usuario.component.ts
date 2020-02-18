import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../sevicios/registro-usuario.service';
import {crearusuario} from '../../Modelos/CrearUsuario';


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
  fecha_nac1: string;
  habilitado1: number;
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

  constructor(private Usuarioservice: RegistroUsuarioService) { }

  ngOnInit() {}

  Regisrar(){
    this.request = this.newUser(this.carnet1, this.nombre1, this.apellido1, this.dpi1, this.correo1, this.contrasena1, this.fecha_nac1, 1);
    this.Usuarioservice.registrar(this.request).subscribe(
        res =>{
          console.log(res)
        },
        error => console.error(error)
    )
  }

}
