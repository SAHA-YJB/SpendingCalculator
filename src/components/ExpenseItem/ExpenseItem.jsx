import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../common/Card";

const ExpenseItem = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <Card className="expense-item" key={expense.id}>
            <ExpenseDate expenses={expense} />
            <div className="expense-item__description">
              <h2>{expense.title}</h2>
              <div className="expense-item__price">₩ {expense.amount}</div>
            </div>
          </Card>
        );
      })}
    </Card>
  );
};

export default ExpenseItem;
