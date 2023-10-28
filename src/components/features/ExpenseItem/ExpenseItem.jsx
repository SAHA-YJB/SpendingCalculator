import React from "react";
import "../ExpenseItem/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ expenses }) => {
  return (
    <>
      {expenses.map((expense) => {
        return (
          <div className="expense-item" key={expense.id}>
            <ExpenseDate expenses={expense} />
            <div className="expense-item__description">
              <h2>{expense.title}</h2>
              <div className="expense-item__price">₩ {expense.amount}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ExpenseItem;
