import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from '../news/news.component';
import { MunicipalidadComponent } from './municipalidad/municipalidad.component';


@NgModule({
  declarations: [
    GeneralComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    MunicipalidadComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
