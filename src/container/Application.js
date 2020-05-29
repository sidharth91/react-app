import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import { Route, Switch,withRouter,Redirect } from 'react-router-dom';
import * as action from '../Store/actions/index'
import Login from './Login'
import Home from './Home'
import SideBar from './SideBar'


class Application extends Component{

 componentDidMount(){
  this.props.onTryAutoSignup();

  }

render(){

  console.log(this.props.isAuthenticated)
  let routes = (
    <Switch>
    <Route path='/auth' render={(props) =>   <Login/>}/>
    <Route path='/' exact render={(props) =>  <Login/>}/>
    <Redirect to ='/auth'/>
    </Switch>
    )

  if ( this.props.isAuthenticated ) {
   routes=( 
    <Switch>
   <Route path='/dashbord' component={Home}/>
   <Redirect to ='/dashbord'/>
   </Switch> 
   );
  }


    return( 
    <Fragment> 
      
{routes}
 
    </Fragment>
  )

}

}

const mapStateToProps = state=>{

  return{
    token:state.login.token, 
    isUserLogedIn:state.login.isUserLogedIn,
    error:state.login.error,
    systemConfig:state.login.systemConfig,
    isAuthenticated: state.login.token !== null
 };
};

const mapDispatchTpProps=dispatch=>{
  return{
    onTryAutoSignup: () => dispatch( action.authCheckState()),
   };
}
export default connect(mapStateToProps,mapDispatchTpProps)(Application);