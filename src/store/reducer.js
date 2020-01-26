import {HEADER_MENU_CLICK, AD_POPUP_CLICK } from "./constraint";

const initialstate = {
    headerMessage : "Buy&Sell",
    isAdPopupOpen : false

}

const reducer = (state = initialstate, action) => {
    
    if(action.type == HEADER_MENU_CLICK)
    {
        return {...state, headerMessage: action.data}
    } else if (action.type==AD_POPUP_CLICK)
    {
        return {...state, isAdPopupOpen: action.data}
    }
    return state;
} 

export default reducer;