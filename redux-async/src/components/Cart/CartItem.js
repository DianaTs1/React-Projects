import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, addItemToCart } from '../../store/cart-slice';


const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const cardItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch()

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(id))
  }
  const addItemHandler = () => {
    dispatch(addItemToCart ({
      title,
      quantity,
      price,
      id, 
      total
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
