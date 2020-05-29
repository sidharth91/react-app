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
import Dashbord from './Dashbord'



class Home extends Component {

    componentDidMount() {

    }



    render() {


        return (
            <Grid container style={{ }} spacing={0}>
                 {/* <Grid container md={2}>
                    <SideBar />
                </Grid> */}
                <Grid container md={12} style={{ paddingLeft: 1 }}>
                <HeaderContainer />
                 <Dashbord/>
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