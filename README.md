# money-manager-app
This web application will allow users to manage their personal finances by tracking income and expenses, categorizing transactions, and viewing financial summaries.
# Money Manager App (Luxury Theme)

##  Project Overview

The Money Manager App is a web-based application developed using HTML, CSS, and JavaScript (Object-Oriented Programming). The application helps users manage their personal finances by tracking income and expenses, categorizing transactions, and viewing financial summaries.

This project implements CRUD operations, localStorage persistence, filtering, sorting, and form validation while maintaining a responsive luxury-themed user interface.

---

##  Features

* Add Income and Expense Transactions
* Edit Existing Transactions
* Delete Transactions with Confirmation
* Transaction History Table
* Financial Summary (Total Income, Expense, Balance)
* Filter by Category, Sub-Category, Date Range
* Sort by Date and Amount
* Modal Popup Transaction Form
* Form Validation with Error Messages
* Data Persistence using localStorage
* Responsive Luxury UI Design
* OOP-based JavaScript Architecture

---

##  Technologies Used

* HTML5 (Semantic Structure)
* CSS3 (Luxury Theme & Responsive Design)
* JavaScript (ES6 Modules)
* Object-Oriented Programming (OOP)
* Local Storage API

---

##  Folder Structure

money-manager/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
├── app.js
├── ui.js
├── storage.js
└── transaction.js

---

##  OOP Implementation

The project uses the following classes:

### Transaction Class

Represents individual transaction data.

### Storage Class

Handles all localStorage operations:

* Save transactions
* Retrieve transactions
* Update transactions
* Delete transactions

### UI Class

Manages:

* DOM Manipulation
* Rendering Transactions
* Summary Calculations
* Form Validation
* Edit/Delete Handling

### App Controller (app.js)

Handles:

* Event Listeners
* Modal Controls
* Form Submission
* Subcategory Management

---

##  CRUD Operations

### Create

Users can add transactions with:

* Amount
* Date
* Category
* Sub-category
* Description

### Read

Transactions displayed in table with financial summary.

### Update

Users can edit existing transactions using modal form.

### Delete

Transactions removed with confirmation dialog.

---

##  Data Persistence

* Data stored in localStorage
* Stored as JSON objects
* Loaded automatically on page refresh

---

##  Form Validation

* Amount must be numeric and greater than zero
* Date cannot be future date
* Category selection required
* Sub-category required
* Description optional (max 100 characters)
* Error messages displayed near fields
* Invalid fields highlighted with red border

---

##  UI Design

* Luxury dark theme
* Gold accent colors
* Responsive layout
* Modal popup form
* Clean dashboard structure
* Hover effects and smooth transitions

---

##  How to Run Project

1. Download or copy project files
2. Maintain folder structure
3. Open index.html in browser
   OR
4. Use VS Code Live Server extension

---

##  Functional Modules

* Transaction Management
* Summary Calculation
* Filtering & Sorting
* Modal Form Handling
* Data Storage

---

##  Challenges Faced

* Managing ES6 module structure
* Implementing dynamic filters
* Handling form validation
* Maintaining responsive luxury UI
* Synchronizing localStorage with UI

---

##  Key Learnings

* Practical implementation of OOP in JavaScript
* DOM manipulation techniques
* localStorage data handling
* Form validation methods
* Responsive CSS design
* Modular JavaScript architecture

---

##  Conclusion

The Money Manager App successfully implements all required functionalities including CRUD operations, OOP concepts, localStorage persistence, and responsive UI design. The application provides an efficient and user-friendly way to manage personal finances.

---

##  Author

Parilaksh Thakur
B.Tech CSE
Rayat Bahra University
