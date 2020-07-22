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
import GRCFilter from '../component/grccomponent/GRCFilter'
import GRCThirdSecData from '../component/grccomponent/GRCThirdSecData'
import GRCFirstSecData from '../component/grccomponent/GRCFirstSecData'
import GRCFourthSecData from '../component/grccomponent/GRCFourthSecData'
import GRCSecondSecData from '../component/grccomponent/GRCSecondSecData'
import GRCDataCard from '../component/grccomponent/GRCDataCard'
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
            <Grid container  style={{ marginTop:10,marginRight:10,marginLeft:10 }} spacing={0}>
                 <Grid item md={12}>
                    {this.props.sapSystem.value.length>0?<GRCFilter type='Dashbord' />:null}
                    <GRCThirdSecData dialogueOpen={this.openDialogue}/>
                   
                    {this.props.result? 
                    <Grid container style={{marginTop:5}} spacing={2}>
                        <Grid item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[0]} index={0}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[1]} index={1}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[2]} index={2}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[3]} index={3}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[4]} index={4}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[5]} index={5}/></Grid>
                    </Grid >:null
                    }      
                    {/* <GRCSecondSecData result={this.props.result}/> */}


                    <GRCFourthSecData dialogueOpen={this.openDialogue}/>

                    {this.props.result? 
                    <Grid container style={{marginTop:5}} spacing={2}>
                        <Grid item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[6]} index={6}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[7]} index={7}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[8]}index={8}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[9]} index={9}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[10]} index={10}/></Grid>
                        <Grid  item md={2}> <GRCDataCard result={this.props.result.E_RESULT_02.data[11]} index={11}/></Grid>
                    </Grid >:null
                    }


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
        loader:state.filter.loader,
        
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