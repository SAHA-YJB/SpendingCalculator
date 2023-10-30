import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../common/Card";

const SingleExpenseItem = ({ expense }) => {
  const [title, setTitle] = useState(expense.title);

  const editTitleHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item" key={expense.id}>
      <ExpenseDate expenses={expense} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₩ {expense.amount}</div>
      </div>
      <button onClick={editTitleHandler}>ooo</button>
    </Card>
  );
};

export default SingleExpenseItem;
