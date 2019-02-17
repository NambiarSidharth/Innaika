import React, { Component } from 'react'
import PostForm from '../subcomponents/PostForm';
import PostList from '../subcomponents/PostList';
import {connect} from 'react-redux';
import {retrPost} from '../../../store/actions/postActions';
import Proptypes from 'prop-types';
class DashboardBody extends Component {
    
  componentWillMount(){
    const {userSession} = this.props.auth 
    
   this.props.retrPost(userSession);
   console.log("next one")  
   const {posts} = this.props.post
    console.log(posts)
  }
    
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
        user navs
        </div>
        <div className="col-md-8 col-sm-12 mt2">
        <PostForm />
        <div className="row">
        <PostList/>
        </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>({
  auth:state.auth,
  post:state.post
})
export default connect(mapStateToProps,{retrPost})(DashboardBody);