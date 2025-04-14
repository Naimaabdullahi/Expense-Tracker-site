import React, { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Date.now() },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="main-content">
        <div className="form-section">
          <h2>Add Expense</h2>
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="table-section">
          <h2>Your Expenses</h2>
          <SearchBar setSearchTerm={setSearchTerm} />
          <ExpenseTable
            expenses={filteredExpenses}
            onDeleteExpense={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;