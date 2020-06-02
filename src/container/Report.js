import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'

import Grid from '@material-ui/core/Grid';
import HeaderContainer from './HeaderContainer'
import SideBar from './SideBar'
import GRCReport from './GRCReport'
import { Route, Switch,withRouter,Redirect } from 'react-router-dom';
import GRCReportTable from '../component/grccomponent/GRCReportTable'




class Report extends Component {

    componentDidMount() {

    }



    render() {
        let routes=( 
            <Switch>
           <Route path='/report/grcReport' component={GRCReport}/>
           <Redirect to ='/report/grcReport'/>
           </Switch> 
           );

        return (
            <Grid container style={{ marginTop:25,paddingRight:10,paddingLeft:10 }} spacing={0}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Report);//connect which return a HOC taking two parameters which help connect to redux store and component