import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private createHeaders(
    customHeaders?: { [key: string]: string },
    authorization?: boolean
  ): HttpHeaders {
    let headersData: { [key: string]: string } = {
      'Content-Type': 'application/json',
      ...customHeaders,
    };

    if (authorization) {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        headersData['Authorization'] = `Bearer ${authToken}`;
      }
    }

    return new HttpHeaders(headersData);
  }

  get<T>(
    path: string,
    params?: HttpParams,
    customHeaders?: { [key: string]: string },
    authorization?: boolean
  ): Observable<T> {
    return this.http
      .get<T>(`${this.URL}${path}`, {
        headers: this.createHeaders(customHeaders, authorization),
        params: params,
      })
      .pipe(catchError(this.handleError));
  }

  async delete(
    path: string,
    params?: HttpParams,
    customHeaders?: { [key: string]: string },
    authorization?: boolean
  ): Promise<any> {
    return await this.http
      .delete(`${this.URL}${path}`, {
        headers: this.createHeaders(customHeaders, authorization),
        params: params,
      })
      .toPromise();
  }

  post<T>(
    path: string,
    body: T,
    customHeaders?: { [key: string]: string },
    authorization?: boolean
  ): Observable<T> {
    return this.http
      .post<T>(`${this.URL}${path}`, body, {
        headers: this.createHeaders(customHeaders, authorization),
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);

    return throwError(
      () => new Error(error.message || 'Something went wrong!')
    );
  }
}
