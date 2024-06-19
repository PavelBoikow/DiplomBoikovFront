import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";
import { studReducer } from "./slices/stud";
import { infoReducer } from "./slices/info";


const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReducer,
        stud: studReducer,
        info: infoReducer,
    },
});

export default store;