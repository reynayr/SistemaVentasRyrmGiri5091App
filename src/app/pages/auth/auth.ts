import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BaseForm } from '../../shared/utils/base.form';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth implements OnInit, OnDestroy {
  hide = true;

  private destroy$ = new Subject<any>();
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder,
    public baseForm: BaseForm,
    public authService: AuthService,
    private router: Router) {
    console.log("init constructor")
  }

  ngOnInit(): void {
    console.log("init OnInit")
  }

  onSubmit() {

    // Veridficar que el formulario sea correcto
    if (this.loginForm.invalid) return;

    // Si todo es correcto obtener el usuario y contraseña para enviarlos
    const form = this.loginForm.value;

    this.authService.login(form).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        // Ejemplo: guardar token
        localStorage.setItem('token', response.token);

        // Aquí podrías redirigir si tienes Router:
        this.router.navigate(['/user']);
        // this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error en login:', err);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
}