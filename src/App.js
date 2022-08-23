import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  // inicializamos expenses  array con la lista dummy
  const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = ( expense ) => {
    // agregar cada expense a la lista de expenses.
    // Usar state, porque REACT no actualiza el componente si agrego solo a la lista

    // agregamos el nuevo expense al inicio del array, y luego copiamos el resto
    setExpenses((prevExpenses) => {
       return [expense, ...prevExpenses];
    });
  };

  return (

    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>

  );

}

export default App;
