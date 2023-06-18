import React, { Component } from 'react';
import './book.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';





class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="book">
                <div className="bookImg">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="bookInfo">
                    <p>{this.props.title}</p>
                    <p>{this.props.price}</p>
                    <p>{this.props.category}</p>
                    <p>{this.props.asin}</p>
                    <button>{this.props.btnTitle}</button>
                </div>

            </div>

        );
    }
}
export default Book;