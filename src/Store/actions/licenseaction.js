import * as actionType from './actionsType';
import * as action from './index'
import axios from 'axios';



export const initLicenseFilter = (token) => {
    return dispatch => {
        dispatch({ type: actionType.CHANGE_LOADER_STATUS, data: true })
        axios.get('http://localhost:8080/api/licensefilter', { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch(initiateLicenseFilter(response.data));
            })
            .catch(error => {
                console.log(error.response.status)
                if (error.response.status == '401') {
                    action.logout()
                    window.location.reload()

                }
                console.log(error);
            });
    }
}

export const initiateLicenseFilter = (data) => {
    let temp = {};
    temp.loader = false;
    data.map(p => {
        p.selectedValue = null;
        switch (p.id) {
            case 1:
                temp.sapSystem = p;
                temp.sapSystem.selectedValue = p.value[p.value.length - 3].ZID
                break
            case 2:
                temp.client = p;
                temp.client.selectedValue = p.value[p.value.length - 3].ZID
                break
            case 11:
                p.selectedValue = [];
                temp.level = p;
                break
            case 12:
                p.selectedValue = [];
                temp.userType = p;
                break
            case 13:
                p.selectedValue = [];
                temp.userGroup = p;
                break
            case 14:
                p.selectedValue = [];
                temp.account = p;
                break
            case 15:
                p.selectedValue = [];
                temp.licenseType = p;
                break
            case 16:
                p.selectedValue = [];
                temp.userStatus = p;
                break
            case 17:
                p.selectedValue = [];
                temp.activeUser = p;
                break
            case 18:
                p.selectedValue = [];
                temp.tcodes = p;
                break
            case 19:
                p.selectedValue = [];
                temp.criteria = p;
                break
            case 51:
                temp.colors = p.value.map(color => color.ZDESC);
                break;
            default:
                console.log("case doesn't match")
        }
    })

    return {
        type: actionType.INITLICENSEFILTER,
        data: temp
    };
}


export const changeLicenceFilter = (data, value) => {
    return dispatch => {
        switch (data.id) {
            case 1:
                dispatch({
                    type: actionType.CHANGE_LICENCESYSTEM_FILTER,
                    value: value
                });
                break
            case 2:
                dispatch({
                    type: actionType.CHANGE_LICENCECLIENTT_FILTER,
                    value: value
                });
                break
            case 11:
                dispatch({ type: actionType.CHANGE_LICENCELEVEL_FILTER, value: value })
                break
            case 12:
                dispatch({ type: actionType.CHANGE_LICENCEUSERTYPE_FILTER, value: value })
                break
            case 13:
                dispatch({ type: actionType.CHANGE_LICENCEUSERGRP_FILTER, value: value })
                break
            case 14:
                dispatch({ type: actionType.CHANGE_LICENCEACC_FILTER, value: value })
                break
            case 15:
                dispatch({ type: actionType.CHANGE_LICENCETYPE_FILTER, value: value })
                break
            case 16:
                dispatch({ type: actionType.CHANGE_LICENCEUSERSTAT_FILTER, value: value })
                break
            case 17:
                dispatch({ type: actionType.CHANGE_LICENCEACTUSER_FILTER, value: value })
                break
            case 18:
                dispatch({ type: actionType.CHANGE_LICENCETCODE_FILTER, value: value })
                break
            case 19:
                dispatch({ type: actionType.CHANGE_LICENCECRITERIA_FILTER, value: value })
                break
            default:
                console.log("case doesn't match")
        }
    }
}