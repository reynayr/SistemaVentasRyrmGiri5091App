import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing-module';
import { Usuarios } from './usuarios';
import { UsuariosDialog } from './components/usuarios-dialog/usuarios-dialog';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [
    Usuarios,
    UsuariosDialog
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule
  ]
})
export class UsuariosModule { }
