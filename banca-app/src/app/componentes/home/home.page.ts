import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GlobalService} from '../../servicios/global.service'
import {CuentaService} from '../../servicios/cuenta.service';
import {Cuenta} from '../../Modelos/Cuenta';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public sub;
  public Account: Cuenta[] = [];

  newAccount(cuenta, carnet, saldo, tipo, estado, ): Cuenta{
    return {
      no_cuenta: cuenta,
      estado: estado,
      saldo: saldo,
      tipo_id: tipo,
      usuario_carnet: carnet
    }
  }

  constructor(private route: ActivatedRoute, private global: GlobalService, private accountService: CuentaService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.global.carne = +params['carnet'];
      this.accountService.getAccounts(this.global.carne).subscribe(
          (res : Cuenta[]) =>{
            this.Account = res;
            console.log(res);
          },
          err =>console.error(err)
      )
    })
  }


}
