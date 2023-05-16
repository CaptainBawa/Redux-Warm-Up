import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'
import ModalReducer from '../features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        model: ModalReducer
    },
  });