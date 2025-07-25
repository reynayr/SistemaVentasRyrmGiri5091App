import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  data: any = {};

  constructor(private router: Router,
    private authSvc: AuthService
  ) { }

  navegarLogin() {
    this.router.navigate(['/auth'])
  }

  ngOnInit(): void {
    this.authSvc.tokenData$.subscribe((data: any) => {
      this.data = data;
    });
  }

  onLogout() {
    this.authSvc.logout();
    this.data = null;
  }

}