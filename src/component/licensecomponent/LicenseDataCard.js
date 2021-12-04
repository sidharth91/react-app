import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import * as action from '../../Store/actions/index'

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Typography } from '@material-ui/core';
import ControlCameraIcon from '@material-ui/icons/ControlCamera'
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import FilterTiltShiftIcon from '@material-ui/icons/FilterTiltShift';
import ExploreIcon from '@material-ui/icons/Explore';
import ExploreOffIcon from '@material-ui/icons/ExploreOff';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import ReportIcon from '@material-ui/icons/Report';
import ReportOffIcon from '@material-ui/icons/ReportOff';


const IconArray=[<ControlCameraIcon/>,<FilterCenterFocusIcon/>,<FilterTiltShiftIcon/>,<ExploreIcon/>,<ExploreOffIcon/>,
<PeopleIcon/>,<AccountBoxIcon/>,<PersonIcon/>,<PersonAddDisabledIcon/>,<ReportProblemIcon/>,<ReportIcon/>,<ReportOffIcon/>];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    rounded: {
        color: '#FFFFFF',
        backgroundColor: '#009ed7',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    Labeltext:{
        fontFamily:'Helvetica',
        fontSize:11
    },
    roundedSecond: {
        color: '#FFFFFF',
        backgroundColor: '#00A158',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    roundedThird: {
        color: '#FFFFFF',
        backgroundColor: '#c91e8d',
        width: theme.spacing(4),
        height: theme.spacing(4),

    },
    roundedFourth: {
        color: '#FFFFFF',
        backgroundColor: '#0057BE',
        width: theme.spacing(4),
        height: theme.spacing(4),

    },
    autoMarginTopBottom:{
        marginTop:'auto',
        marginBottom:'auto'
    }


}));


const LicenseDataCard = (props) => {



    const checkForDataToShow = (data) => {
        if (data && Object.keys(data).length > 0) {
            return true;
        }
        return false;
    }

    const getIcon=()=>{
        if(IconArray.length>=props.index){
            return IconArray[props.index]
        }else{
            return IconArray[0]
        }
    }



    const classes = useStyles();
    let isDataReadtToShow = checkForDataToShow(props.result)

    return (

        <div>
            {isDataReadtToShow ?
                <Card elevation='5'>
                   
                        <CardContent style={{ padding: 2, height:"7vh",margin:'auto' }}>
                            <Grid container spacing={1} style={{ height:"inherit",width: '100%', margin: 0 }}>


                                <Grid container spacing={0} style={{margin:'auto'}}>
                                 <Grid item sm={2}>
                                 <Avatar variant="rounded" className={props.index>8?classes.roundedFourth
                                    :props.index>4?classes.roundedThird:props.index>2?classes.roundedSecond:
                                    classes.rounded}>
                                       {getIcon()}
                                    </Avatar>
                                     </Grid>
                                     <Grid item sm={10}> 
                                     <Typography variant="caption" display="block" className={classes.Labeltext}>
                                            {props.result.COL1}
                                        </Typography>
                                        <Typography variant="caption" display="block" className={classes.Labeltext}>
                                        {props.result.ZCOUNT}
                                        </Typography>
                                     </Grid>   
                                     </Grid>


                            </Grid>

                            {/* <Grid container spacing={1}>
                                <Grid item md={4}>
                                    <FilterMultiSelectDropDown values={riskid} preSelected={this.props.riskid.selectedValue} changeEventCallBack={this.changeRiskId} label="Risk Id" width='100' />
                                </Grid>
                                <Grid item md={2}>
                                    <FilterSingleSelectDropDown values={mitigation} preSelected={this.props.risk.selectedValue} changeEventCallBack={this.changeMitigation} label="Mitigation" width='100' />
                                </Grid>
                                <Grid item md={2}>
                                    <FilterSingleSelectDropDown values={reportType} preSelected={this.props.reportType.selectedValue} changeEventCallBack={this.changeReportType} label="Report Type" width='100' />
                                </Grid>
                                <Grid item md={2}>

                                </Grid>
                                <Grid item md={2}>
                                    <Button variant="contained" color="primary"  onClick={()=>this.onfilterSumbit()}>
                                      Search
                                    </Button>
                                </Grid>

                            </Grid> */}
                        </CardContent>
                       
                </Card>
                 : null}
     </div>





    )


}



export default LicenseDataCard;//connect which return a HOC taking two parameters which help connect to redux store and component