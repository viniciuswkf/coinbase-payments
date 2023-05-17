const Coinbase = require('./index');

const API_KEY = 'COINBASE_COMMERCE_APIKEY';

const testGetCharge = async function (id) {
  const coinbase = Coinbase(API_KEY);
  const charge = await coinbase.getCharge(id);

  return charge;
};

const testCreateCharge = async function () {
  const coinbase = Coinbase(API_KEY);
  const charge = await coinbase.createCharge({
    title: 'New order',
    description: 'Example order',
    amount: 5,
    currency: 'USD',
    metada: { order_id: 'random123', customer_id: 'random123' },
  });

  /**
   * 
  {
    addresses: {
      polygon: '0xc8d96a6f966245cb250b18ddbdf1b8638827a123',
      pusdc: '0xc8d96a6f966245cb250b18ddbdf1b8638827a123',
      pweth: '0xc8d96a6f966245cb250b18ddbdf1b8638827a123',
      ethereum: '0xc8d96a6f966245cb250b18ddbdf1b8638827a123',
      bitcoincash: 'qp4anqv3pjdkxmr6z34hwqx9u3udfl3fyuaf6zvp0g',
      dogecoin: 'DDHAcyJoSABXCVyWLBuBqso2TKGc7ufGhf',
      litecoin: 'MWRK7pK3Z9JBaNrBNUuNzmutbHHFwF7TPv',
      bitcoin: '3NNvwQMtLGG9Yc5n2JnzSaVbFgr1awF9Es'
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
      'USDC-USD': '1.0',
      'DAI-USD': '0.99995',
      'APE-USD': '3.451',
      'SHIB-USD': '0.000008815',
      'USDT-USD': '0.999925',
      'PMATIC-USD': '0.88575',
      'PUSDC-USD': '1.0',
      'PWETH-USD': '1830.54'
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
      'DOGE-USD': '0.0752',
      'BCH-USD': '118.4',
      'USDC-USD': '1.0',
      'DAI-USD': '0.99995',
      'APE-USD': '3.451',
      'SHIB-USD': '0.000008815',
      'USDT-USD': '0.999925',
      'PMATIC-USD': '0.88575',
      'PUSDC-USD': '1.0',
      'PWETH-USD': '1830.54'
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
      usdc: { amount: '5.000000', currency: 'USDC' },
      dai: { amount: '5.000250015000000000', currency: 'DAI' },
      apecoin: { amount: '1.448855404230657780', currency: 'APE' },
      shibainu: { amount: '567214.974475325000000000', currency: 'SHIB' },
      tether: { amount: '5.000375', currency: 'USDT' },
      bitcoincash: { amount: '0.04222973', currency: 'BCH' },
      dogecoin: { amount: '66.48936170', currency: 'DOGE' },
      litecoin: { amount: '0.05272037', currency: 'LTC' },
      bitcoin: { amount: '0.00018285', currency: 'BTC' }
    },
    pricing_type: 'fixed_price',
    pwcb_only: false,
    resource: 'charge',
    support_email: 'yourmail@hotmail.com',
    timeline: [ { status: 'NEW', time: '2023-05-17T19:26:19Z' } ],
    utxo: false
  }
   */

  console.log(charge);
};

async function main() {
  const charge = testCreateCharge();
  const chargeData = testGetCharge(charge.id);

  console.log(chargeData);
}

main();
