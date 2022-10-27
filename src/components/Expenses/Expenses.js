import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const yearSelectedHandler = (year) => {
    setFilterYear(year);
  };

  /**Como hizo el profe para filtrar */
  // SetFilterYear ya hace que se recargue el componente
  // Por esto no necesitamos crear un estado para manejar expenses
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onYearSelected={yearSelectedHandler}
      ></ExpenseFilter>
      <ExpenseChart expenses={filterExpenses} />
      <ExpenseList expenses={filterExpenses} />
    </Card>
  );
};

export default Expenses;

