import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private router: Router, private logService: LoginService) {}

  get isLoggedIn(): boolean {
    return this.logService.isAuthenticatedUser();
  }

  login() {
    this.logService.login();
    this.router.navigate(['/home']);
  }

  logout() {
    this.logService.logout();
    this.router.navigate(['/login']);
  }
}
