import { Injectable } from '@angular/core';
import { TUser } from '../types/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, first, map, Observable, of } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: TUser[] = [];
  private jsonUrl = 'assets/json/user.json';

  constructor(private http: HttpClient, private request: RequestService) {}

  getAllUsers(): Observable<TUser[]> {
    return this.request
      .get<TUser[]>('/client/all-clients', undefined, {}, true)
      .pipe(
        catchError((error) => {
          console.error('Error fetching users:', error);
          return of([]);
        })
      );
  }

  async deleteUser(id: string) {
    try {
      await this.request.delete('/client/del-client/' + id);
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  }

  getSingleUser(id: string): Observable<TUser | undefined> {
    return this.http.get<TUser[]>(this.jsonUrl).pipe(
      map((users) => users.find((user: TUser) => user.id === id)),
      catchError((error) => {
        console.error('Error fetching user:', error);
        return of(undefined);
      })
    );
  }
}
