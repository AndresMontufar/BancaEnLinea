import { Component, OnInit } from '@angular/core';
import {Reinscripciones} from '../../Modelos/reinscripcion';
import {SuficienciaService} from '../../servicios/suficiencia.service';
import {GlobalService} from '../../servicios/global.service';

@Component({
  selector: 'app-reinscripcion-a',
  templateUrl: './reinscripcion-a.page.html',
  styleUrls: ['./reinscripcion-a.page.scss'],
})
export class ReinscripcionAPage implements OnInit {
  reinscripciones: Reinscripciones = {
    no_cuenta: 0,
    cantidad: 0
  }

  cuentas: any = []

  constructor(private global: GlobalService, private suficienciaServices: SuficienciaService) { }

  ngOnInit() {
    this.suficienciaServices.getCuentas(this.global.carne).subscribe(
        res => {
          this.cuentas = res;
          console.log(res);
        },
        err => console.error(err)
    )
  }

  pagar(){

  }
}
