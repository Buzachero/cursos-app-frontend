import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoService } from '../../services/domain/curso.service';
import { CursoDTO } from '../../models/curso.dto';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: CursoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cursoService: CursoService) {
    this.selectedItem = navParams.get('item');
    
  }

  ionViewWillEnter() {   
    this.carregarTodosCursos();
  }

  carregarTodosCursos() {
    console.log('CARREGANDO TODOS OS CURSOS ...');
    this.cursoService.findAll()
    .subscribe(response => {
      console.log('CHEGOU A RESPOSTA COM SUCESSO!');
      console.log(response);
      this.items = response;
    },
    error => {
      console.log('CHEGOU A RESPOSTA COM ERRO!');
      console.log(error);
    });
  }

  adicionarCurso() {
    this.navCtrl.push('NovoCursoPage');
  }

  visualizarCurso(curso : CursoDTO) {
    this.navCtrl.push('CursoDetailsPage', {curso : curso});
  }

}
