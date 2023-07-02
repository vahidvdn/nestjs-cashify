---
sidebar_position: 3
---

# Parsing

## Parsing Strings

Cashify supports parsing, so you can pass a string to the amount argument and the from and/or to currency will be automatically detected:

### Basic parsing

```ts
this.cashifyService.convert('€10 EUR', {to: 'GBP'});
```

### Full parsing

```ts
this.cashifyService.convert('10 EUR to GBP');
```