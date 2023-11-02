import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterChangeHandler={filterChangeHandler}
          filteredYear={filteredYear}
        />
        <ExpenseItem expenses={expenses} />
      </Card>
    </div>
  );
};

export default Expense;
