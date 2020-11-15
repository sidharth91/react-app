import * as actionType from './actionsType';
import * as action from './index'
import axios from 'axios';




export const authorization = (token) => {
    return dispatch => {
        dispatch({ type: actionType.CHANGE_LICENCELOADER_STATUS, data: true })
        axios.get('http://ec2-3-88-0-12.compute-1.amazonaws.com:8080/token/authorization', { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch({ type: actionType.AUTHORIZATION, value: response.data })
              
            })
            .catch(error => {

                console.log(error);
            });
    }
}


export const updatePathname=(value)=>{
    return dispatch=>{
    dispatch({type:actionType.UPDATEPATHNAME,value:value})
}
}

