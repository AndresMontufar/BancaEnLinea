import {Component, HostBinding, OnInit} from '@angular/core';
import {GlobalService} from '../../servicios/global.service';

import {SuficienciaService} from '../../servicios/suficiencia.service';
import {Suficiencia} from "../../Modelos/Suficiencia";

@Component({
  selector: 'app-listapagos',
  templateUrl: './suficiencia.page.html',
  styleUrls: ['./suficiencia.page.scss'],
})

export class SuficienciaPage implements OnInit {
  cursos: any = []
  cuentas: any = []

  public  items = [
    {
      title: 'Semestre',
      icon: 'md-checkmark-circle-outline',
      description: 'Pago de cursos Semestral.',
      color: '#E63135'
    },
    {
      title: 'Vacaciones',
      icon: 'paper-plane',
      description: 'Pago Escuela de Vacaciones.',
      color: '#0CA9EA'
    },
    {
      title: 'Retrasadas',
      icon: 'refresh',
      description: 'Pago de Retrasada.',
      color: '#F46529'
    },
    {
      title: 'Varios',
      icon: 'alert',
      description: 'Pagos Varios',
      color: '#FFD439'
    },
  ];

  suficiencia: Suficiencia = {
    no_cuenta: 0,
    curso: 0,
    descripcion: 'Se ha asignado una suficiencia:'
  }

  constructor(private global: GlobalService, private suficienciaServices: SuficienciaService) { }

  ngOnInit() {
    console.log(this.global.carne)
    this.suficienciaServices.getCursos().subscribe(
        res => {
          this.cursos = res;
          console.log(res);
        },
        err => console.error(err)
    )

    this.suficienciaServices.getCuentas(this.global.carne).subscribe(
        res => {
          this.cuentas = res;
          console.log(res);
        },
        err => console.error(err)
    )
  }

  Asignar() {
    this.suficienciaServices.Asign(this.suficiencia)
  }

}
