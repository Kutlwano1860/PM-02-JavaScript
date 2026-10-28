// PM-02: Variables, data types, operators, conditions, functions, arrays and loops.

// const is used for values that will not be reassigned.
const supportTasks = [
  "Check email",
  "Review support tickets",
  "Update ticket status",
  "Attend stand-up",
  "Submit report"
];

// Example variables and data types.
const storeName = "Support Desk"; // string
let ticketsResolved = 12;         // number
const systemAvailable = true;     // boolean

// Display an array using a for...of loop.
const taskList = document.querySelector("#taskList");
for (const task of supportTasks) {
  const item = document.createElement("li");
  item.textContent = task;
  taskList.appendChild(item);
}

// Operators are used to calculate a simple total.
const costPerTicket = 25;
const totalValue = ticketsResolved * costPerTicket;
document.querySelector("#calculation").textContent =
  `${storeName}: ${ticketsResolved} tickets × R${costPerTicket} = R${totalValue}. System available: ${systemAvailable}.`;

// A function checks a ticket's priority using conditions.
function getTicketPriority(category, daysWaiting) {
  if (category === "network" && daysWaiting >= 3) {
    return "High priority — escalate to the network team.";
  } else if (category === "password") {
    return "Password support — follow the password reset process.";
  } else if (daysWaiting >= 5) {
    return "High priority — escalate this ticket to the support lead.";
  } else {
    return "Normal priority — continue with the support process.";
  }
}

// Handle form submission.
document.querySelector("#ticketForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.querySelector("#ticketTitle").value.trim();
  const category = document.querySelector("#category").value;
  const daysWaiting = Number(document.querySelector("#days").value);

  if (!title || !category || daysWaiting < 0 || !Number.isFinite(daysWaiting)) {
    document.querySelector("#result").textContent = "Please enter valid ticket details.";
    return;
  }

  document.querySelector("#result").textContent =
    `Ticket: ${title}. ${getTicketPriority(category, daysWaiting)}`;
});
