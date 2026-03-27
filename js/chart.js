export default class ChartManager {

    static chart;

    static render(transactions) {

        const expenseData = {};

        // Prepare category-wise expense data
        transactions
            .filter(t => t.category === "Expense")
            .forEach(t => {
                expenseData[t.subCategory] =
                    (expenseData[t.subCategory] || 0) + Number(t.amount);
            });

        const labels = Object.keys(expenseData);
        const data = Object.values(expenseData);

        const ctx = document.getElementById("expenseChart");

        // Destroy old chart before creating new one
        if (this.chart) {
            this.chart.destroy();
        }

        // Create Pie Chart
        this.chart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        "#d4af37",  // gold
                        "#2ecc71",
                        "#3498db",
                        "#e74c3c",
                        "#9b59b6",
                        "#f39c12"
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    padding: 10
                },
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            color: "#ffffff",
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }
}