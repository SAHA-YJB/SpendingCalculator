import React, { useState } from "react";
import Expense from "./components/ExpenseItem/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const expenses = [
  {
    id: "e1",
    title: "휴지",
    amount: formatNumber(9000),
    date: new Date(),
  },
  {
    id: "e2",
    title: "TV",
    amount: formatNumber(80000),
    date: new Date(),
  },
  {
    id: "e3",
    title: "닭 가슴살",
    amount: formatNumber(10000),
    date: new Date(),
  },
  {
    id: "e4",
    title: "책상",
    amount: formatNumber(450000),
    date: new Date(),
  },
];
const App = () => {
  const [expensesState, setExpensesState] = useState(expenses);

  const addExpenseHandler = (expense) => {
    return setExpensesState([expense, ...expensesState]);
  };
  return (
    <>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expense expenses={expensesState} />
    </>
  );
};

export default App;
