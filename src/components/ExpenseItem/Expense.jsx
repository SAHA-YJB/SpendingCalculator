import React from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";

const Expense = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses} />
    </Card>
  );
};

export default Expense;
