import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {testAPI} from "../sevices/test";
import {albumsAPI} from "../sevices/AlbumsService";
import {commentsAPI} from "../sevices/CommentsService";
import {photosAPI} from "../sevices/PhotosService";
import {postAPI} from "../sevices/PostService";
import {todosAPI} from "../sevices/TodosService";
import {usersAPI} from "../sevices/UsersService";

const rootReducer = combineReducers({
    [testAPI.reducerPath]: testAPI.reducer,
    [albumsAPI.reducerPath]: albumsAPI.reducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    [photosAPI.reducerPath]: photosAPI.reducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [todosAPI.reducerPath]: todosAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
