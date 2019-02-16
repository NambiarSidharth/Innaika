import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
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
        this.setState({savingPost: true})
        const options = { encrypt: false }
        userSession.putFile(`my_posts`, JSON.stringify(post), options)
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
    auth:PropTypes.object.isRequired
}
const mapStateToProps = (state)=>({
    auth:state.auth
})

export default connect(mapStateToProps)(PostForm);