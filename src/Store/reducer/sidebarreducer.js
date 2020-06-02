import * as actionType from '../actions/actionsType'
import {updateObject} from '../utility'

const initialState={

    pathname:''

}

const sidebarreducer=(state=initialState,action)=>{
    switch(action.type){
    case actionType.UPDATEPATHNAME:
     return {...state,pathname:action.value}       
    }
    
    return state;

}

export default sidebarreducer;