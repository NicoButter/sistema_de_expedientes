import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginServices/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (private router: Router, private logService: LoginService ){}


  logout() {
    this.logService.logout();
    this.router.navigate(['']);
  }

}
