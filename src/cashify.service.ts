import { Inject, Injectable } from '@nestjs/common';
import { Cashify } from 'cashify';
import { CASHIFY } from './';

@Injectable()
export class CashifyService {
  constructor(@Inject(CASHIFY) private readonly cashify: Cashify) {}

  public convert(amount, options?) {
    return this.cashify.convert(amount, options);
  }
}