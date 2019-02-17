import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
class PostBody extends Component {
  render() {
      const {data} =this.props; 
    return (
      <div className="w-100 ma3 pa3">
      <Card bg="info" text="white" style={{ width: '18rem' }}>
    <Card.Header>{data.username}  {data.time}</Card.Header>
    <Card.Body>
      <Card.Title>{data.username}'s Anno</Card.Title>
      <Card.Text>
        {data.data}
      </Card.Text>
    </Card.Body>
  </Card>
      </div>
    )
  }
}
export default PostBody;