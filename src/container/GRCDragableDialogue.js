import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import GRCDraggableDialog from '../component/grccomponent/GRCDraggableDialog'
import * as action from '../Store/actions/index'




class GRCDragableDialogue extends Component {

    componentDidMount() {
        if(this.props.chart=="SEC34"){
            this.props.riskReport(this.props.token,
                this.props.sapSystem.filtered,
                this.props.client.filtered,
                this.props.level.filtered,
                this.props.riskType.filtered,
                this.props.riskLevel.filtered,
                this.props.businessModule.filtered,
                this.props.mitigation.filtered,
                this.props.drillDown.selectedValue,
                this.props.riskid.filtered, 
                this.props.groupby)
        }
        else{
        if(this.props.reportType.selectedValue=='1'){
            this.props.riskReport(this.props.token,
                this.props.sapSystem.filtered,
                this.props.client.filtered,
                this.props.level.filtered,
                [this.props.groupby],
                this.props.riskLevel.filtered,
                this.props.businessModule.filtered,
                this.props.mitigation.filtered,
                this.props.drillDown.selectedValue,
                this.props.riskid.filtered, null)
        }
         if(this.props.reportType.selectedValue=='2'){
            this.props.riskReport(this.props.token,
                this.props.sapSystem.filtered,
                this.props.client.filtered,
                this.props.level.filtered,
                this.props.riskType.filtered,
                [this.props.groupby],
                this.props.businessModule.filtered,
                this.props.mitigation.filtered,
                this.props.drillDown.selectedValue,
                this.props.riskid.filtered, null)
        }

        if(this.props.reportType.selectedValue=='3'){
            this.props.riskReport(this.props.token,
                this.props.sapSystem.filtered,
                this.props.client.filtered,
                this.props.level.filtered,
                this.props.riskType.filtered,
                this.props.riskLevel.filtered,
                [this.props.groupby],
                this.props.mitigation.filtered,
                this.props.drillDown.selectedValue,
                this.props.riskid.filtered, null)
        }
    }

        }
       

    
    
    

 

    render() {
        

        return (
            <div>
          {Object.keys(this.props.tableReport).length>0?<GRCDraggableDialog dialogueState={this.props.dialogueState} colors={this.props.colors} header={this.props.tableReport.header} data={this.props.tableReport.data} closeDialogue={this.props.closeDialogue}/>:null}
          </div>
        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
     return {
        token: state.login.token, //state.reducername.value
        isUserLogedIn: state.login.isUserLogedIn,
        username: state.login.username,
        riskType: state.filter.riskType,
        sapSystem: state.filter.sapSystem,
        client: state.filter.client,
        riskLevel: state.filter.riskLevel,
        businessModule: state.filter.businessModule,
        mitigation: state.filter.mitigation,
        level: state.filter.level,
        reportType: state.filter.reportType,
        riskid: state.filter.riskid,
        drillDown: state.filter.drillDown,
        breakDown: state.filter.breakDown,
        result: state.filter.result,
        userinput:state.filter.userinput,
        tableReport: state.filter.tableReport,
        levelSelected:state.filter.levelSelected ,
        reportTypeSelected: state.filter.reportTypeSelected,
        colors:state.filter.colors
        
    };
}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
     return {
        riskReport: (token, sapSystem, client, level, riskType, riskLevel, businessModule, mitigation, drillDown, riskId, userinput) => dispatch(action.riskReport(token, sapSystem, client, level, riskType, riskLevel, businessModule, mitigation, drillDown, riskId, userinput))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GRCDragableDialogue);//connect which return a HOC taking two parameters which help connect to redux store and component