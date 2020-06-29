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
import LicenceGraphCard from './LicenceGraphCard'





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
           
                <Grid item  md={4} style={{paddingTop:0}}>
                   {isDataReadtToShow? <LicenceGraphCard chart='01' stack={true} color={this.props.colors} data={this.props.result.E_RESULT_03.data} name="Total License Count/Cost"  chartType={5} dialogueOpen={this.props.dialogueOpen} chartId="SEC31" chartdata={this.props.licenseresult.E_RESULT_00.data} chartHeader={this.props.licenseresult.header.data}/> :null}
                </Grid>
                <Grid item md={2} style={{paddingTop:0}}>
                   {isDataReadtToShow? <LicenceGraphCard chart='01' stack={false} color={this.props.colors}  data={this.props.result.E_RESULT_04.data} name="Top Prof user with doc" chartType={3} dialogueOpen={this.props.dialogueOpen} chartId="SEC32" /> :null}
                </Grid>
                <Grid item md={2} style={{paddingTop:0}}>
                   {isDataReadtToShow? <LicenceGraphCard chart='02' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_04.data} name="Top Users with indirect Usage"  chartType={3}  dialogueOpen={this.props.dialogueOpen} chartId="SEC32"/> :null}
                </Grid>
                <Grid item md={2} style={{paddingTop:0}}>
                   {isDataReadtToShow? <LicenceGraphCard chart='03' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_04.data} name="Top Users with Multiple Logon" chartType={1}  dialogueOpen={this.props.dialogueOpen} chartId="SEC34"/> :null}
                </Grid>
                <Grid item md={2} style={{paddingTop:0}}>
                   {isDataReadtToShow? <LicenceGraphCard chart='04' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_04.data} name="Top USMM Enginee Usage" chartType={1}  dialogueOpen={this.props.dialogueOpen} chartId="SEC34"/> :null}
                </Grid>  
              
            </Grid>


        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        isUserLogedIn: state.login.isUserLogedIn,
        licenseresult:state.licensefilter.licenseresult,
        colors:state.licensefilter.colors

    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenceThirdSection);//connect which return a HOC taking two parameters which help connect to redux store and component