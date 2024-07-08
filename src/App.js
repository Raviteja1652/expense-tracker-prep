import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  {
    id: 'e1',
    title: 'Headphones',
    amount: 2000,
    date: new Date(2024, 6, 7)
  },
  {
    id: 'e2',
    title: 'Phone EMI',
    amount: 3600,
    date: new Date(2024, 6, 4)
  },
  {
    id: 'e3',
    title: 'Utensils',
    amount: 1500,
    date: new Date(2024, 6, 2)
  },
  {
    id: 'e4',
    title: 'Clothes',
    amount: 4000,
    date: new Date(2024, 6, 23)
  }
]

const expensesContent = expenses.map((expense) => (
  <ExpenseItem 
    title = {expense.title}
    amount = {expense.amount}
    date = {expense.date}
  />
))

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <h4>TESTING</h4>
      {expensesContent}
    </div>
  );
}

export default App;
