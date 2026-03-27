import UI from "./ui.js";
import Storage from "./storage.js";
import Transaction from "./transaction.js";

// Modal Elements
const modal = document.getElementById("transactionModal");
const addBtn = document.getElementById("addTransactionBtn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("transactionForm");

// Sub categories
const incomeCategories = ["Salary", "Allowances", "Bonus", "Petty Cash"];
const expenseCategories = ["Rent", "Food", "Shopping", "Entertainment"];


// Open Modal
addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    UI.clearForm();
});

// Close outside modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        UI.clearForm();
    }
});

// Load sub categories
document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
        const subCategory = document.getElementById("subCategory");
        subCategory.innerHTML = `<option value="">Select</option>`;

        const list = e.target.value === "Income" ? incomeCategories : expenseCategories;

        list.forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            subCategory.appendChild(option);
        });
    });
});

// Submit form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!UI.validateForm()) return;

    const id = document.getElementById("transactionId").value || Date.now().toString();
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const category = document.querySelector('input[name="category"]:checked').value;
    const subCategory = document.getElementById("subCategory").value;
    const description = document.getElementById("description").value;

    const transaction = new Transaction(
        id,
        amount,
        date,
        category,
        subCategory,
        description
    );

    if (document.getElementById("transactionId").value) {
        Storage.updateTransaction(transaction);
    } else {
        Storage.addTransaction(transaction);
    }

    UI.displayTransactions();
    UI.clearForm();
    modal.style.display = "none";
});

// Edit & Delete
document.getElementById("transactionTable").addEventListener("click", (e) => {

    const id = e.target.dataset.id;
    const transactions = Storage.getTransactions();
    const transaction = transactions.find(t => t.id === id);

    if (e.target.classList.contains("delete-btn")) {
        UI.deleteTransaction(id);
    }

    if (e.target.classList.contains("edit-btn")) {
        modal.style.display = "flex";
        UI.fillForm(transaction);
    }

});

// Load transactions on page load
document.addEventListener("DOMContentLoaded", () => {
    UI.displayTransactions();

    // Auto fill today's date
    document.getElementById("date").value =
        new Date().toISOString().split("T")[0];
});