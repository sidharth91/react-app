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
import GRCDashbord from './GRCDashBord'
import { Route, Switch,withRouter,Redirect } from 'react-router-dom';



class DashBord extends Component {

    componentDidMount() {

    }



    render() {
        let routes=( 
            <Switch>
           <Route path='/dashbord/grcDashbord' component={GRCDashbord}/>
           <Redirect to ='/dashbord/grcDashbord'/>
           </Switch> 
           );

        return (
            <Grid container style={{ marginTop:25,marginRight:10,marginLeft:10 }} spacing={0}>
              {routes}
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

export default connect(mapStateToProps, mapDispatchToProps)(DashBord);//connect which return a HOC taking two parameters which help connect to redux store and component