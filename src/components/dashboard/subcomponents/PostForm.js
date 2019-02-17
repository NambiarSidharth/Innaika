import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPost} from '../../../store/actions/postActions';
class PostForm extends Component {
    constructor(props){
        super(props)
    this.state={
        post:'',
        savingPost:false
    }
    this.savePost=this.savePost.bind(this);
}
    postSubmit(e){
        e.preventDefault();
        let post = this.state.post;
        this.savePost(post)
    }
    savePost(post) {

        const {userSession} = this.props.auth;
        const userData = userSession.loadUserData();
        const {posts} = this.props.post;
        let data={
            time:Date.now(),
            username:userData.username,
            data:post
        }
        this.setState({savingPost: true})
        posts.push(data);
        this.props.addPost(posts,userSession);
        // .finally(() => {
        //   this.setState({savingMe: false})
        // })
      }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
  render() {
    return (
      <div>
      <form onSubmit={this.postSubmit.bind(this)}>
      <div className="form-group">
      <textarea rows="4" cols="30" className="form-control" onChange={this.onChange.bind(this)} name="post" value={this.state.post} placeholder="share your mind">
      </textarea>
      <button type="submit" className="btn btn-info mt2" >
      Post
      </button>
      </div>
      </form>
      </div>
    )
  }
}
PostForm.propTypes={
    auth:PropTypes.object.isRequired,
    post:PropTypes.object.isRequired,
    addPost:PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
    auth:state.auth,
    post:state.post
})

export default connect(mapStateToProps,{addPost})(PostForm);