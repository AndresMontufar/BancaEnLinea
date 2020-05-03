import { Component, OnInit } from '@angular/core';
import {RetrasadaService} from '../../servicios/retrasada.service'
import {AlertController} from '@ionic/angular';
import {GlobalService} from '../../servicios/global.service'

@Component({
  selector: 'app-listasemestre',
  templateUrl: './listasemestre.page.html',
  styleUrls: ['./listasemestre.page.scss'],
})
export class ListasemestrePage implements OnInit {
  public cursos: any = []
  constructor(private retrasericio: RetrasadaService, public alertController: AlertController,
              private global: GlobalService) { }

  async ngOnInit() {
    await delay(500);

    this.retrasericio.getcursosretra(this.global.carne).subscribe(
        res => {
          this.cursos = res;
        },
        err => console.error(err)
    )

    await delay(500);
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

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
