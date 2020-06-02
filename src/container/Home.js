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
import Dashbord from './Dashbord'
import GRCDashbord from './GRCDashBord'
import Report from './Report'
import GRCReport from './GRCReport'



class Home extends Component {

    componentDidMount() {

    }



    render() {

       let routes=( 
            <Switch>
           <Route path='/grcdashbord' exact  component={GRCDashbord}/>
           <Route path='/' exact component={GRCDashbord}/>
           <Route path='/grcreport' exact  component={GRCReport}/>
           </Switch> 
           );
        return (
            <Grid container style={{ }} spacing={0}>
                 {/* <Grid container md={2}>
                    <SideBar />
                </Grid> */}
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