import { Component } from '@angular/core';
import { LoginService } from './services/loginServices/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  title = 'sistema_de_expedientes';

  constructor(public loginService: LoginService) {}

  get isLoggedIn(): boolean {
    return this.loginService.isAuthenticatedUser();
  }

}
