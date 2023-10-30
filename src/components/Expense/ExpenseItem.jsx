import React from "react";
import "./ExpenseItem.css";
import SingleExpenseItem from "./SingleExpenseItem";
const ExpenseItem = ({ expenses }) => {
  return (
    <>
      {expenses.map((expense) => (
        <SingleExpenseItem key={expense.id} expense={expense} />
      ))}
    </>
  );
};

export default ExpenseItem;
