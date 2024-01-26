import React, {useContext} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import Cart_Context from '../../../store/cart-context'

const MealItemForm = (props) => {
     const cart_context = useContext(Cart_Context)
     const addItemToCart = (event) => {
          event.preventDefault();
          const quantity = document.getElementById('amount_' + props.id).value
          cart_context.addItem({...props.item, quantity: quantity})
     }
     return (
          <form className={classes.form}>
               {console.log(cart_context.items)}
               <Input
                    label='Amount'
                    input={{
                         id: 'amount_' + props.id,
                         type: 'number',
                         min: '1',
                         max: '5',
                         step: '1',
                         defaultValue: '1'
                    }}
               />
               <button onClick={addItemToCart}>+ Add</button>
          </form>
     )
}

export default MealItemForm;