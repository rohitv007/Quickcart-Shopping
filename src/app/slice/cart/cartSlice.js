import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // console.log("BEFORE", state.items);
      const newItem = action.payload;
      state.items.push(newItem);
      // console.log("AFTER", state.items);
    },
    removeItem: (state, action) => {
      // console.log("BEFORE", state.items);
      let currItem = action.payload;

      const itemIndex = state.items.findIndex(
        (item) => item.id === currItem.id
      );
      state.items.splice(itemIndex, 1);
      // console.log("AFTER", state.items);
    },
    clearItems: (state, action) => {
      // console.log("BEFORE", state.items);
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      // console.log("AFTER", state.items);
    },
    emptyCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
