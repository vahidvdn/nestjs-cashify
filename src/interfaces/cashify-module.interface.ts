/**
 * Interface describing a `CashifyOptionsFactory`.  Providers supplying configuration
 * options for the Cashify module must implement this interface.
 *
 * @see [Async configuration](https://github.com/vahidvdn/nestjs-cashify#forrootasync-with-configuration-and-useclass)
 *
 * @publicApi
 */
export interface CashifyOptionsFactory {
  createCashifyOptions();
}
