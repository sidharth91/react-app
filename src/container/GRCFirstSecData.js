import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'
import logo_icon from '../resources/auditbotlogo.PNG'
import FilterSingleSelectDropDown from '../component/FilterSingleSelectDropDown'
import FilterMultiSelectDropDown from '../component/FilterMultiSelectDropDown'
import LoginCard from '../component/LoginCard'
import Grid from '@material-ui/core/Grid';
import HeaderContainer from './HeaderContainer'
import SideBar from './SideBar'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GRCStackGraphCard from '../component/GRCStackGraphCard'






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
                   {isDataReadtToShow? <GRCStackGraphCard chart='01' color={this.props.colors} stack='3' height={220} data={this.props.result.E_RESULT_01.data} name="Executed Risks Chart" chartType={1} dialogueOpen={this.props.dialogueOpen} chartId="SEC11"/> :null}
                </Grid>
                <Grid item md={4}  style={{paddingTop:0}}>
                   {isDataReadtToShow? <GRCStackGraphCard chart='02' stack='2' color={this.props.colors} height={220} data={this.props.result.E_RESULT_01.data} name={ `Risk Executed ${this.props.levelSelected==1?'User':'Role'}` } chartType={2}  dialogueOpen={this.props.dialogueOpen} chartId="SEC12"/> :null}
                </Grid>
                <Grid item md={4}  style={{paddingTop:0}}>
                   {isDataReadtToShow? <GRCStackGraphCard chart='03'  stack='2' color={this.props.colors} height={220} data={this.props.result.E_RESULT_01.data} name="Total Executed Risks" chartType={1}  dialogueOpen={this.props.dialogueOpen} chartId="SEC13"/> :null}
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