import React,{Component} from 'react';
import {connect} from 'react-redux'

import * as action from '../Store/actions/index'
import ApplicationAppBar from '../component/ApplicationAppBar'

class HeaderContainer extends Component{

 componentDidMount(){
 
  }

render(){
    return( 
       <ApplicationAppBar isAuthenticated={this.props.isAuthenticated} username={this.props.username}
        />

  )

}

}

const mapStateToProps = state=>{

    return{
        isAuthenticated: state.login.token !== null,
        username:state.login.username
    };
};

const mapDispatchTpProps=dispatch=>{

    return{

    };
}
export default connect(mapStateToProps,mapDispatchTpProps)(HeaderContainer);