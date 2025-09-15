import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateService } from '../../services/exchangerate_services';
import { ExchangeRateDaily } from '../../models/exchangerate_daily';
import { ExchangeHistoryComponent } from './exchange-history/exchange-history';

@Component({
  selector: 'app-exchange-rate',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExchangeHistoryComponent
  ],
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent {
  // Component state variables
  currencyCode: string = '';
  exchangeRate: number | null = null;
  timestamp: string = '';
  history: ExchangeRateDaily[] = [];
  loading: boolean = false;
  error: string = '';
  historyError: string = '';
  showHistory: boolean = false;
  hasSubmitted: boolean = false;

  // Inject the ExchangeRateService
  constructor(private exchangeRateService: ExchangeRateService) {}
  // Method to fetch the current exchange rate
  fetchExchangeRate(): void {
    this.hasSubmitted = true;
    const code = this.currencyCode.trim().toUpperCase();
    // If input is empty, reset state and return
    if (!code) {
      this.resetState();
      return;
    }
    // Set loading state and clear previous errors
    this.loading = true;
    this.error = '';
    this.exchangeRate = null;
    this.timestamp = '';
    this.history = [];
    this.hasSubmitted = true;

    this.exchangeRateService.fetchExchangeRate(code).subscribe({
      next: (rate) => {
        this.exchangeRate = rate;
        this.timestamp = new Date().toLocaleString();
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }
  // Method to toggle and fetch exchange rate history
  fetchHistory(): void {
    this.showHistory = !this.showHistory;

    if (this.showHistory && this.history.length === 0) {
      const code = this.currencyCode.trim().toUpperCase();
      this.exchangeRateService.fetchExchangeRateHistory(code).subscribe({
        next: (data) => {
          this.history = data;
          this.historyError = '';
        },
        error: (err) => {
          this.historyError = err.message;
        }
      });
    }
  }
  // Method to reset component state
  private resetState(): void {
    this.exchangeRate = null;
    this.timestamp = '';
    this.history = [];
    this.showHistory = false;
    this.error = '';
    this.historyError = '';
    this.hasSubmitted = false;
  }
}
