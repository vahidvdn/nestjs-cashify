---
sidebar_position: 2
---

# Convert Currencies

## Basic Convert

In order to convert currencies to each other in controllers or services, we have two approaches:

### Method 1: service method

```ts
import { CashifyService } from 'nestjs-cashify';

constructor(private cashifyService: CashifyService) {
  const result = this.cashifyService.convert(10, {from: 'EUR', to: 'GBP'});
  console.log(result);
}
```

### Method 2: injecting instance of cashify class

Note: Since this module is based on nodejs cashify library, in case there can be more methods added to the core library, you can inject the instance and use it as following:

```ts
import { Cashify } from 'cashify';
import { CASHIFY } from 'nestjs-cashify';

constructor(@Inject(CASHIFY) private cashify: Cashify) {
  const result2 = this.cashify.convert(10, {from: 'EUR', to: 'GBP'});
  console.log(result2);
}
```
