// Personal Budget Tracker

// Variables
let expenses = [];
let totalExpense = 0;
const currency = "₹";
var appName = "Personal Budget Tracker";


// Expense Constructor Function
function createExpense(description, amount, date) {
    return {
        description,
        amount,
        date
    };
}


// Callback Function
function showMessage(message) {
    console.log(message);
}


// Add Expense using Rest + Spread
function addExpense(callback, ...newExpenses) {
    expenses = [...expenses, ...newExpenses];
    callback("Expense Added Successfully");
}


// Display All Expenses
function displayExpenses() {

    console.log("All Expenses:");

    expenses.forEach((expense, index) => {

        // Destructuring
        const { description, amount, date } = expense;

        console.log(
            `${index + 1}. ${description} - ${currency}${amount} - ${date}`
        );
    });
}


// Arrow Function for Total
const calculateTotal = () => {
    totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    console.log("Total Expense:", currency + totalExpense);
};


// Map Method
function showDescriptions() {
    const list = expenses.map(expense => expense.description);
    console.log("Descriptions:", list);
}


// Filter Method
function filterAbove20() {
    const filtered = expenses.filter(expense => expense.amount > 20);
    console.log("Expenses Above 20:", filtered);
}


// Promise for Initial Data
function fetchInitialExpenses() {
    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                createExpense("Food", 100, "2026-04-29"),
                createExpense("Travel", 50, "2026-04-29"),
                createExpense("Coffee", 20, "2026-04-29")
            ]);

        }, 2000);
    });
}


// Closure
function expenseCounter() {

    let count = 0;

    return function () {
        count = expenses.length;
        console.log("Total Items:", count);
    };
}

const countItems = expenseCounter();


// Async Await
async function startApp() {

    console.log(appName);
    console.log("Loading Expenses...");

    const data = await fetchInitialExpenses();

    expenses = data;

    displayExpenses();
    calculateTotal();
    showDescriptions();
    filterAbove20();
    countItems();

    addExpense(
        showMessage,
        createExpense("Movie", 200, "2026-04-29"),
        createExpense("Snacks", 80, "2026-04-29")
    );

    displayExpenses();
    calculateTotal();
    countItems();
}


// Run App
startApp();