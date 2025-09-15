import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRateDaily } from '../../../models/exchangerate_daily';

@Component({
  selector: 'exchange-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exchange-history.html',
  styleUrls: ['./exchange-history.scss']
})
export class ExchangeHistoryComponent {
  // Input property to receive daily exchange rate data
  @Input() dailyData!: ExchangeRateDaily;

  get formattedDate(): string {
    return new Date(this.dailyData.date).toLocaleDateString('pt-BR');
  }
  // Determine color based on closeDiff value
  get diffColor(): string {
    return this.dailyData.closeDiff >= 0 ? '#00B060' : '#E50000';
  }

  get trendIcon(): string {
    return this.dailyData.closeDiff >= 0 ? '▲' : '▼';
  }

  formatValue(value: number): string {
    return `R$ ${value.toFixed(4)}`;
  }

  formatDiff(): string {
    return `${this.dailyData.closeDiff.toFixed(2)}%`;
  }
}
