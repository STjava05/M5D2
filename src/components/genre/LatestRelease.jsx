import React, { Component } from 'react';
import './latestRelease.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OnlyCard from '../OnlyCard';





class LatestRelease extends Component {
    
    render() {
        const { listBook} = this.props;
        return (
            <>
           <Container>
            <Row>
                <Col className='d-flex flex-wrap gap-2 mt-5 align-items-center justify-content-center'>
                    {listBook && listBook.map((bookItem) => {
                        return (
                            <OnlyCard
                                key={bookItem.asin}
                                img={bookItem.img}
                                title={bookItem.title}
                                price={bookItem.price}
                                category={bookItem.category}
                                btnTitle="Vai al prodotto"
                            />  
                        )
                        
                    })

                    }

                </Col> 
            </Row>
           </Container>
           </>
        );

    }


}
export default LatestRelease;