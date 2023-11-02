import React from "react";
import SingleExpenseItem from "./SingleExpenseItem";

const ExpenseItem = ({ filteredExpenses }) => {
  let expensesContent = (
    <p style={{ marginLeft: "18px", color: "#fff" }}>내용이 없습니다.</p>
  );

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <SingleExpenseItem key={expense.id} expense={expense} />
    ));
  }
  return <>{expensesContent}</>;
};

export default ExpenseItem;
