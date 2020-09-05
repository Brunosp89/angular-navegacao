import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SaudacaoComponent } from './saudacao/saudacao.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';

@NgModule({
  imports:      [
     BrowserModule,
     FormsModule,
     RouterModule.forRoot ([
       {path: '', component: HomeComponent},
       {path: 'about', component: AboutComponent},
       {path: 'saudacao', component: SaudacaoComponent},
       {path: 'aleatorio', component: AleatorioComponent}
       ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, SaudacaoComponent, AleatorioComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
