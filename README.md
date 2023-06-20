![alt nestjs](https://img.shields.io/badge/Powered%20by-nestjs-ea2845)
![alt license](https://img.shields.io/github/license/vahidvdn/nestjs-cashify)
![alt npm-download](https://img.shields.io/npm/dt/nestjs-cashify)
![alt npm-version](https://img.shields.io/npm/v/nestjs-cashify)


## Description

Currency conversion module for nestjs framework.

## Installation

```
npm install nestjs-cashify
```

## Usage

### Basic Usage

Import `CashifyModule` in the main module with configuration

```TS
import { CashifyModule } from 'nestjs-cashify';

const rates = {
  GBP: 0.92,
  EUR: 1.00,
  USD: 1.12
};

@Module({
  imports: [CashifyModule.forRoot({base: 'EUR', rates})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### forRootAsync with configuration and useFactory

```TS
@Module({
  imports: [
    CashifyModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        base: configService.get<string>('BASE'), rates
      }),
      inject: [ConfigService]
    })
  ]
})
export class AppModule {}
```

### forRootAsync with configuration and useClass

```TS
@Module({
  imports: [
    CashifyModule.forRootAsync({
      useClass: CashifyConfigService,
      import: [ConfigModule],
      extraProviders: [ConfigService],
    })
  ]
})
export class AppModule {}
```
And for `CashifyConfigService` we have the following:

```TS
import { CashifyOptionsFactory } from 'nestjs-cashify';

@Injectable()
export class CashifyConfigService implements CashifyOptionsFactory {
  constructor(private configService: ConfigService) {}

  createCashifyOptions() {
    const rates = {
      GBP: 0.92,
      EUR: 1.00,
      USD: 1.12
    };
    return {
      base: this.configService.get<string>('BASE'),
      rates
    };
  }
}
```

## Convert

In order to convert currencies to each other in controllers or services, we have two approaches:

### Method 1: service method

```TS
import { CashifyService } from 'nestjs-cashify';

constructor(private cashifyService: CashifyService) {
  const result = this.cashifyService.convert(10, {from: 'EUR', to: 'GBP'});
  console.log(result);
}
```

### Method 2: injecting instance of cashify class

Note: Since this module is based on nodejs [cashify](https://github.com/xxczaki/cashify) library, in case there can be more methods added to the core library, you can inject the instance and use it as following:

```TS
import { Cashify } from 'cashify';
import { CASHIFY } from 'nestjs-cashify';

constructor(@Inject(CASHIFY) private cashify: Cashify) {
  const result2 = this.cashify.convert(10, {from: 'EUR', to: 'GBP'});
  console.log(result2);
}
```

### Parsing

Cashify supports parsing, so you can pass a `string` to the `amount` argument and the `from` and/or `to` currency will be automatically detected:

```TS
// Basic parsing
this.cashifyService.convert('€10 EUR', {to: 'GBP'});

// Full parsing
this.cashifyService.convert('10 EUR to GBP');
```

## Development

In the root of package:

Install the dependencies

```
npm install
```

To run example folder:

```
cd example
npm install
npm run start:dev
```

## Run tests

In the root of the package, run the following:

```
npm run test
```

## Support

Any support is welcome. You can give the project a star, if you liked it ⭐

## Contribute

Feel free to contribute.

## License

MIT