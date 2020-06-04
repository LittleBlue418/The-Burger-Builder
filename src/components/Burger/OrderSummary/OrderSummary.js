import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import classes from './OrderSummary.module.css'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li className={classes.OrderItem} key={igKey}>
          <span className={classes.Capitalize}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      )
    })

  return (
    <Auxiliary>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul className={classes.OrderList}>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  )
}

export default OrderSummary