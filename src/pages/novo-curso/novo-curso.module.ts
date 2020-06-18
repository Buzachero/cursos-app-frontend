import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoCursoPage } from './novo-curso';

@NgModule({
  declarations: [
    NovoCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoCursoPage),
  ],
})
export class NovoCursoPageModule {}
