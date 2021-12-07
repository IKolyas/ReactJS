import {combineReducers, createStore} from 'redux';

const initialState = true;
const initialChats = {
    1: {
        chat_id: 1,
        chat_name: 'Main',
        chat_messages: []
    },
    2: {
        chat_id: 2,
        chat_name: 'Second',
        chat_messages: []
    }
}
export const actionChecked = () => {
    return {
        type: 'CHECKED'
    }
}

export const actionAddMessage = () => {
    return {
        type: 'ADD_MESSAGE'
    }
}



const counterReducer = (state:boolean = initialState, action:any) => {
    switch (action.type) {
        case 'CHECKED':
            state = !state;
    }
    return state;
}

const chatReducer = (state:object = initialChats, action:any, data:any) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            Object.values(state).filter((chat) => chat.chat_id == data.chat_id);
    }
    return state;
}

const store = createStore(counterReducer);
export default store;
