import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ( props ) => {
  const [cancelStatus, setCancelStatus] = useState(true);

  // quiero saber el valor de expenseData
  const saveExpenseDataHandler = ( enteredExpenseData ) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  }

  /** Enviar el valor del click de cancel App */
  const clickedCancelHandler = (cancelButtonStatus) => {
      setCancelStatus(cancelButtonStatus);
      props.onCancelButtonStatus(cancelStatus);
     // console.log("from new expense",cancelStatus );
  }


  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickCancelButton={clickedCancelHandler}/>
    </div>
  );
};

export default NewExpense;
