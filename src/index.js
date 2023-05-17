const axios = require('axios');

const API_VERSION = '2018-03-22';
const API_BASE_URL = 'https://api.commerce.coinbase.com';

const Coinbase = function (API_KEY) {
  if (!API_KEY)
    return console.error(
      "\n\nERROR: Missing API_KEY! Please use 'Coinbase(API_KEY_HERE)'\n\n"
    );

  const createCharge = async function ({
    title,
    description,
    amount,
    currency,
    metadata,
  }) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/charges`,
        {
          name: title,
          description,
          local_price: {
            amount,
            currency,
          },
          pricing_type: 'fixed_price',
          metadata,
        },
        {
          headers: {
            'X-CC-Api-Key': API_KEY,
            'X-CC-Version': API_VERSION,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      console.error('Erro ao criar a cobrança: ', error.response.data);
    }
  };

  const getCharge = async function (id) {
    try {
      const response = await axios.get(
        `https://api.commerce.coinbase.com/charges/${id}`,
        {
          headers: {
            'X-CC-Api-Key': API_KEY,
            'Content-Type': 'application/json',
            'X-CC-Version': API_VERSION,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('ERROR: Error trying get the order data: ', error);
      throw error;
    }
  };

  const getChargeStatus = async function (id) {
    try {
      const response = await axios.get(
        `https://api.commerce.coinbase.com/charges/${id}`,
        {
          headers: {
            'X-CC-Api-Key': API_KEY,
            'Content-Type': 'application/json',
            'X-CC-Version': API_VERSION,
          },
        }
      );

      const transaction = response.data;
      const status =
        transaction.data.timeline[transaction.data.timeline.length - 1].status;

      return status;
    } catch (error) {
      console.error('ERROR: Error trying get the order data: ', error);
      throw error;
    }
  };

  return { createCharge, getCharge, getChargeStatus };
};

module.exports = Coinbase;
