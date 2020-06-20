import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoCursoPage } from './novo-curso';
import { CategoriaService } from '../../services/domain/categoria.service';

@NgModule({
  declarations: [
    NovoCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoCursoPage),
  ],
  providers: [
    CategoriaService
  ]
})
export class NovoCursoPageModule {}
