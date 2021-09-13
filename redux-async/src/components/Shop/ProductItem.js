import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart-slice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();
  const itemsSelector = useSelector(state => state.cart.items)

  const addItemHandler = () => {
    dispatch(addItemToCart(
      {
        id: id,
        price: price,
        title: title,

      }
    ))
    console.log(itemsSelector);
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
