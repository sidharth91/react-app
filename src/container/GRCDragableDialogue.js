import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Login.css'
//import * as actionType from '../../Store/actions/actionsType'
import GRCDraggableDialog from '../component/GRCDraggableDialog'




class GRCDragableDialogue extends Component {

    componentDidMount() {
        
    }

 

    render() {


        return (
       
          <GRCDraggableDialog dialogueState={this.props.dialogueState} />
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

export default connect(mapStateToProps, mapDispatchToProps)(GRCDragableDialogue);//connect which return a HOC taking two parameters which help connect to redux store and component