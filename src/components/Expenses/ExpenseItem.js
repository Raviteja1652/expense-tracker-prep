import Card from '../Card/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()

    return (
        <li>
            <Card className="expense-item">
                <div className='expense-date'>
                    <div className='expense-date__month'>{month}</div>
                    <div className='expense-date__day'>{day}</div>
                    <div className='expense-date__year'>{year}</div>
                </div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <h3 className="expense-item__price">{props.amount}/-</h3>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;