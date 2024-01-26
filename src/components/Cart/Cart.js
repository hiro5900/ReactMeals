import React, {useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import Cart_Context from '../../store/cart-context'

const Cart = (props) => {
     const cart_Ctx = useContext(Cart_Context)
     const cartItems = (<ul className={classes['cart-items']}>
          {cart_Ctx.items.map((item) => (
               <li>{item.name} ${item.price} Qty: {item.quantity}</li>
          ))}
     </ul>)

     return (
          <Modal onClose={props.onClose}>
               {cartItems}
               <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.62</span>
               </div>
               <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                    <button className={classes.button}>Order</button>
               </div>
          </Modal>
     )
}

export default Cart;