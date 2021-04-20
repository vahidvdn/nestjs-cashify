import { DynamicModule, Module } from '@nestjs/common';
import { Cashify } from 'cashify';
import { CASHIFY, CashifyService, CASHIFY_OPTIONS } from './';

@Module({})
export class CashifyModule {
  public static forRoot(options): DynamicModule {
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
  public static forRootAsync(optionsAsync): DynamicModule {
    const CashifyOptionProvider = {
      provide: CASHIFY_OPTIONS,
      useFactory: optionsAsync.useFactory,
      inject: optionsAsync.inject || []
    };
    const CashifyProvider = {
      provide: CASHIFY,
      useFactory: (options) => new Cashify(options),
      inject: [CASHIFY_OPTIONS],
    };
    
    return {
      module: CashifyModule,
      imports: optionsAsync.imports,
      exports: [CashifyService, CashifyProvider],
      providers: [
        CashifyProvider,
        CashifyOptionProvider,
        CashifyService
      ]
    }
  }
}