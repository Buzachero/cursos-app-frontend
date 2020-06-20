import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CursoDTO } from "../../models/curso.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CursoService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CursoDTO[]> {
        return this.http.get<CursoDTO[]>(`${API_CONFIG.baseUrl}/cursos/`);
    }

    salvarCurso(novoCurso: CursoDTO) {        
        return this.http.post(
            `${API_CONFIG.baseUrl}/cursos/`,
            novoCurso,
            {
                observe : 'response',
                responseType: 'text'
            }
        );
    }

    excluirCurso(curso_id: string) {
        return this.http.delete(
            `${API_CONFIG.baseUrl}/cursos/id/${curso_id}`
        );
    }
}