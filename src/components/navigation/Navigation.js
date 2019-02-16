import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
class Navigation extends Component {
  logoutHandler=()=>{
    const {userSession}= this.props.auth;
    const {history} = this.props;
    userSession.signUserOut();
   history.push('/')
  }
  render() {
    const {userSession} = this.props.auth;
    let userData = userSession.loadUserData()
    console.log(userData)
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="/dashboard">
  Innaika
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="#about">About</Nav.Link>
     <Nav.Link href="#" onSelect={this.logoutHandler}>Log Out</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}
Navigation.propTypes = {
  auth:PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
  auth:state.auth
})

export default connect(mapStateToProps)(withRouter(Navigation));