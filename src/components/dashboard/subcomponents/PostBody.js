import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
class PostBody extends Component {
  render() {
      const {data} =this.props; 
    return (
      <div className="w-100 ma3 pa3">
      <Card>
      <Card.Header >
      <div>
      {data.username}
      </div>
      </Card.Header>
      <Card.Body className="text-center">
        <Card.Title>Text Annon</Card.Title>
        <Card.Text>
         {data.data}
        </Card.Text>
        <Button variant="primary">encourage</Button>
        <Button variant="danger">discourage</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{data.time}</Card.Footer>
    </Card>
      </div>
    )
  }
}
export default PostBody;