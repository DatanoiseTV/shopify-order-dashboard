
# Shopify Orders Dashboard

This project is a Shopify orders dashboard that displays open orders, including order number, products to be delivered and the country.

## Features

- Displays open orders from a Shopify store
- Shows order number, products, and country

## Prerequisites

- Node.js and npm installed
- Shopify API access token and store name

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/DatanoiseTV/shopify-order-dashboard.git
   cd shopify-order-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```plaintext
   SHOPIFY_ACCESS_TOKEN=your_shopify_access_token
   SHOPIFY_STORE_NAME=your_store_name
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser and go to `http://localhost:3000`

## Project Structure

- `client/`: Contains client-side code
  - `client.js`: Main JavaScript file for the client
  - `index.html`: HTML file for the client
  - `style.css`: CSS file for the client
- `server/`: Contains server-side code
  - `index.js`: Main server file
  - `shopify.js`: Module for interacting with the Shopify API
- `.env`: Environment variables file (not included in the repository)
- `webpack.config.js`: Webpack configuration file
- `package.json`: Project metadata and scripts
- `README.md`: Project documentation

## Environment Variables

The project requires the following environment variables:

- `SHOPIFY_ACCESS_TOKEN`: Your Shopify API access token
- `SHOPIFY_STORE_NAME`: Your Shopify store name

## Development

To develop the project, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and go to `http://localhost:3000`

## Deployment

To deploy the project, follow these steps:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `server/public` directory to your preferred hosting service.

## Contributing

Feel free to open issues or submit pull requests with improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
