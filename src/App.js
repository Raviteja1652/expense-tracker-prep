import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: 'e1',
    title: 'Headphones',
    amount: 2000,
    date: new Date(2023, 6, 7)
  },
  {
    id: 'e2',
    title: 'Phone EMI',
    amount: 3600,
    date: new Date(2023, 6, 4)
  },
  {
    id: 'e3',
    title: 'Utensils',
    amount: 1500,
    date: new Date(2023, 6, 2)
  },
  {
    id: 'e4',
    title: 'Clothes',
    amount: 4000,
    date: new Date(2023, 6, 23)
  }
]

function App() {
  const [updatedExpenses, setUpdatedExpenses] = useState(expenses);

  // Tried this but a problem with it is when we click add expense UI wont update right away.
  // for that we have to trigger setFilteredExpenses in onSaveExpenseDataHandler as well.
  // we have to create another state for selected Year and filter using that in App.js itself.
  // can do that but code gets little complicated so went for easier approach. 

  // const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  // const selectedYearHandler = (selectedYear) => {
  //   const neededExpenses = updatedExpenses.filter((expense) => {
  //     return expense.date.getFullYear().toString() === selectedYear
  //   });
  //   setFilteredExpenses(neededExpenses);
  // }

  // return React.createElement('div', {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {expenses: expenses})
  // )

  const onSaveExpenseDataHandler = (expenseData) => {
    setUpdatedExpenses((prev) => {
      return [ expenseData, ...prev ]
    })
    console.log(expenseData)
  };

  return (
    <div>
      <NewExpense onSaveExpenseData={onSaveExpenseDataHandler} />
      <Expenses expenses={updatedExpenses} />
    </div>
  );
}

export default App;
