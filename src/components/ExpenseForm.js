import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      setError("Amount must be a positive number.");
      return;
    }
    const newExpense = {
      ...formData,
      amount: parseFloat(formData.amount),
    };
    addExpense(newExpense);
    setFormData({ description: "", amount: "", category: "" });
    setError("");
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;