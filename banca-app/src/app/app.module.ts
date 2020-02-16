import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { LoginComponent} from './componentes/login/login.component';
import { PerfilUsuarioComponent} from './componentes/perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
      AppComponent,
      RegistroUsuarioComponent,
      LoginComponent,
      PerfilUsuarioComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
