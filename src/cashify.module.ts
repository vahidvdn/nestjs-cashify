import { DynamicModule, Module } from '@nestjs/common';
import { Cashify } from 'cashify';
import { CASHIFY, CashifyService } from './';

@Module({})
export class CashifyModule {
  public static foorRoot(options): DynamicModule {
    const CashifyProvider = {
      provide: CASHIFY,
      useValue: new Cashify(options),
    };
    return {
      module: CashifyModule,
      exports: [CashifyService, CashifyProvider],
      providers: [
        CashifyProvider,
        CashifyService
      ]
    }
  }
}