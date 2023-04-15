import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';
import { NewsComponent } from '../news/news.component';
import { MunicipalidadComponent } from './municipalidad/municipalidad.component';



const childRoutes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      //{ path: 'hola', component: GeneralComponent},
      { path: 'noticias', component: NewsComponent},
      { path: 'muni', component: MunicipalidadComponent},
    ], 
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
