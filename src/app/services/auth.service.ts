import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  User,
  getIdToken,
  signOut,
} from 'firebase/auth';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { app as fireApp } from 'src/conf/firebase';
import { RequestService } from './request.service';

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

  constructor(protected route: Router, private http: RequestService) {
    this.listenToAuthState();
  }

  private async setNewToken(user: User) {
    const token = await getIdToken(user!);
    localStorage.setItem('authToken', token);
    return token;
  }

  private listenToAuthState() {
    const auth = getAuth(fireApp);
    onAuthStateChanged(auth, async (user) => {
      this.setNewToken(user!);
      this.userSubject.next(user ? user : null);
      this.authInitializedSubject.next(true);
    });
  }

  // Login with Google
  async login() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(fireApp);
    const { user } = await signInWithPopup(auth, provider);
    if (user) {
      const { displayName, uid, phoneNumber, photoURL, email } = user;
      this.setNewToken(user!);
      this.http
        .post('/client/new-user', {
          name: displayName,
          id: uid,
          phoneNumber,
          photoURL,
          email,
        })
        .subscribe({
          next: (response) => {
            console.log('Response received:', response);
          },
          error: (err) => {
            console.error('Error occurred:', err);
          },
        });
      this.userSubject.next(user);
    }
  }

  // Logout method
  async logout(): Promise<void> {
    const auth = getAuth(fireApp);
    await signOut(auth);
    this.route.navigateByUrl('/login');
    this.userSubject.next(null);
  }

  // Check if the user is logged in
  isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }
}
