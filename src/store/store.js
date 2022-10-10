import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import ProfilePage from "../components/profilePage";
// import { toggleReduser } from '../reduser';
import { chatsReduser } from "../redusers/chats";
import { chatReduser } from "../redusers/chat";



combineReducers({
  chats: chatsReduser,
  chat: chatReduser
})

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(chatsReduser, composeEnhansers(applyMiddleware()));