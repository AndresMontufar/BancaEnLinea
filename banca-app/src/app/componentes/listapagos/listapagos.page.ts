import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
