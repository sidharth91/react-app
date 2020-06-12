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
                
                if (error.response!=undefined && error.response.status == '401') {
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
    let dt=new Date()
    dt.setDate( dt.getDate()-200);
    temp.endDate=dt
    data.map(p => {
        p.selectedValue = null;
        switch (p.id) {
            case 1:
                temp.sapSystem = p;
                temp.sapSystem.selectedValue = p.value[p.value.length - 3].ZID
                break
            case 2:
                p.selectedValue = p.value[p.value.length - 3].ZID
                temp.client = p;
                break
            case 11:
                p.selectedValue = p.value[0].ZID
                temp.level = p;
                break
            case 12:
               
                temp.userType = p;
                break
            case 13:
               
                temp.userGroup = p;
                break
            case 14:
                p.selectedValue = p.value[3].ZID
                temp.account = p;
                break
            case 15:
               
                temp.licenseType = p;
                break
            case 16:
                p.selectedValue = p.value[0].ZID
                temp.userStatus = p;
                break
            case 17:
                p.selectedValue = p.value[0].ZID
                temp.activeUser = p;
                break
            case 18:
                p.selectedValue = p.value[0].ZID
                temp.tcodes = p;
                break
            case 19:
                p.selectedValue = p.value[0].ZID
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


export const changestartDate = (input) => {
    return dispatch => {
        dispatch({
            type: actionType.CHANGE_LICENCECSTARTDATE_FILTER,
            value: input
        })

    }
}

export const changeendDate = (input) => {
    return dispatch => {
        dispatch({
            type: actionType.CHANGE_LICENCECENDDATE_FILTER,
            value: input
        })

    }
}


export const changecount = (input) => {
    return dispatch => {
        dispatch({
            type: actionType.CHANGE_LICENCECCOUNT_FILTER,
            value: input
        })

    }
}


export const changelogon = (input) => {
    return dispatch => {
        dispatch({
            type: actionType.CHANGE_LICENCECLOGONDAYS_FILTER,
            value: input
        })

    }
}


export const changeuserId = (input) => {
    return dispatch => {
        dispatch({
            type: actionType.CHANGE_LICENCECUSERID_FILTER,
            value: input
        })

    }
}



export const submitLicenceFilter = (token, sapSystem, client, level, userType, userGroup, 
    account, licenseType, userStatus, activeUser, tcodes,criteria,userId,count,logondays,startDate,endDate) => {

    return dispatch => {
        dispatch({ type: actionType.CHANGE_LOADER_STATUS, data: true })
        axios.post('http://localhost:8080/api/JAVA_0005', {
            sapSystem: sapSystem,
            client: client,
            level: level,
            userType: userType,
            userGroup: userGroup,
            account: account,
            licenseType: licenseType,
            userStatus: userStatus,
            activeUser: activeUser,
            tcodes: tcodes,
            criteria: criteria,
            userId: userId,
            count: count,
            logondays: logondays,
            startDate: startDate,
            endDate: endDate
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                console.log(JSON.stringify(response.data))
                dispatch({ type: actionType.UPDATE_LICENCE_RESULT, data: response.data })
            })
            .catch(error => {
                console.log(error)
            });
    }

}
