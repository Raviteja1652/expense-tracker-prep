import React, { useState } from 'react';
import './Expenses.css';
import Card from '../Card/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        // props.onSelectedYear(selectedYear)
    };

    const neededExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onYearChange={yearChangeHandler} />
                <ExpensesChart expenses={neededExpenses} />
                <ExpenseList expenses={neededExpenses} />
            </Card>
        </>
    )
}

export default Expenses;