import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from './service/usuarios';
import { UsuariosResponse } from '../../shared/models/usuario.interface';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.scss'
})

export class Usuarios implements OnInit{

  displayedColumns: string[] = ["nombre", "apellidos", "correo", "fechaRegistro"];
  usuarios = new MatTableDataSource();

  constructor(private usuariosSvc: UsuariosService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.usuariosSvc.getUsuarios()
      .subscribe( (usuarios: UsuariosResponse[]) => {
        this.usuarios.data = usuarios;
      });
  }

  onOpenModal(usuario: any = {}) {  }

  onDelete(cveUsuario: number) {  }

}
