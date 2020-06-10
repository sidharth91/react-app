import * as actionType from './actionsType';
import axios from 'axios';



export const initFilter = (token) => {
    return dispatch => {
        dispatch({ type: actionType.CHANGE_LOADER_STATUS, data: true })
        axios.get('http://localhost:8080/api/filter', { headers: { 'Authorisation': token } })
            .then(response => {
                console.log(JSON.stringify(response.data))
                dispatch(initiateFilter(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
}




export const changeFilter = (data, value) => {
    return dispatch => {
        switch (data.id) {
            case 1:
                dispatch({
                    type: actionType.CHANGE_SAPSYSTEM_FILTER,
                    value: value
                });
                break
            case 2:
                dispatch({
                    type: actionType.CHANGE_CLIENT_FILTER,
                    value: value
                });
                break
            case 3:
                dispatch({ type: actionType.CHANGE_RISKTYPE_FILTER, value: value })
                break
            case 4:
                dispatch({ type: actionType.CHANGE_RISKLEVEL_FILTER, value: value })
                break
            case 5:
                dispatch({ type: actionType.CHANGE_BUSINESS_FILTER, value: value })
                break
            case 6:
                dispatch({ type: actionType.CHANGE_RISK_ID, value: value })
                break
            case 7:
                dispatch({ type: actionType.CHANGE_MITIGATION_FILTER, value: value })
                break
            case 8:
                dispatch({ type: actionType.CHANGE_REPORT_TYPE, value: value })
                break
            case 9:
                dispatch({ type: actionType.CHANGE_DRILL_DOWN, value: value })
                break
            default:
                console.log("case doesn't match")
        }
    }
}


export const changeUserInput = (input) => {
    return dispatch => {
        dispatch({
            type: actionType.CHANGE_USERID_INPUT,
            value: input
        })

    }
}

export const changeLevel = (inputLevel) => {
    console.log("level...." + inputLevel);
    return dispatch => {
        let level = (inputLevel == 1) ? 2 : 1;
        console.log("after change..." + level)
        dispatch({
            type: actionType.CHANGE_LEVEL,
            level: inputLevel
        })

    }
}

export const changeBreakDown = (data, value, action) => {
    let temparray = data.selectedValue;
    let index = temparray.findIndex(p => { return p == value });

    if (index != -1) {
        temparray.splice(index, 1)
    } else {
        temparray.push(value);
    }
    return {
        type: action,
        value: temparray
    }

}

export const initiateFilter = (data) => {
    let temp = {};
    temp.loader = false;
    data.map(p => {
        p.selectedValue = null;
        switch (p.id) {
            case 1:
                temp.sapSystem = p;
                temp.sapSystem.selectedValue = p.value[p.value.length - 3].ZID
                temp.sapSystem.filtered = p.value[p.value.length - 3].ZID
                break
            case 2:
                temp.client = p;
                temp.client.selectedValue = p.value[p.value.length - 3].ZID
                temp.client.filtered = p.value[p.value.length - 3].ZID
                break
            case 3:
                p.selectedValue = [];
                p.filtered = [];
                temp.riskType = p;
                break
            case 4:
                p.selectedValue = [];
                p.filtered = [];
                temp.riskLevel = p;
                break
            case 5:
                p.selectedValue = [];
                p.filtered = [];
                temp.businessModule = p;
                break
            case 6:
                p.selectedValue = [];
                p.filtered = [];
                temp.riskid = p;
                break;
            case 7:
                temp.mitigation = p;
                break;
            case 8:
                p.selectedValue = 1
                p.filtered = 1;
                temp.reportType = p;
                break;
            case 9:
                temp.drillDown = p;
                break;
            case 51:
                temp.colors = p.value.map(color=>color.ZDESC);
                break;
            default:
                console.log("case doesn't match")
        }
    })

    return {
        type: actionType.INITFILTER,
        data: temp
    };
}

export const submitFilter = (token, riskType, sapSystem, client, riskLevel, businessModule, level, breakDown, riskId, reportType, mitigation) => {

    return dispatch => {
        dispatch({ type: actionType.CHANGE_LOADER_STATUS, data: true })
        axios.post('http://localhost:8080/api/JAVA_0002N', {
            riskType: riskType,
            sapSystem: sapSystem,
            client: client,
            riskLevel: riskLevel,
            businessModule: businessModule,
            level: level,
            breakDown: breakDown,
            riskId: riskId,
            reportType: reportType,
            mitigation: mitigation
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                console.log(JSON.stringify(response.data))
                dispatch({ type: actionType.UPDATE_RESULT, data: response.data })
            })
            .catch(error => {
                console.log(error)
            });
    }

}

export const changeDataFormat = (value) => {
    return dispatch => {
        if (value === 1) {
            dispatch({ type: actionType.UPDATE_DATAFORMAT, data: 0 })
        } else {
            dispatch({ type: actionType.UPDATE_DATAFORMAT, data: 1 })
        }
    }
}


export const gobackToParentTable = () => {
    return dispatch => {
        dispatch({ type: actionType.TO_PARENT_TABLE })
    }
}





export const riskReport = (token, sapSystem, client, level, riskType, riskLevel, businessModule, mitigation,drillDown,riskId, userinput) => {

    return dispatch => {
        dispatch({ type: actionType.CHANGE_LOADER_STATUS, data: true })
        axios.post('http://localhost:8080/api/JAVA_MUL_0003', {
            sapSystem: sapSystem,
            client: client,
            level: level,
            riskType: riskType,
            riskLevel: riskLevel,
            businessModule: businessModule,
            mitigation: mitigation,
            drillDown:drillDown,
            riskId: riskId,
            userInput:userinput
  
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch({ type: actionType.CHANGE_LOADER_STATUS, data: false })
                dispatch({ type: actionType.UPDATE_RISKREPORT, tableReport: response.data })
            })
            .catch(error => {
                console.log(error)
            });
    }
}


export const clearriskReport = () => {

    return dispatch => {
        dispatch({ type: actionType.UPDATE_RISKREPORT, tableReport: {} })
    }
}


export const riskGrcReport = (token, sapSystem, client, level, riskType, riskLevel, businessModule, mitigation,drillDown,riskId, userinput) => {

    return dispatch => {
        dispatch({ type: actionType.CHANGE_LOADER_STATUS, data: true })
        axios.post('http://localhost:8080/api/JAVA_MUL_0003', {
            sapSystem: sapSystem,
            client: client,
            level: level,
            riskType: riskType,
            riskLevel: riskLevel,
            businessModule: businessModule,
            mitigation: mitigation,
            drillDown:drillDown,
            riskId: riskId,
            userInput:userinput
  
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch({ type: actionType.UPDATE_GRCREPORT, tableReport: response.data })
                dispatch({ type: actionType.CHANGE_LOADER_STATUS, data: false })
            })
            .catch(error => {
                console.log(error)
            });
    }
}