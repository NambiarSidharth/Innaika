import { SET_CURRENT_USER } from "./types";

export const setCurrentUser = (userData)=>(dispatch)=>{
    return {
        type:SET_CURRENT_USER,
        payload:userData
    }

}