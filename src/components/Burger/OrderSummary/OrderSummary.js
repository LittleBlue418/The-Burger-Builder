import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button'

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
      <p><strong>£ {props.price.toFixed(2)}</strong></p>
      <p>Happy with that?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Go Back</Button>
      <Button btnType="Success" clicked={props.purchaseConfirmed}>Checkout</Button>
    </Auxiliary>
  )
}

export default OrderSummary