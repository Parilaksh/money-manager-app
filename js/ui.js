import Storage from "./storage.js";
import Transaction from "./transaction.js";
import ChartManager from "./chart.js";

export default class UI {

    // Load transactions on page load
    static displayTransactions() {
        const transactions = Storage.getTransactions();
        const table = document.getElementById("transactionTable");
        table.innerHTML = "";

        transactions.forEach(transaction => {
            this.addTransactionToTable(transaction);
        });

        this.updateSummary();
    }

    // Add row to table
    static addTransactionToTable(transaction) {
        const table = document.getElementById("transactionTable");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.category}</td>
            <td>${transaction.subCategory}</td>
            <td>${transaction.description || ""}</td>
            <td>₹${transaction.amount}</td>
            <td>
                <button class="edit-btn" data-id="${transaction.id}">Edit</button>
                <button class="delete-btn" data-id="${transaction.id}">Delete</button>
            </td>
        `;

        table.appendChild(row);
    }

    // Update summary section
    static updateSummary() {
        const transactions = Storage.getTransactions();

        let income = 0;
        let expense = 0;

        transactions.forEach(t => {
            if (t.category === "Income") {
                income += Number(t.amount);
            } else {
                expense += Number(t.amount);
            }
        });

        document.getElementById("totalIncome").textContent = `₹${income}`;
        document.getElementById("totalExpense").textContent = `₹${expense}`;
        document.getElementById("netBalance").textContent = `₹${income - expense}`;

        ChartManager.render(transactions);
    }

    // Clear form
    static clearForm() {
        document.getElementById("transactionForm").reset();
        document.getElementById("transactionId").value = "";
    }

    // Delete transaction
    static deleteTransaction(id) {
        if (confirm("Are you sure you want to delete this transaction?")) {
            Storage.deleteTransaction(id);
            this.displayTransactions();
        }
    }

    // Fill form for editing
    static fillForm(transaction) {
        document.getElementById("transactionId").value = transaction.id;
        document.getElementById("amount").value = transaction.amount;
        document.getElementById("date").value = transaction.date;
        document.querySelector(`input[name="category"][value="${transaction.category}"]`).checked = true;
        document.getElementById("subCategory").value = transaction.subCategory;
        document.getElementById("description").value = transaction.description;
    }

    // Validation
    static validateForm() {

        let isValid = true;

        const amount = document.getElementById("amount");
        const date = document.getElementById("date");
        const category = document.querySelector('input[name="category"]:checked');
        const subCategory = document.getElementById("subCategory");

        document.querySelectorAll(".error").forEach(e => e.textContent = "");

        // Amount validation
        if (!amount.value || amount.value <= 0) {
            document.getElementById("amountError").textContent = "Enter valid amount";
            amount.classList.add("error-border");
            isValid = false;
        } else {
            amount.classList.remove("error-border");
        }

        // Date validation
        const today = new Date().toISOString().split("T")[0];
        if (!date.value || date.value > today) {
            document.getElementById("dateError").textContent = "Invalid date";
            date.classList.add("error-border");
            isValid = false;
        } else {
            date.classList.remove("error-border");
        }

        // Category validation
        if (!category) {
            document.getElementById("categoryError").textContent = "Select category";
            isValid = false;
        }

        // Subcategory validation
        if (!subCategory.value) {
            document.getElementById("subCategoryError").textContent = "Select sub category";
            subCategory.classList.add("error-border");
            isValid = false;
        } else {
            subCategory.classList.remove("error-border");
        }

        return isValid;
    }

}