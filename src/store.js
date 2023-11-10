import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  shortPerson: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const createStore = () =>
  configureStore({
    reducer: {
      counterState: counterSlice.reducer,
    },
  });
export const store = createStore();
