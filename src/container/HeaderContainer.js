import React,{Component} from 'react';
import {connect} from 'react-redux'

import * as action from '../Store/actions/index'
import ApplicationAppBar from '../component/ApplicationAppBar'
import {withRouter} from 'react-router-dom';
class HeaderContainer extends Component{

 componentDidMount(){
  
  }

render(){
     console.log(this.props.pathname)
    return( 
       <ApplicationAppBar isAuthenticated={this.props.isAuthenticated} username={this.props.username}
       pathname={this.props.pathname} onLogout={this.props.onLogout}
        />

  )

}

}

const mapStateToProps = state=>{

    return{
        isAuthenticated: state.login.token !== null,
        username:state.login.username,
        pathname:state.sidebar.pathname
    };
};

const mapDispatchTpProps=dispatch=>{

    return{
        onLogout: () => dispatch(action.onLogout()),
    };
}
export default connect(mapStateToProps,mapDispatchTpProps)(withRouter(HeaderContainer));