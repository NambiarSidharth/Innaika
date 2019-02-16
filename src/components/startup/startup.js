import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {setCurrentUser} from '../../store/actions/authAction';

class Startup extends Component {
    logInHandle=()=>{
        const {userSession} = this.props.auth;
        userSession.redirectToSignIn();
      }
      componentDidMount= async()=>{
        const {userSession} = this.props.auth;
        const {history} = this.props;
        if(!userSession.isUserSignedIn() && userSession.isSignInPending()){
          userSession.handlePendingSignIn()
            .then(userData=>{
              if(!userData.username){
                throw new Error('This app requires username')
              }
              this.props.setCurrentUser()
    
              history.push("/dashboard")
            })
            .catch(err=>{
              console.log(err)
            })
          
        }
      }
  render() {
    return (
      
      <div>
      <header className="sans-serif">
  <div className="cover bg-left bg-center-l dash">
    <div className="bg-black-80 pb5 pb6-m pb7-l">
      <nav className="dt w-100 mw8 center"> 
        <div className="dtc w2 v-mid pa3">
          <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
            Innaika
          </a>
        </div>
        <div className="dtc v-mid tr pa3">
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >How it Works</a> 
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >About</a> 
          <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Core Team</a> 
        </div>
      </nav> 
      <div className="tc-l mt4 mt5-m mt6-l ph3">
        <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Welcome to Innaika</h1>
        <h2 className="fw1 f3 white-80 mt3 mb4">A Decentralized Social Network</h2>
        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="#" onClick={this.logInHandle}>Login</a>
       </div>
    </div>
  </div> 
</header>
      </div>
    )
  }
}
Startup.propTypes={
    auth:PropTypes.object.isRequired,
    setCurrentUser:PropTypes.func.isRequired
}

const mapStateToProps=(state)=>({
    auth:state.auth
})

export default connect(mapStateToProps,{setCurrentUser})(withRouter(Startup));
