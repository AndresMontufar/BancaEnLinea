import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'
import {RetrasadaService} from '../../servicios/retrasada.service'
import {AlertController} from '@ionic/angular';
import {Semestres} from '../../Modelos/semestre';
import {SemestreService} from '../../servicios/semestre.service';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.page.html',
  styleUrls: ['./semestre.page.scss'],
})
export class SemestrePage implements OnInit {

  public cursos: any = []
  public cuentas: any = []
  //curso_semestre: number;
  fechas: number;
  fecha: string;

  semestre: Semestres ={
    usuario: 0,
    curso_semestre: 0,
    fecha: ''
  }

  constructor(private retrasericio: RetrasadaService, public alertController: AlertController,
              private global: GlobalService, private semestreservice: SemestreService) { }

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

  async semestreasign() {
    this.semestre.usuario = this.global.carne;
    this.fechas = Date.now();

    this.fecha = new Date(this.fechas).getFullYear().toString() + '-' + (new Date(this.fechas).getMonth() + 1).toString() + '-' + (new Date(this.fechas).getDate() + 1).toString()
    //console.log(this.fecha);
    this.semestre.fecha = this.fecha;
    console.log(this.semestre);

    await delay(500);
    this.semestreservice.Asign(this.semestre).subscribe(
        res =>{
          console.log(res);
          if(res === true){
            this.presentAlert('Asignacion', 'Curso asignado')
          }
          else{
            this.presentAlert('Ups...','Asigancion Incorrecta')
          }
        },
        error => console.error(error)
    );
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
