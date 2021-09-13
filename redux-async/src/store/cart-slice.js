import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./ui-slice";

const initialState = {
    items: [],
    totalQuantity: 0,
    changed: false
};

const cartSlice = createSlice({
    name: "cart",
    initialState, 
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            state.changed = true;
            state.totalQuantity ++;
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.title,
                    totalPrice: newItem.price
                });
            };
        },
        removeItemFromCart(state, action) {
            state.changed = true;
            state.totalQuantity--;
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity --;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            };
        }
    }
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showNotification({
            status: "pending",
            title: "sending",
            message: "Sending cart data "
          })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://redux-cart-app-349e5-default-rtdb.firebaseio.com/cart.json",{
                method: "PUT",
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
                }
              );
        
              if (!response.ok){
                throw new Error("Somethin went wrong")
              };
            };

        try {
            await sendRequest();

            dispatch(showNotification({
                status: "success",
                title: "data sent",
                message: "Data has been sent successfully"
                })
            );
        }
        catch (error) {
            dispatch(showNotification({
                status: "error",
                title: "Error",
                message: "An Error has occured"
                })
            )
        };

    };
};

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch("https://redux-cart-app-349e5-default-rtdb.firebaseio.com/cart.json")

            if (!response.ok){
                throw new Error("Could not fetch data from the server")
            };

            const data = await response.json()
            return data;
        };
    try{
        const {replaceCart} = cartSlice.actions;
        const cartData = await fetchData();
        dispatch(replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity
        }));
    }catch(error) {
        dispatch(showNotification({
            status: "error",
            title: "Error",
            message: "An Error has occured"
        }))
    }
    };
}

export const {addItemToCart, removeItemFromCart} = cartSlice.actions;

export default cartSlice;