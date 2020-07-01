import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import ControlsDraggableDialog from '../component/controlcomponent/ControlsDraggableDialog'
import * as action from '../Store/actions/index'




class ControlDragableDialogue extends Component {

    componentDidMount() {
        if(this.props.chart=="SEC31"){
            this.props.submitcontrolReportFilterSummaryDialogue(this.props.token, this.props.sapSystem.filtered,
                this.props.client.filtered, [])
        }else{
        this.props.submitcontrolReportFilterDialogue(this.props.token, this.props.sapSystem.filtered,
            this.props.client.filtered, this.props.groupby)
        }
    }
        


    
    
    

 

    render() {
        

        return (
            <div>
          {this.props.dialogueState && !this.props.loader && Object.keys(this.props.controltablereport).length>0?<ControlsDraggableDialog dialogueState={this.props.dialogueState} colors={this.props.colors} header={this.props.controltablereport.header} data={this.props.controltablereport.data} closeDialogue={this.props.closeDialogue} name={this.props.controltablereport.reportName?this.props.controltablereport.reportName[0]:"Report Details Report"}/>:null}
          </div>
        )


    }
}

const mapStateToProps = state => {    //this methos use to retrive state from redux store as props
     return {
        token: state.login.token, //state.reducername.value
        sapSystem: state.control.sapSystem,
        client: state.control.client,
        mitigation: state.control.mitigation,
        drillDown: state.control.drillDown,
        controls: state.control.controls,
        control: state.control.control,
        loader:state.control.loader,
        controltablereport:state.control.controltablereport,
        colors:state.control.colors
    };
}

const mapDispatchToProps = dispatch => { // this methos used for dispatch action to reducer
     return {
        submitcontrolReportFilterDialogue: (token, sapSystem, client, control) => dispatch(action.submitcontrolReportFilterDialogue(token, sapSystem, client, control)),
        submitcontrolReportFilterSummaryDialogue: (token, sapSystem, client, control) => dispatch(action.submitcontrolReportFilterSummaryDialogue(token, sapSystem, client, control))
         
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlDragableDialogue);//connect which return a HOC taking two parameters which help connect to redux store and component