import { DynamicModule, Module, Provider } from '@nestjs/common';
import { Cashify } from 'cashify';
import { CASHIFY, CashifyService, CASHIFY_OPTIONS } from './';
import {
  CashifyModuleAsyncOptions, CashifyModuleOptions, CashifyOptionsFactory
} from './interfaces';

@Module({})
export class CashifyModule {

  /**
   * @param options a simple configuration object
   * @returns DynamicModule object
   */
  public static forRoot(options: CashifyModuleOptions): DynamicModule {

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
  public static forRootAsync(optionsAsync: CashifyModuleAsyncOptions): DynamicModule {

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
      providers: [
        ...this.createAsyncProviders(optionsAsync),
        CashifyProvider,
        CashifyService,
        ...(optionsAsync.extraProviders || []),
      ],
    }
  }

  private static createAsyncProviders(optionsAsync: CashifyModuleAsyncOptions): Provider[] {
    if (optionsAsync.useExisting || optionsAsync.useFactory) {
      return [this.createAsyncOptionsProvider(optionsAsync)];
    }
    return [
      this.createAsyncOptionsProvider(optionsAsync),
      {
        provide: optionsAsync.useClass,
        useClass: optionsAsync.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(optionsAsync: CashifyModuleAsyncOptions): Provider {

    /**
    * This is going to be a factory provider and import in the list of providers
    * This provider make the options value available in CashifyProvider. Since it's a provider,
    * it can be injected in CashifyProvider
     */
    if (optionsAsync.useFactory) {
      return {
        provide: CASHIFY_OPTIONS,
        useFactory: optionsAsync.useFactory,
        inject: optionsAsync.inject || []
      };
    }

    /**
     * In consumer module, if we use useClass, the give class may have some dependencies,
     * like ConfigService (and it's module). But they are not available in this module's context.
     * So, we have an 'imports' object and extraProviders in forRootAsync method.
     * Then we can dynamically add them from consumer module. See example in example folder.
     */
    return {
      provide: CASHIFY_OPTIONS,
      useFactory: async (optionsFactory: CashifyOptionsFactory) =>
        optionsFactory.createCashifyOptions(),
      inject: [optionsAsync.useExisting || optionsAsync.useClass],
    };
  }
}