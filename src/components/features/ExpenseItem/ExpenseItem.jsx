import React from "react";
import "../ExpenseItem/ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date().toLocaleDateString("ko-KR");
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
