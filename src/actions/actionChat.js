export const ADD_CHAT = "ADD_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const actionChatAdd = (arr) => (
    {
        type: ADD_CHAT,
        payload: arr
    }
)
export const actionChatRem = () => (
  {
    type: REMOVE_CHAT
  }
)
export const messageAdd = (st) => 
  (
  
    {
      type: ADD_MESSAGE,
      payload: st
    }
  )

