import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  User,
  signOut,
} from 'firebase/auth';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { app as fireApp } from 'src/conf/firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable(); // Expose user as observable

  private authInitializedSubject: ReplaySubject<boolean> =
    new ReplaySubject<boolean>(1);
  public isAuthInitialized$: Observable<boolean> =
    this.authInitializedSubject.asObservable();

  constructor(protected route: Router) {
    this.listenToAuthState();
  }

  // Listen to Firebase auth state and emit when initialized
  private listenToAuthState() {
    const auth = getAuth(fireApp);
    onAuthStateChanged(auth, (user) => {
      this.userSubject.next(user ? user : null); // Update user observable
      this.authInitializedSubject.next(true); // Firebase auth is initialized
    });
  }

  // Login with Google
  async login(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(fireApp);
    const { user } = await signInWithPopup(auth, provider);
    this.userSubject.next(user); // Update user after successful login
  }

  // Logout method
  async logout(): Promise<void> {
    const auth = getAuth(fireApp);
    await signOut(auth);
    this.route.navigateByUrl('/login');
    this.userSubject.next(null); // Clear user on logout
  }

  // Check if the user is logged in
  isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }
}
