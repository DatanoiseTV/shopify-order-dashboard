import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fetchOpenOrders } from './shopify.js';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to fetch orders
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await fetchOpenOrders();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error.message); // Log only error message
    res.status(500).send('Error fetching orders');
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

