import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import AddNewExpense from "./components/NewExpense/AddNewExpense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // inicializamos expenses  array con la lista dummy
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const [showFormNewExpense, setShowFormNewExpense] = useState(false);

  /**Como hice para la tarea */
  // expenses filter by year selected
  //const [filterExpenses, setFilterExpense] = useState(expenses);

  const addExpenseHandler = (expense) => {
    // agregar cada expense a la lista de expenses.
    // Usar state, porque REACT no actualiza el componente si agrego solo a la lista

    // Agregamos el nuevo expense al inicio del array, y luego copiamos el resto
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    // Una vez que se presione "Add expense", mostrar el formulario de vuelta
    setShowFormNewExpense(false);
  };

  /**Como hice para la tarea */
  // Aqui obtenemos el año seleccionado desde el componenente ExpenseFilter
  /*const yearSelectedHandler = ( newYear ) => {

    // filtramos la lista completa por el año
    const filterList = expenses.filter( (expense) => {
      return expense.date.getFullYear().toString() === newYear
    });
    // esta lista es la que se le envia al componente Expenses para dibujar
    setFilterExpense(filterList);    
  }*/

  // Agregar asi
  // <Expenses expenses={filterExpenses} onYearSelected={yearSelectedHandler} />

   /** Tenemos el valor si se presiono el boton "Add New Expense"
   * Si es true, mostrar el formulario
   * Si es false, mostrar el boton "Add New Expense"
   */
  const showFormHandler = (clicked) => {
    setShowFormNewExpense(clicked);
  };

  /** Tenemos el valor si se presiono el boton "Cancel"
   * Si es true, mostrar el boton "Add New Expense"
   * Si es false, mostrar el formulario.
   */
  const showAddNewExpenseButtonHandler = (cancelStatus) => {
    const formStatus = !cancelStatus;
    setShowFormNewExpense(formStatus);
  };

  console.log(showFormNewExpense);

  return (
    <div>
      {!showFormNewExpense && (
        <AddNewExpense onClickAddNewExpense={showFormHandler} />
      )}

      {showFormNewExpense && (
        <NewExpense
          onAddExpense={addExpenseHandler}
          onCancelButtonStatus={showAddNewExpenseButtonHandler}
        />
      )}

      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
