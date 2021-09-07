import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [userInfoIsSubmitting, setUserInfoIsSubmitting] = useState(false);
  const [userInfoDidSubmit, setUserInfoDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const submitOrderHandler = async (userInfo) => {
    setUserInfoIsSubmitting(true);
    await fetch("https://food-order-app-24012-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        userInfo: userInfo,
        orderedItems: cartCtx.items
      })
    });
    setUserInfoIsSubmitting(false);
    setUserInfoDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const showCheckoutHandler = () => {
    setShowCheckOut(true)
  }

  const modalAcctions = 
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button 
                      onClick={showCheckoutHandler} 
                      className={classes.button}
                      >Order</button>}
      </div>

  const cartModalContent = 
  <React.Fragment>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!showCheckOut && modalAcctions}
      {showCheckOut && <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler}/>}
  </React.Fragment>

  const isSubittingContent = <p>Your order is submitting...</p>
  const didSubmitContent = <React.Fragment>
    <p>Your order is on it's way now!</p>
    <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
    </div>
  </React.Fragment>

  return (
    <Modal onClose={props.onClose}>
      {!userInfoIsSubmitting && !userInfoDidSubmit && cartModalContent}
      {userInfoIsSubmitting && isSubittingContent}
      {!userInfoIsSubmitting && userInfoDidSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
