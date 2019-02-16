import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:null,

      }
    }
    
    loadMe() {
        const {userSession} = this.props.auth
        const options = { decrypt: false }
        userSession.getFile(ME_FILENAME, options)
        .then((content) => {
          if(content) {
            const me = JSON.parse(content)
            this.setState({me, redirectToMe: false})
          } else {
            const me = null
    
            this.setState({me, redirectToMe: true})
          }
        })
        console.log(me)
      }
  render() {
    return (
      <div>
        <button onClick={this.loadPost.bind(this)}>click</button>
      </div>
    )
  }
}
PostList.propTypes = {
    auth:PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
    auth:state.auth
})
export default connect(mapStateToProps)(PostList);