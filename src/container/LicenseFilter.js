import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../Store/actions/index'
import logo_icon from '../resources/auditbotlogo.PNG'
import FilterSingleSelectDropDown from '../component/licensecomponent/FilterSingleSelectDropDown'
import FilterMultiSelectDropDown from '../component/licensecomponent/FilterMultiSelectDropDown'
import Datepicker from '../component/licensecomponent/Datepicker'
import LoginCard from '../component/LoginCard'
import Grid from '@material-ui/core/Grid';
import HeaderContainer from './HeaderContainer'
import SideBar from './SideBar'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';




class LicenseFilter extends Component {

    componentDidMount() {
    }



    changeSystem = (value) => {
        this.props.onChangeFilter(this.props.sapSystem, value)
    }
    changeClient = (value) => {
        this.props.onChangeFilter(this.props.client, value)
    }

    changeLevel = (value) => {
        this.props.onChangeFilter(this.props.level,value)
    }

    changeUserType = (value) => {
        this.props.onChangeFilter(this.props.userType, value)
    }

    changeUserGroup = (value) => {
        this.props.onChangeFilter(this.props.userGroup, value)
    }
    changeAccount = (value) => {
        this.props.onChangeFilter(this.props.account, value)
    }

    changeLicenseType = (value) => {
        this.props.onChangeFilter(this.props.licenseType, value)
    }

    changeUserStatus = (value) => {
        this.props.onChangeFilter(this.props.userStatus, value)
    }

    changeActiveUser= (value) => {
        this.props.onChangeFilter(this.props.activeUser, value)
    }
    changeTcodes = (value) => {
        this.props.onChangeFilter(this.props.tcodes, value)
    }

    changeCriteria = (value) => {
        this.props.onChangeFilter(this.props.criteria, value)
    }


