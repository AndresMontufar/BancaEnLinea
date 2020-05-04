import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'
import {Router} from '@angular/router';

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
      url: '/semestre'
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
    /*{
      title: 'Logout',
      icon: 'alert',
      description: 'Logout',
      color: '#FFD439',
      url: '/'
    },*/
    
  ];

  public icones= 'refresh'
  constructor(private router : Router, private global: GlobalService) { }

  exit(){
    //navigator['app'].exitApp();
    this.global.carne = null;
    this.router.navigate([`/home/${this.global.carne}`])
  }

  ngOnInit() {
  }

}
