import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const yearSelectedHandler = (year) => {
    setFilterYear(year);

    /**Como hice para la tarea */
    props.onYearSelected(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onYearSelected={yearSelectedHandler}
      ></ExpenseFilter>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
