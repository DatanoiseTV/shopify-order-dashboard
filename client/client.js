import iso3166 from 'iso-3166-1';

async function fetchOrders() {
  document.getElementById('spinner').style.display = 'block'; // Show spinner
  try {
    const response = await fetch('/api/orders');
    const orders = await response.json();
    document.getElementById('spinner').style.display = 'none'; // Hide spinner
    return orders;
  } catch (error) {
    console.error('Error fetching orders:', error.message); // Log only error message
    document.getElementById('spinner').style.display = 'none'; // Hide spinner on error
  }
}

function getFlagIcon(countryName) {
  const country = iso3166.whereCountry(countryName);
  if (country) {
    return `<span class="flag-icon flag-icon-${country.alpha2.toLowerCase()}"></span>`;
  }
  return '';
}

function renderOrders(orders) {
  const tbody = document.querySelector('#ordersTable tbody');
  tbody.innerHTML = '';

  orders.forEach(order => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${order.orderNumber}</td>
      <td>${order.product}</td>
      <td>${getFlagIcon(order.country)} ${order.country}</td>
      <td>${new Date(order.orderDate).toLocaleString()}</td>
      <td>${order.humanReadableAge}</td>
    `;
    tbody.appendChild(tr);
  });
}

async function init() {
  const orders = await fetchOrders();
  if (orders) renderOrders(orders);
}

function startCountdown(interval) {
  let countdown = interval / 1000; // Convert to seconds
  const countdownElement = document.getElementById('countdown');
  countdownElement.textContent = `Next update in ${countdown} seconds`;

  const countdownInterval = setInterval(() => {
    countdownElement.textContent = `Next update in ${countdown} seconds`;
    countdown -= 1;
    if (countdown < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const refreshInterval = 60000; // 1 minute
  init();
  setInterval(() => {
    init();
    startCountdown(refreshInterval);
  }, refreshInterval);
  startCountdown(refreshInterval);
});

