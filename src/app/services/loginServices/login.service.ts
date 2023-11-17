import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private isAuthenticated: boolean = false;

  // constructor() { }


  // Método para iniciar sesión
  login() {
    this.isAuthenticated = true;
  }

  // Método para cerrar sesión
  logout() {
    this.isAuthenticated = false;
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

}
