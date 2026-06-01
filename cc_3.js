// STEP 1: Create Customer Records

const customers = [
    {
        name: "Alice Johnson",
        email: "alice@example.com",
        purchases: ["Laptop", "Mouse"]
    },
    {
        name: "Bob Smith",
        email: "bob@example.com",
        purchases: ["Keyboard"]
    },
    {
        name: "Charlie Brown",
        email: "charlie@example.com",
        purchases: ["Monitor", "HDMI Cable", "Desk Mat"]
    }
];

console.log("Initial Customers:", customers);

// STEP 2: Add and Remove Data
// Add a new customer to the end of the array
customers.push({
    name: "Diana Prince",
    email: "diana@example.com",
    purchases: ["Shield", "Lasso"]
});

// Remove the first customer (Alice) from the array
customers.shift();


// STEP 3: Update Customer Info

// Since Alice was removed, Bob is now at position [0] and Charlie is at position [1]
// Let's update Charlie's email (position 1)
customers[1].email = "charlie.brown@gmail.com";

// Add a new purchase to Bob's (position 0) purchases array
customers[0].purchases.push("Headphones");

