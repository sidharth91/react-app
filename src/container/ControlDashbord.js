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
import ControlFilter from '../component/controlcomponent/ControlFilter'
import ControlFirstSection from '../component/controlcomponent/ControlFirstSection'
import ControlThirdSection from '../component/controlcomponent/ControlThirdSection'
import ControlSecondSecData from '../component/controlcomponent/ControlSecondSecData'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import LicenseSecondSecData from '../component/licensecomponent/LicenseSecondSecData'
import LicenceThirdSection from '../component/licensecomponent/LicenceThirdSection'
import Loader from '../component/Loader'
import ControlsDraggableDialog from './ControlDragableDialogue'



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
        this.setState({dialogue:true,groupby:groupby,chart:chart})
   }
   closeDialogue=()=>{
       this.props.clearControlTableReport()
       this.setState({dialogue:false,groupby:'',chart:''})
  }



    render() {


        return (
            <Grid container style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }} spacing={0}>
                <Grid item md={12}>
                {this.props.sapSystem.value.length>0?<ControlFilter type='Dashbord' />:null}
                <ControlFirstSection dialogueOpen={this.openDialogue}/>
                <ControlSecondSecData result={this.props.controlresult}/>
                <ControlThirdSection dialogueOpen={this.openDialogue}/>
                {this.props.loader?<Loader/>:null}
                {this.state.dialogue?<ControlsDraggableDialog dialogueState={this.state.dialogue} groupby={this.state.groupby} chart={this.state.chart} closeDialogue={this.closeDialogue}/>:null}
                    {/* <LicenceFirstSection dialogueOpen={this.openDialogue}/>
                    <ControlSecondSecData result={this.props.licenseresult}/>
                    <LicenceThirdSection result={this.props.licenseresult} dialogueOpen={this.openDialogue}/>
                    {this.props.loader?<Loader/>:null}
                    {this.state.dialogue?<LicenceDragableDialogue dialogueState={this.state.dialogue} groupby={this.state.groupby} chart={this.state.chart} closeDialogue={this.closeDialogue}/>:null} */}
                </Grid>
            </Grid>
        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        controlresult:state.control.controlresult,
        loader:state.control.loader,
        sapSystem: state.control.sapSystem,
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {
        loadFilter: (token) => dispatch(action.initControlFilter(token)),
        updatePathname: (value) => dispatch(action.updatePathname(value)),
        clearControlTableReport:()=>dispatch(action.clearControlTableReport())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseDashbord);//connect which return a HOC taking two parameters which help connect to redux store and component