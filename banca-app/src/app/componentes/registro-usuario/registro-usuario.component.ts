import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from '../../sevicios/registro-usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss'],
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(private usuarioservice: RegistroUsuarioService) { }

  /*
  publicar(){
    this.usuarioservice.GuardarInfo('hola').subscribe(
        res =>{
          console.log(res);
        },
        err => console.error(err)
    );
  }
  */

  // adsasdasdas
  ngOnInit() {}

}
