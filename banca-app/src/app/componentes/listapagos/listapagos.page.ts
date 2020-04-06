import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'

@Component({
  selector: 'app-listapagos',
  templateUrl: './listapagos.page.html',
  styleUrls: ['./listapagos.page.scss'],
})
export class ListapagosPage implements OnInit {

  public  items = [
    {
      title: 'Semestre',
      icon: 'md-checkmark-circle-outline',
      description: 'Pago de cursos Semestral.',
      color: '#E63135',
      url: '#'
    },
    {
      title: 'Suficiencia',
      icon: 'checkbox-outline',
      description: 'Pago para asignar la suficiencia',
      color: '#48B627',
      url: '/suficiencia'
    },
    {
      title: 'Vacaciones',
      icon: 'paper-plane',
      description: 'Pago Escuela de Vacaciones.',
      color: '#0CA9EA',
      url: '/vacaciones'
    },
    {
      title: 'Retrasadas',
      icon: 'refresh',
      description: 'Pago de Retrasada.',
      color: '#F46529',
      url: '/retrasada'
    },
    {
      title: 'Varios',
      icon: 'alert',
      description: 'Pagos Varios',
      color: '#FFD439',
      url: '#'
    },
    
  ];

  constructor(private global: GlobalService) { }

  ngOnInit() {
  }

}
