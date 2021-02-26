import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FormularioModalComponent} from 'src/app/pages/formulario-modal/formulario-modal.component'
import { Platform } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,FormularioModalComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook, Platform,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
