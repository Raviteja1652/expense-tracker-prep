import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';

const Expenses = (props) => {
    const expensesContent = props.expenses.map((expense) => (
        <ExpenseItem 
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
        />
      ))
    return (
        <Card className='expenses'>{expensesContent}</Card>
    )
}

export default Expenses;