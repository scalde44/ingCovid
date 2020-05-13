import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CaliComponent } from './components/cali/cali.component';
import { PicoComponent } from './components/pico/pico.component';
import {SintomasComponent} from './components/sintomas/sintomas.component';
import {AtencionComponent} from './components/atencion/atencion.component';
import {PrevencionComponent} from './components/prevencion/prevencion.component';
import {AboutComponent} from './components/about/about.component';
import {ReportarComponent} from './components/reportar/reportar.component';
export const ROUTES:Routes=[
    { path:'home',component:HomeComponent },
    { path:'cali',component:CaliComponent },
    { path:'pico',component:PicoComponent },
    { path:'sintomas',component:SintomasComponent },
    { path:'atencion',component:AtencionComponent },
    { path:'prevencion',component:PrevencionComponent },
    { path:'reportar',component:ReportarComponent },
    { path:'about',component:AboutComponent },
    { path:'',pathMatch:'full',redirectTo:'home' },
    { path:'**',pathMatch:'full',redirectTo:'home'}
];    