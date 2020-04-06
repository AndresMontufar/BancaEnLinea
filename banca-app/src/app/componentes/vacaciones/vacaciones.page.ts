import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'
import {RetrasadaService} from '../../servicios/retrasada.service'
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.page.html',
  styleUrls: ['./vacaciones.page.scss'],
})
export class VacacionesPage implements OnInit {
  public cursos: any = []

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
  ];


  constructor(private retrasericio: RetrasadaService, public alertController: AlertController,
              private global: GlobalService) { }

  ngOnInit() {
    console.log(this.global.carne)
    this.retrasericio.getCursos().subscribe(
        res =>{
          this.cursos = res;
        },
        err => console.error(err)
    )
  }

  vacasasignar(){
    console.log(this.global.carne);
    this.presentAlert('Vacaciones','Vacaciones asignada')
  }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
