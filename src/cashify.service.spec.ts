import { Test } from '@nestjs/testing';
import { Cashify } from 'cashify';
import { CASHIFY, CashifyService } from './';


describe('CashifyService', () => {

  let cashifyService:CashifyService;
  const options = {
    base: 'EUR',
    rates: {
      GBP: 0.92,
      EUR: 1,
      USD: 1.12
    }
  };  

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        providers: [
          CashifyService,
          {
            provide: CASHIFY,
            useValue: new Cashify(options),
          }
        ],
      }).compile();

    cashifyService = moduleRef.get<CashifyService>(CashifyService);
  });

  it('should be defined', () => {    
    expect(cashifyService).toBeDefined();
  })
  
  it('should convert properly', () => {
    let converted = cashifyService.convert(12, {from: 'USD', to: 'GBP'});
    expect(converted).toEqual(9.857142857142856);
  })
  
  it('should accept string amount', () => {
    let converted = cashifyService.convert('10', {from: 'EUR', to: 'GBP'});
    expect(converted).toEqual(9.2);
  })
  
  it('should do basic parsing', () => {
    let converted = cashifyService.convert('€10 EUR', {to: 'GBP'});
    expect(converted).toEqual(9.2);
  })
  
  it('should do full parsing', () => {
    let converted = cashifyService.convert('€10 EUR to GBP');
    expect(converted).toEqual(9.2);
  })
})