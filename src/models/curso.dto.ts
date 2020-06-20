import { CategoriaDTO } from "./categoria.dto";

export interface CursoDTO {
    id : string;
    descricao : string;
    dataInicio : string;
    dataTermino : string;
    quantidadeAlunos : number;
    categoria : CategoriaDTO;
}