import {createStore} from 'redux';

const initialState = true;
export const actionChecked = () => {
    return {
        type: 'CHECKED'
    }
}

const counterReducer = (state:boolean = initialState, action:any) => {
    switch (action.type) {
        case 'CHECKED':
            state = !state;
    }
    return state;
}

const store = createStore(counterReducer);
export default store;
