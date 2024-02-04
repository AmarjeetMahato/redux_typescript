import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";
import { userDetails } from "./service/userService";





export const store = configureStore({
    reducer:{
        [userDetails.reducerPath]:userDetails.reducer,
        counter :counterSlice,
        todos:todoSlice.reducer,

    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userDetails.middleware),
})




export type RootState = ReturnType< typeof store.getState>