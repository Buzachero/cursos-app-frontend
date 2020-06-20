import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoService } from '../../services/domain/curso.service';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';

@IonicPage()
@Component({
  selector: 'page-novo-curso',
  templateUrl: 'novo-curso.html',
})
export class NovoCursoPage {

  formGroup: FormGroup;
  categorias: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cursoService: CursoService,
    public categoriaService: CategoriaService,
    public alertCtrl: AlertController) {
      this.formGroup = this.formBuilder.group({
        descricao: ['', [Validators.required]],
        dataInicio: ['', [Validators.required]],
        dataTermino: ['', [Validators.required]],
        quantidadeAlunos: [0, []],
        categoria: [null, [Validators.required]]
      });
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.categorias = response;
      }, 
      error => {
        console.log('ERRO NO CARREGAMENTO DE CATEGORIAS');
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
