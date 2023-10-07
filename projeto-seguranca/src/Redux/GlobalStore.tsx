import { configureStore } from '@reduxjs/toolkit';
import GlobalSlice from './GlobalSlice';


export default configureStore({
    reducer: GlobalSlice
});