// ==========================================
// STEP 2: Create Customer Records (Initial State)
// ==========================================
const customers = [
    {
        name: "Alice Johnson",
        email: "alice.j@example.com",
        purchases: ["Laptop Case", "Wireless Mouse"]
    },
    {
        name: "Bob Smith",
        email: "bob.smith@example.com",
        purchases: ["Mechanical Keyboard"]
    },
    {
        name: "Charlie Davis",
        email: "charlie.d@example.com",
        purchases: ["USB-C Hub", "HDMI Cable", "Desk Pad"]
    }
];

// ==========================================
// STEP 3: Add and Remove Data (Queue Management)
// ==========================================

// Add a new client record to the end of the data array
customers.push({
    name: "Diana Prince",
    email: "diana.p@example.com",
    purchases: ["Ergonomic Chair"]
});

// Remove the oldest record from the front of the queue
const removedCustomer = customers.shift(); 


// ==========================================
// STEP 4: Update Customer Info (Targeted Mutation)
// ==========================================

// Safely locate and update the email property of an existing customer
const targetCustomer = customers.find(c => c.name === "Bob Smith");
if (targetCustomer) {
    targetCustomer.email = "robert.smith@enterprise.com";
}

// Append a new item to a specific customer's purchase array
const charlieRecord = customers.find(c => c.name === "Charlie Davis");
if (charlieRecord) {
    charlieRecord.purchases.push("Monitor Stand");
}


// ==========================================
// STEP 5: Display Customer Information (Data Reporting)
// ==========================================
console.log("=========================================");
console.log("        ACTIVE CLIENT METRICS REPORT      ");
console.log("=========================================");

customers.forEach(({ name, email, purchases }, index) => {
    // Determine purchase count defensively, accounting for empty lists
    const totalPurchases = purchases ? purchases.length : 0;
    
    console.log(`Client #${index + 1}: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📦 Lifetime Purchases: ${totalPurchases} item(s)`);
    console.log("-----------------------------------------");
});
