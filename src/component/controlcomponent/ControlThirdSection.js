import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../../Store/actions/index'

import LoginCard from '../LoginCard'
import Grid from '@material-ui/core/Grid';
import HeaderContainer from '../../container/HeaderContainer'
import SideBar from '../../container/SideBar'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ControlGraphCard from './ControlGraphCard'





class LicenceThirdSection extends Component {

    componentDidMount() {

    }

    checkForDataToShow=(data)=>{
        if(data&&Object.keys(data).length>0){
            return true;
        }
        return false;
       }

    graphNameOnReportType=()=>{
       if(this.props.reportTypeSelected=='1'){
           return 'Risk Type'
       }
       if(this.props.reportTypeSelected=='2'){
        return 'Risk Level'
        }
        if(this.props.reportTypeSelected=='3'){
            return 'Business Module'
        }
    }   

 
    render() {

        let isDataReadtToShow=this.checkForDataToShow(this.props.result)

        return (
            <Grid container style={{marginTop:5}} spacing={1}>
           
                <Grid item  md={3} style={{paddingTop:0}}>
                   {isDataReadtToShow? <ControlGraphCard chart='05' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_01.data} name="Top Duplicate Customer Orders"  chartType={1} dialogueOpen={this.props.dialogueOpen} chartId="SEC31" /> :null}
                </Grid>
                <Grid item md={3} style={{paddingTop:0}}>
                   {isDataReadtToShow? <ControlGraphCard chart='06' stack={false} color={this.props.colors}  data={this.props.result.E_RESULT_01.data} name="Top Customers With High Debts" chartType={3} dialogueOpen={this.props.dialogueOpen} chartId="SEC32" /> :null}
                </Grid>
                <Grid item md={3} style={{paddingTop:0}}>
                   {isDataReadtToShow? <ControlGraphCard chart='07' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_01.data} name="Top Onetime Customers With Orders"  chartType={3}  dialogueOpen={this.props.dialogueOpen} chartId="SEC32"/> :null}
                </Grid>
                <Grid item md={3} style={{paddingTop:0}}>
                   {isDataReadtToShow? <ControlGraphCard chart='08' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_01.data} name="Top Customers With High Credit Balances" chartType={1}  dialogueOpen={this.props.dialogueOpen} chartId="SEC34"/> :null}
                </Grid>
              
              
            </Grid>


        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        isUserLogedIn: state.login.isUserLogedIn,
        result:state.control.controlresult,
        colors:state.control.colors

    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenceThirdSection);//connect which return a HOC taking two parameters which help connect to redux store and component