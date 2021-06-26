import { DynamicModule, Module, Provider } from '@nestjs/common';
import { Cashify } from 'cashify';
import { CASHIFY, CashifyService, CASHIFY_OPTIONS } from './';
import { CashifyOptionsFactory } from './interfaces/cashify-module.interface';

@Module({})
export class CashifyModule {

  /**
   * @param options a simple configuration object
   * @returns DynamicModule object
   */
  public static forRoot(options): DynamicModule {

    /**
    * To have access to the Cashify's instance by CASHIFY token injection
    * The reason we export it too, is that we can have direct access in consumer module,
    * so if there is a new method added in future for core module by it's author,
    * consumer module can have access to it
     */
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
  
  /**
   * @param optionsAsync this is not a simple object of main options
   * this is an async configuration with useFactory passed from consumer module
   * @returns DynamicModule object
   */
  public static forRootAsync(optionsAsync): DynamicModule {

    /**
    * This is going to be a factory provider and import in the list of providers
    * This provider make the options value available in CashifyProvider. Since it's a provider,
    * it can be injected in CashifyProvider
     */
    // const CashifyOptionProvider = {
    //   provide: CASHIFY_OPTIONS,
    //   useFactory: optionsAsync.useFactory,
    //   inject: optionsAsync.inject || []
    // };

    /**
    * This is our main provider that is accessible within the service
    * The same one in forRoot method (but resolve the options in an async way)
     */
    const CashifyProvider =  {
      provide: CASHIFY,
      useFactory: (options) => new Cashify(options),
      inject: [CASHIFY_OPTIONS],
    };
    
    return {
      module: CashifyModule,
      imports: optionsAsync.imports,
      exports: [CashifyService, CashifyProvider],
      // providers: [
      //   CashifyProvider,
      //   CashifyOptionProvider,
      //   CashifyService
      // ],
      providers: [
        ...this.createAsyncProviders(optionsAsync),
        CashifyProvider,
        CashifyService,
        ...(optionsAsync.extraProviders || []),
      ],
    }
  }

  private static createAsyncProviders(options): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(optionsAsync): Provider {
    if (optionsAsync.useFactory) {
      return {
        provide: CASHIFY_OPTIONS,
        useFactory: optionsAsync.useFactory,
        inject: optionsAsync.inject || []
      };
    }
    return {
      provide: CASHIFY_OPTIONS,
      useFactory: async (optionsFactory: CashifyOptionsFactory) =>
        optionsFactory.createCashifyOptions(),
      inject: [optionsAsync.useExisting || optionsAsync.useClass],
    };
  }
}