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
    //props.onYearSelected(year);
  };

  /**Como hizo el profe para filtrar */
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  
  if( expensesContent.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onYearSelected={yearSelectedHandler}
      ></ExpenseFilter>
      {expensesContent}
    </Card>
  );
};

export default Expenses;

/**Como hice yo */
/*{props.expenses.map((expense) => (
  <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
))}*/

/**
 * {filterExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
 */
