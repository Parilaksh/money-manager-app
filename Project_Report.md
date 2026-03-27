# Money Manager App – Project Report

## 1. Introduction

The Money Manager App is a web-based financial tracking application developed using HTML, CSS, and JavaScript with Object-Oriented Programming (OOP) principles. The purpose of this application is to help users manage their personal finances by recording income and expense transactions, categorizing them, and viewing financial summaries.

The application provides CRUD functionality, data persistence using localStorage, filtering, sorting, and form validation, along with a responsive luxury-themed user interface.

---

## 2. Objectives

* To develop a financial tracking web application
* To implement CRUD operations using JavaScript
* To apply Object-Oriented Programming concepts
* To store and retrieve data using localStorage
* To design a responsive and user-friendly interface
* To implement form validation and error handling

---

## 3. Technologies Used

* HTML5 – Structure of the application
* CSS3 – Styling and responsive design
* JavaScript (ES6) – Application logic
* Object-Oriented Programming – Code organization
* LocalStorage API – Data persistence

---

## 4. Features Implemented

### 4.1 Transaction Management (CRUD)

* Add new income and expense transactions
* Edit existing transactions
* Delete transactions with confirmation
* Display transaction history

### 4.2 Financial Summary

* Total Income calculation
* Total Expense calculation
* Net Balance calculation

### 4.3 Filtering and Sorting

* Filter by category (Income/Expense)
* Filter by sub-category
* Filter by date range
* Sort by date
* Sort by amount

### 4.4 Form Validation

* Amount must be numeric and greater than zero
* Date should not be in future
* Category selection required
* Sub-category selection required
* Description limited to 100 characters
* Error messages displayed near invalid fields

### 4.5 Data Persistence

* Transactions stored in localStorage
* Data retrieved on page reload
* Stored in JSON format

---

## 5. OOP Implementation

The application is structured using Object-Oriented Programming principles.

### 5.1 Transaction Class

Represents a single financial transaction containing:

* id
* amount
* date
* category
* subCategory
* description

### 5.2 Storage Class

Handles localStorage operations:

* Save transactions
* Retrieve transactions
* Update transactions
* Delete transactions

### 5.3 UI Class

Responsible for:

* DOM manipulation
* Rendering transactions
* Updating summary
* Handling form validation
* Editing and deleting transactions

### 5.4 App Controller

Manages:

* Event listeners
* Modal popup behavior
* Form submission
* Category and sub-category logic

---

## 6. User Interface Design

The UI is designed with a luxury dark theme featuring:

* Gold accent colors
* Clean dashboard layout
* Responsive design
* Modal popup form
* Summary cards
* Transaction table
* Hover effects

---

## 7. Folder Structure

money-manager/
│
├── index.html
├── css/
│   └── style.css
└── js/
├── app.js
├── ui.js
├── storage.js
└── transaction.js

---

## 8. Working Flow

1. User clicks "Add Transaction"
2. Modal form opens
3. User enters transaction details
4. Form validation is performed
5. Transaction stored in localStorage
6. UI updates automatically
7. Summary recalculated
8. Transactions displayed in table

---

## 9. Challenges Faced

* Implementing ES6 modules
* Managing dynamic sub-category dropdown
* Synchronizing UI with localStorage
* Designing responsive luxury UI
* Implementing validation logic

---

## 10. Key Learnings

* Practical implementation of OOP in JavaScript
* Modular JavaScript architecture
* DOM manipulation techniques
* localStorage data handling
* Form validation implementation
* Responsive CSS design

---

## 11. Future Enhancements

* Charts for expense visualization
* Export data to CSV
* Monthly reports
* User authentication
* Cloud database integration

---

## 12. Conclusion

The Money Manager App successfully implements all required functionalities including CRUD operations, data persistence, form validation, and responsive UI design. The use of Object-Oriented Programming improves code organization and maintainability. The application provides an efficient solution for managing personal finances.

---

## 13. Author

Parilaksh Thakur
B.Tech Computer Science Engineering
Rayat Bahra University
