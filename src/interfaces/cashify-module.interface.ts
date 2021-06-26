/**
 * Interface describing a `CashifyOptionsFactory`.  Providers supplying configuration
 * options for the Cashify module must implement this interface.
 *
 * @see [Async configuration](https://docs.nestjs.com/techniques/caching#async-configuration)
 *
 * @publicApi
 */
 export interface CashifyOptionsFactory {
    createCashifyOptions();
  }