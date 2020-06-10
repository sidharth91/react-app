import * as actionType from '../actions/actionsType'
import { updateObject } from '../utility'


const initialState = {
    sapSystem: { "name": "SAP System", "id": 1, "value": [] },
    client: { "name": "Client", "id": 2, "value": [] },
    level: { "name": "Level", "id": 11, "value": [], selectedValue: [] },
    userType: { "name": "User Type", "id": 12, "value": [], selectedValue: [] },
    userGroup: { "name": "User Group", "id": 13, "value": [], selectedValue: [] },
    account: { "name": "Account", "id": 14, "value": [], selectedValue: [] },
    licenseType: { "name": "License Type", "id": 15, "value": [], selectedValue: [] },
    userStatus: { "name": "User Status", "id": 16, "value": [], selectedValue: [] },
    activeUser: { "name": "Active User", "id": 17, "value": [], selectedValue: [] },
    tcodes: { "name": "Tcodes", "id": 18, "value": [], selectedValue: [] },
    criteria: { "name": "Criteria", "id": 19, "value": [], selectedValue: [] },
    licenseresult: null,
    licensereport: {},
    colors: [],

}

const licensereducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INITLICENSEFILTER:
            return updateObject(state, action.data);
        case actionType.CHANGE_LICENCESYSTEM_FILTER:
            return { ...state, sapSystem: { ...state.sapSystem, selectedValue: action.value } }
        case actionType.CHANGE_LICENCECLIENTT_FILTER:
            return { ...state, client: { ...state.client, selectedValue: action.value } }
        case actionType.CHANGE_LICENCELEVEL_FILTER:
            return { ...state, level: { ...state.level, selectedValue: action.value } }
        case actionType.CHANGE_LICENCEUSERTYPE_FILTER:
            return { ...state, userType: { ...state.userType, selectedValue: action.value } }
        case actionType.CHANGE_LICENCEUSERGRP_FILTER:
            return { ...state, userGroup: { ...state.userGroup, selectedValue: action.value } }
        case actionType.CHANGE_LICENCEACC_FILTER:
            return { ...state, account: { ...state.account, selectedValue: action.value } }
        case actionType.CHANGE_LICENCETYPE_FILTER:
            return { ...state, licenseType: { ...state.licenseType, selectedValue: action.value } }
        case actionType.CHANGE_LICENCEUSERSTAT_FILTER:
            return { ...state, userStatus: { ...state.userStatus, selectedValue: action.value } }
        case actionType.CHANGE_LICENCEACTUSER_FILTER:
            return { ...state, activeUser: { ...state.activeUser, selectedValue: action.value } }
        case actionType.CHANGE_LICENCETCODE_FILTER:
            return { ...state, tcodes: { ...state.tcodes, selectedValue: action.value } }
        case actionType.CHANGE_LICENCECRITERIA_FILTER:
            return { ...state, criteria: { ...state.criteria, selectedValue: action.value } }

    }


    return state;

}


export default licensereducer;