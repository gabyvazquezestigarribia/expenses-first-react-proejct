import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2021');

  const yearSelectedHandler = (year) => {
    console.log("Desde Expenses");
    console.log(year);
    setFilterYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onYearSelected={yearSelectedHandler}></ExpenseFilter>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
        Card
      />
    </Card>
  );
};

export default Expenses;
