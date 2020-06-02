
import * as actionType from '../actions/actionsType'






export const updatePathname=(value)=>{
    return dispatch=>{
    dispatch({type:actionType.UPDATEPATHNAME,value:value})
}
}

