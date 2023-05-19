# Coinbase Payments

🔵🔥 Unofficial Coinbase Commerce JS Client | Receive BTC, ETH, LTC, DOGE and others | The simplest way to Receive Crypto payments on your Website!

## Install

Add "coinbase-payments" to your project:

```bash
  npm install coinbase-payments
```

or

```bash
  yarn add coinbase-payments
```

## Usage

- Create account on https://commerce.coinbase.com and get API Key on "Account Settings".

- Creating new charge:

```javascript
const Coinbase = require('coinbase-payments');
const coinbase = Coinbase('COINBASE_COMMERCE_KEY');
...
    const charge = await coinbase.createCharge({
        title: 'New order',
        description: 'Example order',
        amount: 5,
        currency: 'USD',
        metadata: { order_id: 'random123', customer_id: 'random123' },
    });
    console.log(charge);
```

- Get charge status:

```javascript
const Coinbase = require('coinbase-payments');
const coinbase = Coinbase('COINBASE_COMMERCE_KEY');
...
    const status = await coinbase.getChargeStatus(id);
    console.log(status);
      // "NEW" = Waiting payment
      // "PENDING" = Payment received, confirming...
      // "COMPLETE" = Completed / Confirmed
      // "FAILED" = Expired/Failed payment
```

- Get charge details:

```javascript
const Coinbase = require('coinbase-payments');
const coinbase = Coinbase('COINBASE_COMMERCE_KEY');
...
    const charge = await coinbase.getCharge(id);
    console.log(charge);

```

## Charge Example (Object)

```javascript
  {
    addresses: {
      polygon: '0xc8d96a6f966245cb250b18ddbdf1b8638827a123',
      ethereum: '0xc8d96a6f966245cb250b18ddbdf1b8638827a123',
      litecoin: 'MWRK7pK3Z9JBaNrBNUuNzmutbHHFwF7TPv',
      bitcoin: '3NNvwQMtLGG9Yc5n2JnzSaVbFgr1awF9Es',
      ...
    },
    brand_color: '#122332',
    brand_logo_url: '',
    code: 'V93JF0CF',
    coinbase_managed_merchant: false,
    created_at: '2023-05-17T19:26:18Z',
    description: 'Example order',
    exchange_rates: {
      'ETH-USD': '1830.54',
      'BTC-USD': '27344.205',
      'LTC-USD': '94.84',
      'DOGE-USD': '0.0752',
      'BCH-USD': '118.4',
      ... more
    },
    expires_at: '2023-05-17T20:26:18Z',
    fee_rate: 0.01,
    fees_settled: true,
    hosted_url: 'https://commerce.coinbase.com/charges/V93JF0CF',
    id: '8192b4a8-cd34-4f9e-a075-53ca2a0f5c53',
    local_exchange_rates: {
      'ETH-USD': '1830.54',
      'BTC-USD': '27344.205',
      'LTC-USD': '94.84',
      ... more
    },
    logo_url: '',
    metadata: {},
    name: 'New order',
    offchain_eligible: false,
    organization_name: '',
    payment_threshold: {
      overpayment_absolute_threshold: { amount: '5.00', currency: 'USD' },
      overpayment_relative_threshold: '0.005',
      underpayment_absolute_threshold: { amount: '5.00', currency: 'USD' },
      underpayment_relative_threshold: '0.005'
    },
    payments: [],
    pricing: {
      local: { amount: '5.00', currency: 'USD' },
      polygon: { amount: '5.644934000', currency: 'PMATIC' },
      pusdc: { amount: '5.000000', currency: 'PUSDC' },
      pweth: { amount: '0.002731434440110568', currency: 'PWETH' },
      ethereum: { amount: '0.002731000', currency: 'ETH' },
      ... more
    },
    pricing_type: 'fixed_price',
    pwcb_only: false,
    resource: 'charge',
    support_email: 'yourmail@hotmail.com',
    timeline: [ { status: 'NEW', time: '2023-05-17T19:26:19Z' } ],
    utxo: false
  }
```

## Reference

- [Coinbase Commerce API](https://www.coinbase.com/cloud/products/commerce-api)

## Buy me a coffee ☕
If you liked it and want this project to stay active, buy me a coffee.

- BTC: 1KmZyRhAVcAMH8vJKcGPNp5QpCJ3HNZgzv
- ETH: 0x42eF534C4172b02351b90A4184bedCD8bcfE8eE6
- LTC: LbendKmgoYy8hgMMZMWtxNNNjeJh5CYo7Q
