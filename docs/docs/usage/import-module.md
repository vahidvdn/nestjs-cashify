---
sidebar_position: 1
---

# Import Module

First you need to import the module in the `AppModule` (or alternatively in a feature module)

## Basic Usage: Import and Configure

Import the module and configure as following. You need to specify the base currency and rates.

```ts title="app.module.ts"
import { CashifyModule } from 'nestjs-cashify';

const rates = {
  GBP: 0.92,
  EUR: 1.00,
  USD: 1.12
};

@Module({
  imports: [CashifyModule.forRoot({ base: 'EUR', rates })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```


## Async Configuration

You can configure your module in an async way. For this, there are some options available: `useFactory` and `useClass`. Let's see.

### forRootAsync with useFactory

In order to configure with `useFactory`, use the following import:

```ts title="app.module.ts"
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

### forRootAsync with useClass

In order to configure with `useClass`, use the following import:

```ts title="app.module.ts"
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

And for CashifyConfigService we have the following:

```ts
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