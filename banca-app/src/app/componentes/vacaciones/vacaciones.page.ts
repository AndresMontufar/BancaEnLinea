import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'
import {RetrasadaService} from '../../servicios/retrasada.service'
import {AlertController} from '@ionic/angular';
import {Suficiencia} from '../../Modelos/vacasiones';

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.page.html',
  styleUrls: ['./vacaciones.page.scss'],
})
export class VacacionesPage implements OnInit {
  public cursos: any = []
  public cuentas: any = []
  public itemss: any = []
  request: Suficiencia;

  laboratorio: boolean;
  laboratorioC: number;

  usuario: number;
  curso_semestre: number;
  fecha: string;
  total: number;
  fechas: number;

  constructor(private retrasericio: RetrasadaService, public alertController: AlertController,
              private global: GlobalService) { }



  newvacas(usuario, curso_semestre, fecha, total) : Suficiencia{
    return{
      usuario: usuario,
      curso_semestre: curso_semestre,
      fecha: fecha,
      total: total
    }
  };




  async ngOnInit() {

    await delay(500);

    this.retrasericio.getCursosVacasAsig(this.global.carne).subscribe(
        res => {
          this.itemss = res;
        },
        err => console.error(err)
    )

    await delay(500);

    this.retrasericio.getCursosVacas().subscribe(
        res => {
          this.cursos = res;
        },
        err => console.error(err)
    )

    await delay(500);

    this.retrasericio.getCuentas(this.global.carne).subscribe(
        res => {
          this.cuentas = res;
        },
        err => console.error(err)
    )

    await delay(500);

    this.retrasericio.getCursosVacasAsig(this.global.carne).subscribe(
        res => {
          this.itemss = res;
        },
        err => console.error(err)
    )

    await delay(500);
    this.laboratorioC = 115
  }

  vacasasignar(){

    this.fechas = Date.now();

    this.fecha = new Date(this.fechas).getFullYear().toString() + '-' + (new Date(this.fechas).getMonth()+1).toString() +'-' + (new Date(this.fechas).getDate()+1).toString()
    //console.log(this.fecha);
    this.request = this.newvacas(this.global.carne, this.curso_semestre, this.fecha, this.laboratorioC);

    this.retrasericio.registrar(this.request).subscribe(
        res =>{
          this.presentAlert('Vacaciones','Vacaciones asignada')
        },
        error => console.error(error)
    )

    this.retrasericio.getCursosVacasAsig(this.global.carne).subscribe(
        res => {
          this.itemss = res;
        },
        err => console.error(err)
    )
  }

  conlaboratorio(){
    this.laboratorio = !this.laboratorio;
    if(this.laboratorio == true){
      this.laboratorioC = 195
    }else {
      this.laboratorioC = 115
    }
    console.log('sms checked:' + this.laboratorio + ' precio: ' + this.laboratorioC);
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
