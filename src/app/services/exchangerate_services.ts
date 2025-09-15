import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ExchangeRateDaily } from '../models/exchangerate_daily';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private _apiKey = 'RVZG0GHEV2KORLNA';
  private _baseUrl = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open';

  constructor(private http: HttpClient) {}

  fetchExchangeRate(fromSymbol: string): Observable<number> {
    const code = fromSymbol.trim().toUpperCase();
    const url = `${this._baseUrl}/currentExchangeRate?apiKey=${this._apiKey}&from_symbol=${code}&to_symbol=BRL`;

    return this.http.get<any>(url).pipe(
      map(response => {
        const rate = parseFloat(response.exchangeRate);
        if (isNaN(rate)) {
          throw new Error('Invalid exchange rate value.');
        }
        return rate;
      }),
      catchError(error => {
        return throwError(() => new Error('Error fetching exchange rate. Please try again later.'));
      })
    );
  }

  fetchExchangeRateHistory(fromSymbol: string): Observable<ExchangeRateDaily[]> {
    const code = fromSymbol.trim().toUpperCase();
    const url = `${this._baseUrl}/dailyExchangeRate?apiKey=${this._apiKey}&from_symbol=${code}&to_symbol=BRL&outputsize=30`;

    return this.http.get<any>(url).pipe(
      map(response => {
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error('Invalid history data format.');
        }

        return response.data.map(ExchangeRateDaily.fromJson);
      }),
      catchError(error => {
        let errorMessage = 'Error fetching exchange rate history. Please try again later.';
        if (error.status === 400) {
          errorMessage = 'Currency history not found. Please check the currency code and try again.';
        } else if (error.status === 0) {
          errorMessage = 'Unable to connect to the server. Please check your internet connection.';
        }
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
