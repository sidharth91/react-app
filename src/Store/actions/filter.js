import * as actionType from './actionsType';
import axios from 'axios';



export const initFilter = (token) => {
    return dispatch => {
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
            case 3:
                p.selectedValue = [];
                temp.riskType = p;
                break
            case 4:
                p.selectedValue = [];
                temp.riskLevel = p;
                break
            case 5:
                p.selectedValue = [];
                temp.businessModule = p;
                break
            case 6:
                p.selectedValue = [];
                temp.riskid = p;
                break;
            case 7:
                temp.mitigation = p;
                break;
            case 8:
                p.selectedValue = 1
                temp.reportType = p;
                break;
            case 9:
                temp.drillDown = p;
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
/*
  export const riskReport=(token,system,client,level,column1,column2,risk,user,role,breakDown)=>{
   console.log(token+":"+system+":"+client+":"+level+":"+column1+":"+column2+":"+risk+":"+user+":"+role+":"+JSON.stringify(breakDown))

   let data={system:null,client:null,level:null,risk:null,user:null,role:null,risktype:null,risklevel:null,appclass:null}
   data.system=system
   data.client=client
   data.level=level
    if(breakDown.selectedValue.length>0){
       if(breakDown.selectedValue[0]===1){
        data.risktype=column1
       }
       if(breakDown.selectedValue[0]===2){
        data.risklevel=column1
       }
       if(breakDown.selectedValue[0]===3){
        data.appclass=column1
       }
   }

   if(breakDown.selectedValue.length>1){
    if(breakDown.selectedValue[1]===1){
        data.risktype=column2
    }
    if(breakDown.selectedValue[1]===2){
        data.risklevel=column2
    }
    if(breakDown.selectedValue[1]===3){
        data.appclass=column2
    }
} 

let config={
    headers:{'Authorisation':token},
    params:data
}

return dispatch=>{axios.get('http://ec2-18-206-205-31.compute-1.amazonaws.com:8080/api/JAVA_0003',config)
.then(response =>{
    console.log(response.data)
    dispatch({type:actionType.UPDATE_RISKREPORT,tableReport:response.data})
  })
  .catch(error=>{
    console.log(error)
  });
}

  }

  */

export const gobackToParentTable = () => {
    return dispatch => {
        dispatch({ type: actionType.TO_PARENT_TABLE })
    }
}



export const riskReport = (token, system, client, level, rowid, value, risk, user, role, breakDown) => {
    console.log(token + ":" + system + ":" + client + ":" + level + ":" + rowid + ":" + value + ":" + risk + ":" + user + ":" + role + ":")

    let data = { system: null, client: null, level: null, risk: null, user: null, role: null, risktype: null, risklevel: null, appclass: null }
    data.system = system
    data.client = client
    data.level = level
    if (rowid == '01' || rowid == '02' || rowid == '03') {
        data.risktype = value
    }
    if (rowid == '04' || rowid == '05' || rowid == '06') {
        data.risklevel = value
    }
    if (rowid == '06' || rowid == '07' || rowid == '08') {
        data.appclass = value
    }


    let config = {
        headers: { 'Authorisation': token },
        params: data
    }

    return dispatch => {
        axios.get('http://localhost:8080/api/JAVA_0003', config)
            .then(response => {
                console.log(response.data)
                dispatch({ type: actionType.UPDATE_RISKREPORT, id: rowid, tableReport: response.data })
            })
            .catch(error => {
                console.log(error)
            });
    }
}


export const riskGrcReport = (token, system, client, level, riskType, riskLevel, appclass, risk, userinput) => {
    /* 
       let data={system:null,client:null,level:null,risk:null,user:null,role:null,risktype:null,risklevel:null,appclass:null}
       data.system=system
       data.client=client
       data.level=level
      data.risktype=riskType
       data.risklevel=riskLevel
       data.appclass=appclass
       data.risk=risk
       
   
    
    let config={
        headers:{'Authorisation':token},
        params:data
    }
     */
    return dispatch => {
        axios.post('http://localhost:8080/api/JAVA_MUL_0003', {
            riskType: riskType,
            sapSystem: system,
            client: client,
            riskLevel: riskLevel,
            businessModule: appclass,
            level: level,
            risk: risk,
            userIput: userinput
        }, { headers: { 'Authorisation': token } })
            .then(response => {
                console.log(response.data)
                dispatch({ type: actionType.UPDATE_GRCREPORT, tableReport: response.data })
            })
            .catch(error => {
                console.log(error)
            });
    }
}