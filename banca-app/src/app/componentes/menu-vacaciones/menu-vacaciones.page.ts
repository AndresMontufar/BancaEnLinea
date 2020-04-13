import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'

@Component({
  selector: 'app-menu-vacaciones',
  templateUrl: './menu-vacaciones.page.html',
  styleUrls: ['./menu-vacaciones.page.scss'],
})
export class MenuVacacionesPage implements OnInit {


  public  items = [
    {
      title: 'Listado de cursos asignados',
      icon: 'md-checkmark-circle-outline',
      description: 'Ver los cursos asignados.',
      color: '#E63135',
      url: '#'
    },
    {
      title: 'Cambiar un curso ya asignado',
      icon: 'checkbox-outline',
      description: 'Cambio de cursos asignados',
      color: '#48B627',
      url: '/cambio-curso-vacaciones'
    },
    {
      title: 'Desasignar un curso (Reembolso)',
      icon: 'paper-plane',
      description: 'Quitar un curso de mis asignaciones',
      color: '#0CA9EA',
<<<<<<< Updated upstream
      url: '#'
=======
      url: '/reembolso-vacaciones'
>>>>>>> Stashed changes
    },

  ];

  constructor(private global: GlobalService) { }

  ngOnInit() {
  }

}
