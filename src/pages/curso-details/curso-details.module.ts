import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CursoDetailsPage } from './curso-details';

@NgModule({
  declarations: [
    CursoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CursoDetailsPage),
  ],
})
export class CursoDetailsPageModule {}
