import * as actionType from '../actions/actionsType'
import {updateObject} from '../utility'

const initialState={
    profiledropdown:false,
    dashborddropdown:false,
    themebackgroundState:'abBrandColorBG1',
    themeborderState:'abBrandColorB1',
    selectedDropDown:1,
    selectedDropDownName:'GRC Dashboard'

}

const sidebarreducer=(state=initialState,action)=>{
    switch(action.type){
     case actionType.PROFILEDROPDOWN:
     return{...state,profiledropdown:action.value}
     case actionType.DASHBOARDDROPDOWN:
     return{...state,dashborddropdown:action.value}  
    case actionType.THEMECHANGE:
    return { ...state, themebackgroundState: action.background,themeborderState:action.border}
    case actionType.SIDEBARCHANGE:
    return { ...state, selectedDropDown:action.data,selectedDropDownName:action.name}
    case actionType.CLEAR_SIDEBAR:
     return {...state,selectedDropDown:1,selectedDropDownName:'GRC Dashboard'}       
    }
    
    return state;

}

export default sidebarreducer;