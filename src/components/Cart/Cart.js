import React, {useContext, useEffect} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import Cart_Context from '../../store/cart-context'

const Cart = (props) => {
     const cart_Ctx = useContext(Cart_Context)
     useEffect(() => {
          console.log(cart_Ctx.items.quantity)
     }, [cart_Ctx.items.quantity])

     const cartItems = (<ul className={classes['cart-items']}>
          {cart_Ctx.items.map((item) => (
               <div className={classes.cartItemContainer} key={Math.random()}>
                    <div className={classes.cartItemMeal}>
                         <h3>{item.name}</h3>
                         <span className={classes.cartItemPrice}>${item.price}</span> 
                         <span className={classes.cartItemQty}>x {item.quantity}</span> 
                    </div>
                    <div className={classes.cartItemButtons}>
                         <button onClick={() => item.quantity--}>-</button>
                         <button onClick={() => item.quantity++}>+</button>
                    </div>
               </div>
          ))}
     </ul>)

     let totalAmount = 0
     cart_Ctx.items.forEach((item) => {
          totalAmount += item.price * item.quantity
     })
     totalAmount = totalAmount.toFixed(2)
     console.log(totalAmount)

     return (
          <Modal onClose={props.onClose}>
               {cartItems}
               <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>${totalAmount}</span>
               </div>
               <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                    <button className={classes.button}>Order</button>
               </div>
          </Modal>
     )
}

export default Cart;