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
import Loader from '../component/Loader'
import GRCDragableDialogue from './GRCDragableDialogue'
import GRCReportTable from '../component/GRCReportTable'

class GRCReport extends Component {

    componentDidMount() {
        this.props.loadFilter(this.props.token)
    }

 
    openDialogue=(type,ztype)=>{
         
    }

    render() {


        return (
            <Grid container  spacing={0}>
                 <Grid item md={12} style={{margin:5}}>
                    {this.props.sapSystem.value.length>0?<GRCFilter type='Report'/>:null}
                    {Object.keys(this.props.grcreport).length>0?<GRCReportTable header={this.props.grcreport.header} data={this.props.grcreport.data}/>:null}
                    {this.props.loader?<Loader/>:null}
                    </Grid >
             </Grid>

        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
     return {
        token: state.login.token, //state.reducername.value
        result: state.filter.result,
        sapSystem: state.filter.sapSystem,
        client: state.filter.client,
        loader:state.filter.loader,
        grcreport:state.filter.grcreport
    };
}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
     return {
        loadFilter: (token) => dispatch(action.initFilter(token))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GRCReport);//connect which return a HOC taking two parameters which help connect to redux store and component