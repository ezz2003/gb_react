import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import ProfilePage from "../components/profilePage";
// import { toggleReduser } from '../reduser';
import { chatsReduser } from "../redusers/chatsReduser";
import { chatReduser } from "../redusers/chatReduser";
import { robotReducer } from "../redusers/robotReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { addRobotMessage } from "../components/chat";
import thunk from "redux-thunk";
import { dataReduser } from "../redusers/dataReduser";
// import Chat from "../components/chat";
// import { rootShouldForwardProp } from "@mui/material/styles/styled";

// const thunk = store => next => action => {
  // console.log('action', action)
  // 
  // if (action.type !== 'add') {
    // return next(action);
  // }
  // next(action)
  // action.payload = 'Hi, I m a robot. I read your message.'
  // setTimeout(() => next(action), 2000)
// }


const config = {
  key: 'root',
  storage 
}

// const robotMessage ={
  // author: 'ROBOT',
  // text: 'Hi, I m a robot. I read your message.'
// }
//


export const reducer = combineReducers({
  chats: chatsReduser,
  chat: chatReduser,
  robotChat: robotReducer,
  pageData: dataReduser
})
// 
const persistedReducer = persistReducer(config, reducer)

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhansers(applyMiddleware(thunk)));
export const persistor = persistStore(store);