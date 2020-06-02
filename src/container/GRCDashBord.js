import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
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


class GRCDashBord extends Component {
    state={
        dialogue:false,
        groupby:'',
        chart:''
    }

    componentDidMount() {
        const {pathname} = this.props.location;
        this.props.updatePathname(pathname)
        this.props.loadFilter(this.props.token)
    }

 
    openDialogue=(chart,groupby)=>{
         console.log("reached parents"+groupby)
         this.setState({dialogue:true,groupby:groupby,chart:chart})
    }
    closeDialogue=()=>{
        this.props.clearriskReport()
        this.setState({dialogue:false,groupby:'',chart:''})
   }

    render() {


        return (
            <Grid container  style={{ marginTop:25,marginRight:10,marginLeft:10 }} spacing={0}>
                 <Grid item md={12}>
                    {this.props.sapSystem.value.length>0?<GRCFilter type='Dashbord' />:null}
                    <GRCThirdSecData dialogueOpen={this.openDialogue}/>
                    <GRCSecondSecData result={this.props.result}/>
                    <GRCFirstSecData dialogueOpen={this.openDialogue}/>
                    {this.props.loader?<Loader/>:null}
                    {this.state.dialogue?<GRCDragableDialogue dialogueState={this.state.dialogue} groupby={this.state.groupby} chart={this.state.chart} closeDialogue={this.closeDialogue}/>:null}
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
        loader:state.filter.loader
    };
}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
     return {
        loadFilter: (token) => dispatch(action.initFilter(token)),
        clearriskReport:()=>dispatch(action.clearriskReport()),
        updatePathname:(value)=>dispatch(action.updatePathname(value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GRCDashBord));//connect which return a HOC taking two parameters which help connect to redux store and component