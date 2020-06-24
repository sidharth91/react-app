import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch,withRouter,Redirect } from 'react-router-dom';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'
import logo_icon from '../resources/auditbotlogo.PNG'
import SingleSelectDropDown from '../component/SingleSelectDropDown'
import LoginCard from '../component/LoginCard'
import Grid from '@material-ui/core/Grid';
import HeaderContainer from './HeaderContainer'
import SideBar from './SideBar'
import LicenseDashbord from './LicenseDashbord'
import GRCDashbord from './GRCDashBord'
import GRCReport from './GRCReport'
import LicenseReport from './LicenseReport'
import GRCRiskTeccReport from './GRCRiskTeccReport'
import ControlDashbord from './ControlDashbord'
import ControlReport from './ControlReport'
import ControlSummaryReport from './ControlSummaryReport'



class Home extends Component {

    componentDidMount() {

    }



    render() {

       let routes=( 
            <Switch>
           <Route path='/grcdashbord' exact  component={GRCDashbord}/>
           <Route path='/' exact component={ControlDashbord}/>
           <Route path='/grcreport' exact  component={GRCReport}/>
           <Route path='/licensedashbord' exact  component={LicenseDashbord}/>
           <Route path='/controldashbord' exact  component={ControlDashbord}/>
           <Route path='/controlreport' exact  component={ControlReport}/>
           <Route path='/controlsummaryreport' exact  component={ControlSummaryReport}/>
           <Route path='/grcrisktechviewreport' exact  component={GRCRiskTeccReport}/>
           <Route path='/licensereport' exact  component={LicenseReport}/>
           </Switch> 
           );
        return (
            <Grid container style={{ }} spacing={0}>
                <Grid container md={12} style={{ paddingLeft: 1 }}>
                <HeaderContainer />
                {routes}
                </Grid> 
            </Grid>

        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {

    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);//connect which return a HOC taking two parameters which help connect to redux store and component