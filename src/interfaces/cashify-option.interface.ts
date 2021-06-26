import { Type } from "@nestjs/common";
import { ModuleMetadata, Provider } from "@nestjs/common/interfaces";
import { CashifyOptionsFactory } from "./cashify-module.interface";

/**
 * Interface defining Cashify configuration options.
 *
 * @publicApi
 */
 export interface CashifyModuleOptions {
  /**
   * Base currency
   * @example 'EUR'
   * @type string
   */
  base: string;
  /**
   * Object containing currency rates (for example from an API, such as Open Exchange Rates)
   */
  rates: Record<string, number>;
}

/**
 * Options for dynamically configuring the Cashify module.
 *
 * @see [Async configuration](https://github.com/vahidvdn/nestjs-cashify#forrootasync-with-configuration-and-usefactory)
 *
 * @publicApi
 */
 export interface CashifyModuleAsyncOptions
 extends Pick<ModuleMetadata, 'imports'> {
 /**
  * Injection token resolving to an existing provider. The provider must implement
  * the `CacheOptionsFactory` interface.
  */
 useExisting?: Type<CashifyOptionsFactory>;
 /**
  * Injection token resolving to a class that will be instantiated as a provider.
  * The class must implement the `CacheOptionsFactory` interface.
  */
 useClass?: Type<CashifyOptionsFactory>;
 /**
  * Function returning options (or a Promise resolving to options) to configure the
  * cache module.
  */
 useFactory?: (
   ...args: any[]
 ) => Promise<CashifyModuleOptions> | CashifyModuleOptions;
 /**
  * Dependencies that a Factory may inject.
  */
 inject?: any[];
 /**
  * extraProviders is used when you use useClass
  * in useClass you're using a class to configure the Cashify module
  * Sometime that class has some dependencies like ConfigModule and ConfigService
  * @see [useClass configuration](https://github.com/vahidvdn/nestjs-cashify#forrootasync-with-configuration-and-useclass)
  */
 extraProviders?: Provider[];
}