import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };
        props.onSaveExpenseData(expenseData)
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;