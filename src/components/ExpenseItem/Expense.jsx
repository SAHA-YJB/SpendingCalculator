import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterChangeHandler={filterChangeHandler}
          filteredYear={filteredYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseItem filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expense;
