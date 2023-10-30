import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const inputChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      ...input,
      date: new Date(input.date),
    };
    onSaveExpenseData(expenseData);
    setInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>사용처</label>
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={inputChangeHandler}
            placeholder="물건을 입력해주세요."
          />
        </div>
        <div className="new-expense__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={input.amount}
            onChange={inputChangeHandler}
            placeholder="금액을 입력해주세요."
          />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            name="date"
            value={input.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
