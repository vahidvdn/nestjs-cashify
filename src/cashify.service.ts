import { Inject, Injectable } from '@nestjs/common';
import { Cashify } from 'cashify';
import { CASHIFY } from './';

const DEFAULT_CURRENCY_SYMBOLS = {
  GBP: '£',
  EUR: '€',
  USD: '$',
};

@Injectable()
export class CashifyService {
  constructor(@Inject(CASHIFY) private readonly cashify: Cashify) {}

  public convert(amount, options?) {
    return this.cashify.convert(amount, options);
  }


  public convertWithSymbol(amount: number | string,
    from: string, to: string): string {
    const converted = this.convert(amount, {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
    });

    const symbol = DEFAULT_CURRENCY_SYMBOLS[to.toUpperCase() as keyof typeof DEFAULT_CURRENCY_SYMBOLS];
    return symbol
      ? `${symbol}${Number(converted).toFixed(2)}`
      : `${to.toUpperCase()} ${converted}`;
  }
}