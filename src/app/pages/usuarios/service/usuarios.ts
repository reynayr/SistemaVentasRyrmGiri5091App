import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';
import { UsuariosResponse } from '../../../shared/models/usuario.interface';
import { environment } from '../../../../environments/environment.development';
import { DefaultResponse } from '../../../shared/models/default.interface';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  getUsuarios(): Observable<UsuariosResponse[]> {
    return this.http.get<UsuariosResponse[]>(`${ environment.API_URL }/usuarios`)
      .pipe(catchError( (error) => this.handlerError(error)));
  }

  newUsuarios(usuarios: UsuariosResponse): Observable<DefaultResponse> {
    return this.http.post<DefaultResponse>(`${ environment.API_URL }/usuarios`, usuarios)
      .pipe(catchError( (error) => this.handlerError(error)));
  }

  updateUsuarios(usuarios: UsuariosResponse): Observable<DefaultResponse> {
    return this.http.put<DefaultResponse>(`${ environment.API_URL }/usuarios`, usuarios)
      .pipe(catchError( (error) => this.handlerError(error)));
  }

  deleteUsuario(cveUsuario: number): Observable<DefaultResponse> {
    return this.http.delete<DefaultResponse>(`${ environment.API_URL }/usuarios/${ cveUsuario }`)
      .pipe(catchError( (error) => this.handlerError(error)));
  }

  handlerError(error: any): Observable<never> {
    var errorMessage = "Ocurrió un error";
    if (error.error) {
      errorMessage = `Error: ${ error.error.mensaje }`;
    }

    this.snackBar.open(errorMessage, '', {
      duration: 5 * 1000,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });

    return throwError(() => new Error(errorMessage));
  }

}