    onfilterSumbit = () => {

        if (this.props.type == 'Dashbord') {
            this.props.submitFilter(this.props.token, this.props.riskType.selectedValue,
                this.props.sapSystem.selectedValue, this.props.client.selectedValue,
                this.props.riskLevel.selectedValue, this.props.businessModule.selectedValue,
                this.props.level.selectedValue, this.props.breakDown.selectedValue,
                this.props.riskid.selectedValue, this.props.reportType.selectedValue,
                this.props.mitigation.selectedValue)
        } else {
            this.props.submitGRCFilter(this.props.token,
                this.props.sapSystem.selectedValue,
                this.props.client.selectedValue,
                this.props.level.selectedValue,
                this.props.riskType.selectedValue,
                this.props.riskLevel.selectedValue,
                this.props.businessModule.selectedValue,
                this.props.mitigation.selectedValue,
                this.props.drillDown.selectedValue,
                this.props.riskid.selectedValue, this.props.userinput)
        }

    }
    render() {


        let sapSystem = Object.keys(this.props.sapSystem).length != 0 ?
            this.props.sapSystem.value.map((param) => {
                return { 'key': param.ZID, 'value': param.ZID };
            }) : []

        let sapClient = Object.keys(this.props.client).length != 0 ?
            this.props.client.value.map((param) => {
                return { 'key': param.ZID, 'value': param.ZID };
            }) : []
        let level = Object.keys(this.props.level).length != 0 ?
            this.props.level.value.map((param) => {
                return { 'key': param.ZDESC, 'value': param.ZID };
            }) : []
        let userType=Object.keys(this.props.userType).length != 0 ?
        this.props.userType.value.map((param) => {
            return { 'key': param.ZDESC, 'value': param.ZID };
        }) : []

        let userGroup=Object.keys(this.props.userGroup).length != 0 ?
        this.props.userGroup.value.map((param) => {
            return { 'key': param.ZDESC, 'value': param.ZID };
        }) : []

        let account=Object.keys(this.props.account).length != 0 ?
        this.props.account.value.map((param) => {
            return { 'key': param.ZDESC, 'value': param.ZID };
        }) : []
        let licenseType=Object.keys(this.props.licenseType).length != 0 ?
        this.props.licenseType.value.map((param) => {
            return { 'key': param.ZDESC, 'value': param.ZID };
        }) : []
        let userStatus=Object.keys(this.props.userStatus).length != 0 ?
        this.props.userStatus.value.map((param) => {
            return { 'key': param.ZDESC, 'value': param.ZID };
        }) : []
        let activeUser=Object.keys(this.props.activeUser).length != 0 ?
        this.props.activeUser.value.map((param) => {
            return { 'key': param.ZDESC, 'value': param.ZID };
        }) : []
        let tcodes=Object.keys(this.props.tcodes).length != 0 ?
        this.props.tcodes.value.map((param) => {
            return { 'key': param.ZDESC, 'value': param.ZID };
        }) : []
        let criteria=Object.keys(this.props.criteria).length != 0 ?
        this.props.criteria.value.map((param) => {
            return { 'key': param.ZDESC, 'value': param.ZID };
        }) : []


        return (
            // <Grid container style={{}} spacing={0}>
            //     <Grid item md={12}>
            <Card elevation='5' >
                <CardContent id="idFilterCard" style={{ minHeight: '7vh', padding: 0, marginTop: 'auto', marginBottom: 'auto' }}>
                    <Grid container spacing={1} style={{ marginTop: 'auto', marginBottom: 'auto', height: 'inherit', minHeight: 'inherit' }} >

                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={sapSystem} preSelected={this.props.sapSystem.selectedValue} changeEventCallBack={this.changeSystem} label="System" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={sapClient} preSelected={this.props.client.selectedValue} changeEventCallBack={this.changeClient} label="Client" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={level} preSelected={this.props.level.selectedValue} changeEventCallBack={this.changeLevel} label="Level" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={userType} preSelected={this.props.userType.selectedValue} changeEventCallBack={this.changeUserType} label="User Type" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={userGroup} preSelected={this.props.userGroup.selectedValue} changeEventCallBack={this.changeUserGroup} label="User Grooup" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={account} preSelected={this.props.account.selectedValue} changeEventCallBack={this.changeAccount} label="Account" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={licenseType} preSelected={this.props.licenseType.selectedValue} changeEventCallBack={this.changeLicenseType} label="License Type" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={userStatus} preSelected={this.props.userStatus.selectedValue} changeEventCallBack={this.changeUserStatus} label="User Status" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={activeUser} preSelected={this.props.activeUser.selectedValue} changeEventCallBack={this.changeActiveUser} label="Active User" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={tcodes} preSelected={this.props.tcodes.selectedValue} changeEventCallBack={this.changeTcodes} label="Tcodes" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                            <FilterSingleSelectDropDown values={criteria} preSelected={this.props.criteria.selectedValue} changeEventCallBack={this.changeCriteria} label="Criteria" width='100' />
                        </Grid>
                        <Grid item md={1} style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                           <Datepicker/>
                        </Grid>


                    </Grid>


                </CardContent>

            </Card>
            //     </Grid>

            // </Grid>

        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
    return {
        token: state.login.token, //state.reducername.value
        sapSystem: state.licensefilter.sapSystem,
        client: state.licensefilter.client,
        level: state.licensefilter.level,
        userType:state.licensefilter.userType,
        userGroup:state.licensefilter.userGroup,
        account:state.licensefilter.account,
        licenseType:state.licensefilter.licenseType,
        userStatus:state.licensefilter.userStatus,
        activeUser:state.licensefilter.activeUser,
        tcodes:state.licensefilter.tcodes,
        criteria:state.licensefilter.criteria
 
    };

}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
    return {

        onChangeFilter: (data, value) => dispatch(action.changeLicenceFilter(data, value)),
        changeUserInput: (value) => dispatch(action.changeUserInput(value)),
        changeLevel: (level) => dispatch(action.changeLevel(level)),
        submitFilter: (token, riskType, sapSystem, client, riskLevel, businessModule, level, breakDown, riskId, reportType, mitigation) => dispatch(action.submitFilter(token, riskType, sapSystem, client, riskLevel, businessModule, level, breakDown, riskId, reportType, mitigation))

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseFilter);//connect which return a HOC taking two parameters which help connect to redux store and component