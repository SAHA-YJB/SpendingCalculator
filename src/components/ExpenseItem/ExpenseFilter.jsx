import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ filterChangeHandler, filteredYear }) => {
  const dropDownChangeHandler = (e) => {
    filterChangeHandler(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>연도를 선택하세요</label>
        <select value={filteredYear} onChange={dropDownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
