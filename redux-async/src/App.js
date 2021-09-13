// Sending data by Action Creator 

import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notifocations';
import { useSelector, useDispatch } from 'react-redux';
import {sendCartData} from "./store/cart-slice";
import {fetchCartData} from "./store/cart-slice";


let isInitial = true;

function App() {
  const cart = useSelector(store => store.cart);
  const uiSelector = useSelector(state => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)

  useEffect(()=>{
    dispatch(fetchCartData())
  },[]);

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return
    };

    if (cart.changed) {
      dispatch(sendCartData(cart));
    };

  },[cart, dispatch])

  return (
    <>
    {notification && <Notification 
      status={notification.status} 
      message={notification.message} 
      title={notification.title}/>}
    <Layout>
      {uiSelector && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;


// Sendgind data on App.js

// import { useEffect } from 'react';
// import Cart from './components/Cart/Cart';
// import Layout from './components/Layout/Layout';
// import Products from './components/Shop/Products';
// import Notification from './components/UI/Notifocations';
// import { useSelector, useDispatch } from 'react-redux';
// import {showNotification} from "./store/ui-slice";

// let isInitial = true;

// function App() {
//   const cart = useSelector(store => store.cart);
//   const uiSelector = useSelector(state => state.ui.cartIsVisible);
//   const dispatch = useDispatch();
//   const notification = useSelector(state => state.ui.notification)

//   useEffect(() => {

//     const sendCartData = async () => {
//       dispatch(showNotification({
//         status: "pending",
//         title: "sending",
//         message: "Sending cart data "
//       }))
//       const response = await fetch(
//         "https://redux-cart-app-349e5-default-rtdb.firebaseio.com/cart.json",
//         {
//         method: "PUT",
//         body: JSON.stringify(cart)
//       })

//       if (!response.ok){
//         throw new Error("Somethin went wrong")
//       }

//       dispatch(showNotification({
//         status: "success",
//         title: "data sent",
//         message: "Data has been sent successfully"
//       }))    
//     }

//     if (isInitial) {
//       isInitial = false;
//       return
//     }

//     sendCartData().catch(error => {
//       dispatch(showNotification({
//         status: "error",
//         title: "Error",
//         message: "An Error has occured"
//         })
//       )
//     })
//   },[cart, dispatch])

//   console.log(notification)

//   return (
//     <>
//     {notification && <Notification 
//       status={notification.status} 
//       message={notification.message} 
//       title={notification.title}/>}
//     <Layout>
//       {uiSelector && <Cart />}
//       <Products />
//     </Layout>
//     </>
//   );
// }

// export default App;
