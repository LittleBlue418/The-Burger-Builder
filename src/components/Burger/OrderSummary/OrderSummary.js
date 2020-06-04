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
      <h3>Your Order</h3>
      <p>So far you have:</p>
      <ul className={classes.OrderList}>
        {ingredientSummary}
      </ul>
      <p>Happy with that?</p>
      <button className={classes.OrderButton}>Checkout</button>
    </Auxiliary>
  )
}

export default OrderSummary