import { ADD_CHAT, REMOVE_CHAT } from "../actions/actionChats";

const initialState = [{
    id: 'chat1',
    dispatcher: 'Mary',
    messages: [
      {
        author: 'You',
        text: 'Hello!'
      },
      {
        author: 'Mary',
        text: 'Oh, hi.'
      },
      {
        author: 'You',
        text: 'How are you doing?'
      },
      {
        author: 'Mary',
        text: 'I m doing alright. How about you?'
      }

    ]
  },
  {
    id: 'chat2',
    dispatcher: 'Semen',
    messages: [
      {
  author: 'You',
  text: 'The weather is great isn t it?'
},
{
  author: 'Semen',
  text: 'So where are you going now?'
},
    ]
  }
]


export const chatsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      // console.log('AddddD')
      return[...state, action.payload]
    }
      
    case REMOVE_CHAT: {
      return [...state.filter((e,i)=> i < state.length -1)]
    }
      
    default: return state
  }
}