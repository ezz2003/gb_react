export const ADD_CHAT = "ADD_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";

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









