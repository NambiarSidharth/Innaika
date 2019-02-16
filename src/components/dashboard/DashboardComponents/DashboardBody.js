import React, { Component } from 'react'
import PostForm from '../subcomponents/PostForm'
import PostList from '../subcomponents/PostList';
class DashboardBody extends Component {
    
    
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
export default DashboardBody;