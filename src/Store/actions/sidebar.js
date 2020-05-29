
import * as actionType from '../actions/actionsType'
export const onprofileClick=(value)=>{
    let data=!value;
 return dispatch=>{
     dispatch({type:actionType.PROFILEDROPDOWN,value:data})
 }

}


export const ondashboardClick=(value)=>{
    let data=!value;
 return dispatch=>{
     dispatch({type:actionType.DASHBOARDDROPDOWN,value:data})
 }

}

export const onthemechange=(data)=>{
let themebackground='abBrandColorBG1'
let themeborder='abBrandColorB1'
    if (data === 1) {
        themebackground='abBrandColorBG1'
        themeborder='abBrandColorB1'
    }
    if(data===2){
        themebackground='abBrandColorBG2'
        themeborder='abBrandColorB2'
    }

 return dispatch=>{
     dispatch({type:actionType.THEMECHANGE,background:themebackground,border:themeborder})
 }

}

export const sidebarSelectionCahnge=(value,name)=>{
    return dispatch=>{
    dispatch({type:actionType.SIDEBARCHANGE,data:value,name:name})
}
}
