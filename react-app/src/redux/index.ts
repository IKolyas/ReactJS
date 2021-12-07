import { createStore, combineReducers } from "redux";

import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";


export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        messages: messagesReducer,
    }),
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);
