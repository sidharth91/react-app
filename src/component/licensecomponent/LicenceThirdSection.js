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
import NivoBarChart from '../NivoVerticalBarGraph'





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
        // let data=[
        //     {
        //         ZTYPE: '03',
        //         SAPSYSID: 'CP1',
        //         MANDT: '500',
        //         GROUPBY1: '1300',
        //         GROUP_DESC1: 'Warehouse Management',
        //         ZCOUNT1: 1161992,
        //         ZCOUNT2: 223456,
        //         ZCOUNT3: 0
        //       },
        //       {
        //         ZTYPE: '03',
        //         SAPSYSID: 'CP1',
        //         MANDT: '500',
        //         GROUPBY1: '5200',
        //         GROUP_DESC1: 'Service Orders',
        //         ZCOUNT1: 213204,
        //         ZCOUNT2: 23456,
        //         ZCOUNT3: 0
        //       },
        //       {
        //         ZTYPE: '03',
        //         SAPSYSID: 'CP1',
        //         MANDT: '500',
        //         GROUPBY1: '5000',
        //         GROUP_DESC1: 'Procurement Orders',
        //         ZCOUNT1: 143366,
        //         ZCOUNT2: 123456,
        //         ZCOUNT3: 0
        //       },
        //       {
        //         ZTYPE: '03',
        //         SAPSYSID: 'CP1',
        //         MANDT: '500',
        //         GROUPBY1: '2405',
        //         GROUP_DESC1: '2405',
        //         ZCOUNT1: 2523,
        //         ZCOUNT2: 0,
        //         ZCOUNT3: 0
        //       }
        //   ]

        return (
            <Grid container style={{marginTop:10}} spacing={1}>
           
                <Grid item md={6} style={{paddingTop:0}}>
                   {isDataReadtToShow? <LicenceGraphCard chart='03' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_04.data} name={this.props.result.E_REPORT.data[6].ZDESC}  chartType={1}  dialogueOpen={this.props.dialogueOpen} chartHeader={this.props.result.header.data[6].ZDESC} chartId="SEC34"/> :null}
                </Grid>
                <Grid item md={6} style={{paddingTop:0}}>
                   {isDataReadtToShow? <LicenceGraphCard chart='04' stack={false} color={this.props.colors} data={this.props.result.E_RESULT_04.data} name={this.props.result.E_REPORT.data[7].ZDESC} chartType={1}  dialogueOpen={this.props.dialogueOpen} chartHeader={this.props.result.header.data[7].ZDESC} chartId="SEC444"/> :null}
                   {/* {isDataReadtToShow?  <NivoBarChart 
                   data={data} colors={this.props.colors} 
                   keys={['ZCOUNT1']} indexBy="GROUP_DESC1" 
                   layout="horizontal"  groupMode="stacked"
                   colorBy="id"/>:null} */}
                </Grid>  
              
            </Grid>


        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        isUserLogedIn: state.login.isUserLogedIn,
        result:state.licensefilter.licenseresult,
        colors:state.licensefilter.colors

    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenceThirdSection);//connect which return a HOC taking two parameters which help connect to redux store and component