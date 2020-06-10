import React, { Component }from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import classes from './OrderSummary.module.css'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[Order summary] Did update')
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li className={classes.OrderItem} key={igKey}>
          <span className={classes.Capitalize}>{igKey}</span>: {this.props.ingredients[igKey]}
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
          <p><strong>£ {this.props.price.toFixed(2)}</strong></p>
          <p>Happy with that?</p>
          <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Go Back</Button>
          <Button btnType="Success" clicked={this.props.purchaseConfirmed}>Checkout</Button>
        </Auxiliary>
    );
  }
}

export default OrderSummary