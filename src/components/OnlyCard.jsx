import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';






class OnlyCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    render() {
        return (
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Title>{this.props.price}</Card.Title>
                    <Card.Title>{this.props.category}</Card.Title>
                    
                    <Card.Text>{this.props.asin}</Card.Text>
                    <Button variant="primary">{this.props.btnTitle}</Button>
                </Card.Body>
            </Card>
        )
        
}
}
export default OnlyCard;