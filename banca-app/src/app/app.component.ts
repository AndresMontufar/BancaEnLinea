import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {GlobalService} from './servicios/global.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{

  public appPages = [
    {
      title: 'Dashboard Principal',
      url: `/home`,
      icon: 'home'
    },
    {
      title: 'Transferencia',
      url: `/list`,
      icon: 'list'
    },
    {
      title: 'Perfil',
      url: `/perfil`,
      icon: 'person'
    },
    {
      title: 'Pagos',
      url: `/listapagos`,
      icon: 'person'
    },
  ];

  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private global: GlobalService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
