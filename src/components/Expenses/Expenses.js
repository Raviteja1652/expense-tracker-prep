import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }


    const expensesContent = props.expenses.map((expense) => (
        <ExpenseItem 
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
        />
      ))
    return (
        <>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onYearChange={yearChangeHandler} />
                {expensesContent}
            </Card>
        </>
    )
}

export default Expenses;