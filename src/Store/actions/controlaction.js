import * as actionType from './actionsType';
import * as action from './index'
import axios from 'axios';



export const initControlFilter = (token) => {
    return dispatch => {
        dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: true })
        axios.get('http://localhost:8080/api/controlsfilter', { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: false })
                dispatch(initiateControlFilter(response.data));

            })
            .catch(error => {

                if (error.response != undefined && error.response.status == '401') {
                    action.logout()
                    window.location.reload()

                }
                console.log(error);
            });
    }
}

export const initiateControlFilter = (data) => {
    let temp = {};
    temp.loader = false;
    let dt = new Date()
    dt.setFullYear(dt.getFullYear() - 1)
    temp.startDate = dt
    data.map(p => {
        p.selectedValue = null;
        switch (p.id) {
            case 1:
                p.selectedValue = p.value[1].ZID
                temp.sapSystem = p;
                break
            case 2:
                p.selectedValue = p.value[1].ZID
                temp.client = p;
                break
            case 9:
                temp.drillDown = p;
                break;
            case 7:
                temp.mitigation = p;
                break;
            case 21:
                p.selectedValue = []
                temp.controls = p;
                temp.control = {...p};
                temp.control.selectedValue=p.value[0].ZID;
                temp.control.id = 221
                break
            case 51:
                temp.colors = p.value.map(color => color.ZDESC);
                break;
            default:
                console.log("case doesn't match")
        }
    })

    return {
        type: actionType.INITCONTROLFILTER,
        data: temp
    };
}


export const changeControlFilter = (data, value) => {
    return dispatch => {
        switch (data.id) {
            case 1:
                dispatch({
                    type: actionType.CHANGE_CONTROLSAPSYSTEM_FILTER,
                    value: value
                });
                break
            case 2:
                dispatch({
                    type: actionType.CHANGE_CONTROLCLIENT_FILTER,
                    value: value
                });
                break
            case 21:
                dispatch({ type: actionType.CHANGE_CONTROLS_FILTER, value: value })
                break
            case 221:
                dispatch({ type: actionType.CHANGE_CONTROL_FILTER, value: value })
                break
            case 9:
                dispatch({ type: actionType.CHANGE_CONTROLDRILL_DOWN, value: value })
                break
            case 7:
                dispatch({ type: actionType.CHANGE_CONTROLMITIGATION_FILTER, value: value })
            default:
                console.log("case doesn't match")
        }
    }
}


export const submitcontrolFilter = (token, sapSystem, client, controls) => {

    return dispatch => {
        dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: true })
        axios.post('http://localhost:8080/api/JAVA_0007', {
            sapSystem: sapSystem,
            client: client,
            controls: controls
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: false })
                dispatch({ type: actionType.UPDATE_CONTROL_RESULT, data: response.data })
            })
            .catch(error => {
                console.log(error)
            });
    }

}


export const submitcontrolReportFilter = (token, sapSystem, client, control) => {

    return dispatch => {
        dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: true })
        axios.post('http://localhost:8080/api/JAVA_0009', {
            sapSystem: sapSystem,
            client: client,
            control: control
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: false })
                dispatch({ type: actionType.UPDATE_CONTROLREPORT_RESULT, data: response.data })
            })
            .catch(error => {
                dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: false })
                console.log(error)
            });
    }

}




export const submitcontrolReportFilterDialogue = (token, sapSystem, client, control) => {

    return dispatch => {
        dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: true })
        axios.post('http://localhost:8080/api/JAVA_0009', {
            sapSystem: sapSystem,
            client: client,
            control: control
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: false })
                dispatch({ type: actionType.UPDATE_CONTROLREPORTTABLE_RESULT, data: response.data })
            })
            .catch(error => {
                console.log(error)
            });
    }

}


export const submitcontrolReportFilterSummary = (token, sapSystem, client, controls) => {

    return dispatch => {
        dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: true })
        axios.post('http://localhost:8080/api/JAVA_0008', {
            sapSystem: sapSystem,
            client: client,
            controls: controls
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: false })
                dispatch({ type: actionType.UPDATE_CONTROLSUMMARYREPORT_RESULT, data: response.data })
            })
            .catch(error => {
                dispatch({ type: actionType.CHANGE_CONTROLLOADER_STATUS, data: false })
                console.log(error)
            });
    }

}

export const clearControlTableReport=()=>{
    return dispatch => {
        dispatch({ type: actionType.UPDATE_CONTROLREPORTTABLE_RESULT, data: {} })
    }
}


