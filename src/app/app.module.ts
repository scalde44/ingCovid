import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { RouterModule } from '@angular/router';
//HTTP
import { HttpClientModule } from '@angular/common/http'
//Rutas
import { ROUTES } from './app.routes';
//Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//Environment
import { environment } from '../environments/environment';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CaliComponent } from './components/cali/cali.component';
import { PicoComponent } from './components/pico/pico.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { SintomasComponent } from './components/sintomas/sintomas.component';
import { PrevencionComponent } from './components/prevencion/prevencion.component';
import { AboutComponent } from './components/about/about.component';
import { ReportarComponent } from './components/reportar/reportar.component';
import { AtencionComponent } from './components/atencion/atencion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CaliComponent,
    PicoComponent,
    LoadingComponent,
    FooterComponent,
    SintomasComponent,
    PrevencionComponent,
    AboutComponent,
    ReportarComponent,
    AtencionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
