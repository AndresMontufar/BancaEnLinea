import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../servicios/global.service'
import {CambioCursoVacacionesService} from '../../servicios/cambio-curso-vacaciones.service'
import {CambioVacaciones} from '../../Modelos/Cambio-Vacaciones';
import {AlertController} from '@ionic/angular';
import {Router} from "@angular/router";




@Component({
  selector: 'app-cambio-curso-vacaciones',
  templateUrl: './cambio-curso-vacaciones.page.html',
  styleUrls: ['./cambio-curso-vacaciones.page.scss'],
})
export class CambioCursoVacacionesPage implements OnInit {
  total_cambio: number;
  total_actual: number;
  cursos: any = []
  todos: any = []
  laboratorio: boolean;
  laboratorioC: number;

  constructor(private router : Router, private cambiocursovacas: CambioCursoVacacionesService , private global: GlobalService, public alertController: AlertController) { }

  Cambio: CambioVacaciones = {
    carnet: this.global.carne,
    curso: 0,
    cambio: 0,
  }


  ngOnInit() {
    console.log(this.global.carne)
      this.laboratorioC = 0;
    this.cambiocursovacas.ObtenerCursos(this.global.carne).subscribe(
        res => {
          this.cursos = res;
        },
        err => console.error(err)
    )

    this.cambiocursovacas.CursosVacaciones().subscribe(
        res => {
          this.todos = res;
        },
        err => console.error(err)
    )
  }

  hacerCambio(){
      console.log(this.Cambio)
      for (const entry of this.cursos) {
          if (entry.idcursos_semestre == this.Cambio.curso)
          {
              this.total_actual = entry.total
          }
      }

      for (const entry of this.todos) {
          if (entry.idcursos_semestre == this.Cambio.cambio)
          {
              this.total_cambio = ( entry.precio + this.laboratorioC )
          }
      }

      if (this.total_cambio > this.total_actual)
      {
          this.presentAlert('Cursos de Vacaciones','El curso que se desea asignar tiene mayor costo que el curso asignado')
      }
      else {
          if (this.total_cambio - this.total_actual > 0 )
          {
              // Pendiente el hecho del reembolso por excedente
          }
          this.cambiocursovacas.CambiarCurso(this.Cambio).subscribe(
              res => {
                  console.log(res);
                  this.presentAlert('Cursos de Vacaciones','Se ha hecho el cambio correctamente')
                  this.router.navigate([`/home/${this.global.carne}`])
              },
              err => console.error(err)
          );
      }
  }

    conlaboratorio(){
        this.laboratorio = !this.laboratorio;
        if(this.laboratorio == true){
            this.laboratorioC = 80
        }else {
            this.laboratorioC = 0
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
