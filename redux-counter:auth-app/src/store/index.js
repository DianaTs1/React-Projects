// using toolkit

import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterInitialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const loginInitialState = {
    isLoggedIn: false
};

const loginSlice = createSlice(
    {name: "authentication",
    initialState: loginInitialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout (state) {
            state.isLoggedIn = false
        }
    }
})

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: loginSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = loginSlice.actions;

export default store;




// import { createStore } from 'redux';

// const redux = require('redux');
// const initialState = {counter: 0, showCounter: true}

// const counterReducer = (state=initialState, action) => {
//     if (action.type === "increment") {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "increase") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "decrement") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === "toggle") {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }else{
//         return state
//     };
// };

// const store = createStore(counterReducer);

// export default store;