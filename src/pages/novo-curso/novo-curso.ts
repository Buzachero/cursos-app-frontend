import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoService } from '../../services/domain/curso.service';

@IonicPage()
@Component({
  selector: 'page-novo-curso',
  templateUrl: 'novo-curso.html',
})
export class NovoCursoPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cursoService: CursoService,
    public alertCtrl: AlertController) {
      this.formGroup = this.formBuilder.group({
        descricao: ['', [Validators.required]],
        dataInicio: ['', [Validators.required]],
        dataTermino: ['', [Validators.required]],
        quantidadeAlunos: [0, []],
        categoria: [1, [Validators.required]]
      });
  }

  registrarCurso() {
    console.log(this.formGroup.value);
    this.cursoService.salvarCurso(this.formGroup.value)
      .subscribe(response => {
        this.showOK();
      },
      error => {});
  }

  showOK() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Curso inserido com sucesso',
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
