import { Component, OnInit } from '@angular/core';
import {RetrasadaService} from '../../servicios/retrasada.service'
import {AlertController} from '@ionic/angular';
import {GlobalService} from '../../servicios/global.service'

@Component({
  selector: 'app-retrasada',
  templateUrl: './retrasada.page.html',
  styleUrls: ['./retrasada.page.scss'],
})
export class RetrasadaPage implements OnInit {
  public cursos: any = []

  constructor(private retrasericio: RetrasadaService, public alertController: AlertController,
              private global: GlobalService) { }

  ngOnInit() {
    this.retrasericio.getcursosretra(this.global.carne).subscribe(
        res =>{
          this.cursos = res;
        },
        err => console.error(err)
    )
  }

  async presentAlert(title, message) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  retraasign(){
    console.log(this.global.carne);
    this.presentAlert('Retrasada','Retrasada asignada')
  }
}
