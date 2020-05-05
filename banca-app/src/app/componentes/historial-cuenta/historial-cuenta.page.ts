import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../servicios/global.service";
import {AlertController} from "@ionic/angular";
import {HistorialCuentaService} from "../../servicios/historial-cuenta.service";

@Component({
  selector: 'app-historial-cuenta',
  templateUrl: './historial-cuenta.page.html',
  styleUrls: ['./historial-cuenta.page.scss'],
})
export class HistorialCuentaPage implements OnInit {
  Datos: any

  constructor(private historialCuentaService: HistorialCuentaService , private global: GlobalService, public alertController: AlertController) { }

  ngOnInit() {
    this.obtener()
  }

  obtener(){
    this.historialCuentaService.getHistorial().subscribe(
        res =>{
         console.log(res)
          this.Datos = res
        })
    }
}
