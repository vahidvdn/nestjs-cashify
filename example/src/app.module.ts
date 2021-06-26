import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CashifyModule } from 'nestjs-cashify';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const rates = {
	GBP: 0.92,
	EUR: 1.00,
	USD: 1.12
};

@Module({
  imports: [
    // CashifyModule.forRoot({base: 'EUR', rates}),
    CashifyModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        base: configService.get<string>('BASE'), rates
      }),
      inject: [ConfigService]
    }),
    // CashifyModule.forRootAsync({
    //   useClass: CashifyConfigService,
    //   import: [ConfigModule],
    //   extraProviders: [ConfigService],
    // })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
