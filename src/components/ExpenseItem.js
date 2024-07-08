import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <div>
                {props.date.toISOString()}
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h3 className="expense-item__price">{props.amount}/-</h3>
            </div>
        </div>
    )
}

export default ExpenseItem;