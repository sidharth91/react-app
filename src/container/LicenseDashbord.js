import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'
import logo_icon from '../resources/auditbotlogo.PNG'
import SingleSelectDropDown from '../component/SingleSelectDropDown'
import LoginCard from '../component/LoginCard'
import Grid from '@material-ui/core/Grid';
import HeaderContainer from './HeaderContainer'
import SideBar from './SideBar'
import LicenseFilter from './LicenseFilter'
import LicenceFirstSection from './LicenceFirstSection'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LicenseSecondSecData from './LicenseSecondSecData'
import LicenceThirdSection from './LicenceThirdSection'



class LicenseDashbord extends Component {

    state={
        dialogue:false,
        groupby:'',
        chart:''
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        this.props.updatePathname(pathname)
        this.props.loadFilter(this.props.token)
    }

    openDialogue=(chart,groupby)=>{
        console.log("reached parents"+groupby)
        //this.setState({dialogue:true,groupby:groupby,chart:chart})
   }
   closeDialogue=()=>{
       //this.props.clearriskReport()
       //this.setState({dialogue:false,groupby:'',chart:''})
  }



    render() {


        return (
            <Grid container style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }} spacing={0}>
                <Grid item md={12}>
                    <LicenseFilter type='Dashbord' />
                    <LicenceFirstSection dialogueOpen={this.openDialogue}/>
                    <LicenseSecondSecData result={this.props.licenseresult}/>
                    <LicenceThirdSection result={this.props.licenseresult}/>
                </Grid>
            </Grid>
        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        licenseresult:state.licensefilter.licenseresult,
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        loadFilter: (token) => dispatch(action.initLicenseFilter(token)),
        updatePathname: (value) => dispatch(action.updatePathname(value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseDashbord);//connect which return a HOC taking two parameters which help connect to redux store and component