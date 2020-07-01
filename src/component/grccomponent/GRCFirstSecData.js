import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../../Store/actions/index'
import Grid from '@material-ui/core/Grid';
import GRCStackGraphCard from './GRCStackGraphCard'






class GRCFirstSecData extends Component {

    componentDidMount() {

    }

    checkForDataToShow=(data)=>{
        if(data&&Object.keys(data).length>0){
            return true;
        }
        return false;
       }
    
 
    render() {

        let isDataReadtToShow=this.checkForDataToShow(this.props.result)

        return (
            <Grid container style={{marginTop:5}} spacing={1}>
                <Grid item md={4}  style={{paddingTop:0}}>
                   {isDataReadtToShow? <GRCStackGraphCard chart='01' stack='3' color={this.props.colors}  height={"36vh"} data={this.props.result.E_RESULT_01.data} name="Executed Risks Chart" chartType={3} dialogueOpen={this.props.dialogueOpen} chartId="SEC11"/> :null}
                </Grid>
                <Grid item md={4}  style={{paddingTop:0}}>
                   {isDataReadtToShow? <GRCStackGraphCard chart='02' stack='2' color={this.props.colors} height={"36vh"} data={this.props.result.E_RESULT_01.data} name={ `Risk Executed ${this.props.levelSelected==1?'User':'Role'}` } chartType={3} dialogueOpen={this.props.dialogueOpen} chartId="SEC12"/> :null}
                </Grid>
                <Grid item md={4}  style={{paddingTop:0}}>
                   {isDataReadtToShow? <GRCStackGraphCard chart='03'  stack='2' color={this.props.colors} height={"36vh"} data={this.props.result.E_RESULT_01.data} name="Total Executed Risks" chartType={3}  dialogueOpen={this.props.dialogueOpen} chartId="SEC13"/> :null}
                </Grid>
            
                    
            </Grid>


        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        isUserLogedIn: state.login.isUserLogedIn,
        username: state.login.username,
        riskType: state.filter.riskType,
        sapSystem: state.filter.sapSystem,
        client: state.filter.client,
        riskLevel: state.filter.riskLevel,
        businessModule: state.filter.businessModule,
        risk: state.filter.risk,
        level: state.filter.level,
        reportType: state.filter.reportType,
        riskid: state.filter.riskid,
        breakDown: state.filter.breakDown,
        result: state.filter.result,
        levelSelected:state.filter.levelSelected ,
        colors:state.filter.colors
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        loadFilter: (token) => dispatch(action.initFilter(token)),
        onChangeFilter: (data, value) => dispatch(action.changeFilter(data, value)),
        changeLevel: (level) => dispatch(action.changeLevel(level)),
        submitFilter: (token, riskType, sapSystem, client, riskLevel, businessModule, level, breakDown) => dispatch(action.submitFilter(token, riskType, sapSystem, client, riskLevel, businessModule, level, breakDown)),
        submitGRCFilter: (token, system, client, level, riskType, riskLevel, appclass, risk) => dispatch(action.riskGrcReport(token, system, client, level, riskType, riskLevel, appclass, risk))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GRCFirstSecData);//connect which return a HOC taking two parameters which help connect to redux store and component