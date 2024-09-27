import { Injectable } from '@angular/core';
import { TUser } from '../types/user.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: TUser[] = [];
  private jsonUrl = 'assets/json/user.json';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<TUser[]> {
    return this.http.get<TUser[]>(this.jsonUrl).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); 
      })
    );
  }

  getSingleUser(id: string): Observable<TUser | undefined> {
    return this.http.get<TUser[]>(this.jsonUrl).pipe(
      map(users => users.find((user: TUser) => user.id === id)),
      catchError(error => {
        console.error('Error fetching user:', error);
        return of(undefined);  
      })
    );
  }
}