import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(protected auth: AuthService) {}
  async loginWithGoogle() {
    console.log(await this.auth.login());
  }
}
