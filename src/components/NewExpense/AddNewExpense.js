import React, { useState } from "react";
import "./AddNewExpense.css";

const AddNewExpense = (props) => {
  const [clicked, setClicked] = useState(true);

  const clickAddNewExpenseHandler = () => {
    setClicked(true);
    props.onClickAddNewExpense(clicked);
  };

  return (
    <div className="new-expense">
      <button className="new-expense__actions" onClick={clickAddNewExpenseHandler}>Add New Expense</button>
    </div>
  );
};

export default AddNewExpense;
