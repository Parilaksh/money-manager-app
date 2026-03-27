// Storage Class
// Responsible for saving and retrieving data from localStorage

export default class Storage {

    // Key used in localStorage
    static key = "money_manager_transactions";

    // Get all transactions from localStorage
    static getTransactions() {
        try {
            const data = localStorage.getItem(this.key);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return [];
        }
    }

    // Save transactions to localStorage
    static saveTransactions(transactions) {
        try {
            localStorage.setItem(this.key, JSON.stringify(transactions));
        } catch (error) {
            console.error("Error saving to localStorage", error);
        }
    }

    // Add new transaction
    static addTransaction(transaction) {
        const transactions = this.getTransactions();
        transactions.push(transaction);
        this.saveTransactions(transactions);
    }

    // Update existing transaction
    static updateTransaction(updatedTransaction) {
        const transactions = this.getTransactions().map(transaction =>
            transaction.id === updatedTransaction.id ? updatedTransaction : transaction
        );
        this.saveTransactions(transactions);
    }

    // Delete transaction
    static deleteTransaction(id) {
        const transactions = this.getTransactions().filter(
            transaction => transaction.id !== id
        );
        this.saveTransactions(transactions);
    }

}