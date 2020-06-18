import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CursoDTO } from '../../models/curso.dto';
import { CursoService } from '../../services/domain/curso.service';

@IonicPage()
@Component({
  selector: 'page-curso-details',
  templateUrl: 'curso-details.html',
})
export class CursoDetailsPage {

  item: CursoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cursoService: CursoService,
    public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    let curso = this.navParams.get('curso');
    this.item = curso;
  }

  excluirCurso(curso_id: string) {
    console.log("EXCLUINDO CURSO ...");
    this.cursoService.excluirCurso(curso_id)
      .subscribe(response => {
        this.showOK();
      },
      error => {});
  }

  showOK() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Curso excluido com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop()
          }
        }
      ]
    });
    alert.present();
  }
  

}
