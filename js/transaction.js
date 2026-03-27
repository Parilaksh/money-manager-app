// Transaction Class
// This class represents a single income/expense entry

export default class Transaction {

    // Constructor initializes transaction object
    constructor(id, amount, date, category, subCategory, description) {
        this.id = id;                       // unique identifier
        this.amount = amount;               // transaction amount
        this.date = date;                   // transaction date
        this.category = category;           // Income or Expense
        this.subCategory = subCategory;     // Salary, Food, etc.
        this.description = description;     // optional description
    }

    // Method to check if transaction is income
    isIncome() {
        return this.category === "Income";
    }

    // Method to check if transaction is expense
    isExpense() {
        return this.category === "Expense";
    }

    // Method to return formatted amount
    getFormattedAmount() {
        return `₹${this.amount}`;
    }

}