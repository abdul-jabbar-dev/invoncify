import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(protected auth: AuthService, protected router: Router) {}
  async loginWithGoogle() {
    await this.auth.login();

    this.router.navigate(['/']); // Redirect after successful login
  }
}
