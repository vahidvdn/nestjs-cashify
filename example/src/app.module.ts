import { Module } from '@nestjs/common';
import { CashifyModule } from 'nestjs-cashify';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const rates = {
	GBP: 0.92,
	EUR: 1.00,
	USD: 1.12
};

@Module({
  imports: [CashifyModule.foorRoot({base: 'EUR', rates})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
