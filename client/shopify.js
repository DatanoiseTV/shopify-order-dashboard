const axios = require('axios');
const moment = require('moment');
require('dotenv').config();

const { SHOPIFY_ACCESS_TOKEN, SHOPIFY_STORE_NAME } = process.env;
const shopifyBaseUrl = `https://${SHOPIFY_STORE_NAME}.myshopify.com/admin/api/2021-04`;

async function fetchOpenOrders() {
  try {
    const response = await axios.get(`${shopifyBaseUrl}/orders.json?status=open`, {
      headers: {
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
      }
    });
    return response.data.orders.map(order => ({
      orderNumber: order.order_number,
      product: order.line_items.map(item => item.name).join(',<br /> '),
      country: order.shipping_address.country,
      orderDate: order.created_at,
      humanReadableAge: moment(order.created_at).fromNow()
    }));
  } catch (error) {
    console.error('Error fetching orders from Shopify:', error);
    return [];
  }
}

module.exports = { fetchOpenOrders };

