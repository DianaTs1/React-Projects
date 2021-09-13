import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggle())
  }

  const itemsInCart = useSelector(state => state.cart.totalQuantity);


  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
