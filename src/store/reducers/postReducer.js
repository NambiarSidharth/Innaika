import {ADD_POST} from '../actions/types'
const initialState = {
    posts:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case ADD_POST:
        return {
            ...state,
            posts:action.payload
        }
        default:
        return state
    }
}