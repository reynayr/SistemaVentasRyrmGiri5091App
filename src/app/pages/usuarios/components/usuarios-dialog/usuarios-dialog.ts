import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

enum Action {
  EDIT = 'edit',
  NEW = 'nwe'
}

@Component({
  selector: 'app-usuarios-dialog',
  standalone: false,
  templateUrl: './usuarios-dialog.html',
  styleUrl: './usuarios-dialog.scss'
})

export class UsuariosDialog implements OnInit{

  actionTODO = Action.NEW;
  titleButton = "Guardar";
  usuarioForm = this.fb.group({
    cveUsuario: [''],
    nombre: ['', [Validators.required]],
    
  })

}
