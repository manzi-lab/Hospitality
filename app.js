const content = document.getElementById("content");

// Show Landing Page
function showLanding() {
  content.innerHTML = `
    <div>
      <h2>Welcome to HOSPITALITY</h2>
      <p>Empowering your business to deliver better client experiences. Simplify CRM and appointment management for healthcare, hotels, and gyms.</p>
      <img src="https://via.placeholder.com/1000x400" alt="Hospitality Solution">
      <p><strong>Join hundreds of businesses simplifying their operations with HOSPITALITY.</strong></p>
    </div>
  `;
}

// Dummy data for clients and appointments
let clients = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

let appointments = [
  { id: 1, clientName: "John Doe", date: "2025-01-25", time: "10:00 AM" },
  { id: 2, clientName: "Jane Smith", date: "2025-01-26", time: "2:00 PM" },
];

// Show Dashboard
function showDashboard() {
  content.innerHTML = `
    <h2>Dashboard</h2>
    <div class="card">
      <img src="https://via.placeholder.com/600x300" alt="Dashboard Overview">
      <p>Total Clients: ${clients.length}</p>
      <p>Upcoming Appointments: ${appointments.length}</p>
    </div>
  `;
}

// Show Clients
function showClients() {
  content.innerHTML = `<h2>Clients</h2>`;
  clients.forEach(client => {
    content.innerHTML += `
      <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="Client Profile">
        <p>Name: ${client.name}</p>
        <p>Email: ${client.email}</p>
      </div>
    `;
  });
}

// Show Appointments
function showAppointments() {
  content.innerHTML = `<h2>Appointments</h2>`;
  appointments.forEach(appointment => {
    content.innerHTML += `
      <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="Appointment Details">
        <p>Client: ${appointment.clientName}</p>
        <p>Date: ${appointment.date}</p>
        <p>Time: ${appointment.time}</p>
      </div>
    `;
  });
}

// Show Pricing
function showPricing() {
  content.innerHTML = `
    <h2>Pricing Plans</h2>
    <div class="pricing-plan">
      <h3>Basic Plan</h3>
      <p>$10/month</p>
      <button onclick="startCheckout('Basic Plan', 10)">Choose Basic</button>
    </div>
    <div class="pricing-plan">
      <h3>Pro Plan</h3>
      <p>$30/month</p>
      <button onclick="startCheckout('Pro Plan', 30)">Choose Pro</button>
    </div>
  `;
}

// Start Checkout
function startCheckout(planName, price) {
  alert(`You have selected the ${planName} for $${price}/month. Proceeding to payment...`);
}

// Initialize Landing Page
showLanding();
