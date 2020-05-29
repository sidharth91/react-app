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
import GRCFilter from './GRCFilter'
import GRCThirdSecData from './GRCThirdSecData'
import GRCFirstSecData from './GRCFirstSecData'
import GRCSecondSecData from './GRCSecondSecData'


class GRCDashBord extends Component {

    componentDidMount() {
        this.props.loadFilter(this.props.token)
    }



    render() {


        return (
            <Grid container  spacing={0}>
                 <Grid item md={12}>
                    <GRCFilter />
                    <GRCFirstSecData/>
                    <GRCSecondSecData result={this.props.result}/>
                    <GRCThirdSecData/>
                    </Grid >
             </Grid>

        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
     return {
        token: state.login.token, //state.reducername.value
        result: state.filter.result
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
     return {
        loadFilter: (token) => dispatch(action.initFilter(token)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GRCDashBord);//connect which return a HOC taking two parameters which help connect to redux store and component