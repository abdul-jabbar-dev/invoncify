import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(protected request: RequestService) {}

  getMyInvoices(): Observable<any> {
    return this.request.get('/invoice/my-invoices', undefined, {}, true).pipe(
      catchError((error) => {
        console.error('Error fetching invoices:', error);
        return throwError(
          () => new Error('Failed to fetch invoices. Please try again.')
        );
      })
    );
  }

  getAInvoice(id: string): Observable<any> {
    return this.request
      .get('/invoice/my-invoice/' + id, undefined, {}, true)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to fetch invoice'));
        })
      );
  }
}
