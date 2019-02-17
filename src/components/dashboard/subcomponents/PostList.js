import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {retrPost} from '../../../store/actions/postActions';
import PostBody from './PostBody'
class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
    componentDidMount(){
      let {posts} = this.props.post;
      this.setState({posts});
      console.log(posts)
    }
  render() {
    let {posts} = this.props.post;

    let postComp = posts.map((obj,i)=>{
      return <PostBody key={i} data={obj}/>
    })
    return (
      <div className="h5">
        {postComp}
      </div>
    )
  }
}
PostList.propTypes = {
    auth:PropTypes.object.isRequired,
    post:PropTypes.object.isRequired,
    retrPost:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
    auth:state.auth,
    post:state.post
})
export default connect(mapStateToProps,{retrPost})(PostList);