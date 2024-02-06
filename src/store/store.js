import { configureStore } from "@reduxjs/toolkit";
import { messageServices } from "../services/messageService";

const store = configureStore({
    reducer: {
        [messageServices.reducerPath]: messageServices.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(messageServices.middleware),
});

export default store;
