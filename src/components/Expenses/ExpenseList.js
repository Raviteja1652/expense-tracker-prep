import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    const expensesContent = props.expenses.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
        />
    ))

    if (props.expenses.length === 0) {
        return (
            <h2 className='expenses_info'>No Expenses Found</h2>
        )
    } else if (props.expenses.length === 1) {
        return (
            <>
                <h3 className='expenses_info'>Only 1 Expense Found. Add More?</h3>
                <ul className='expenses_list'>{expensesContent}</ul>
            </>
        )
    } else {
        return (
            <ul className='expenses_list'>
                {expensesContent}
            </ul>
        )
    }
};

export default ExpenseList;