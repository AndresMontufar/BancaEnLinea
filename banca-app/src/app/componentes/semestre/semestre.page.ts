import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'
import {RetrasadaService} from '../../servicios/retrasada.service'
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.page.html',
  styleUrls: ['./semestre.page.scss'],
})
export class SemestrePage implements OnInit {

  public cursos: any = []
  public cuentas: any = []
  curso_semestre: number;

  constructor(private retrasericio: RetrasadaService, public alertController: AlertController,
              private global: GlobalService) { }

  async ngOnInit() {

    await delay(500);

    this.retrasericio.getCursos().subscribe(
        res => {
          this.cursos = res;
          console.log(this.cursos)
        },
        err => console.error(err)
    )

    await delay(500);

    this.retrasericio.getCuentas(this.global.carne).subscribe(
        res => {
          this.cuentas = res;
          console.log(this.cuentas)
        },
        err => console.error(err)
    )

    await delay(500);
  }

  semestreasign(){
    this.presentAlert('Asignacion','Curso asignado')
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
