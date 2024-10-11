import { Injectable } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { app } from 'src/conf/firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  app: FirebaseApp;
  constructor() {
    this.app = app;
  }

  login() {
    
  }

  logout() {}

  isLogin() {}

  getAuthState() {}
}
