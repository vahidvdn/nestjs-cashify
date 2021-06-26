import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
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