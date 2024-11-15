import React from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import ExampleCarouselImage from '../Assets/logo.jpg';
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import { MdDoubleArrow } from 'react-icons/md';

function BodyScreen() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img src={img1} style={{
                                height: '400px',
                                width: '700px'
                            }}></img>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img2} style={{
                                height: '400px',
                                width: '700px'
                            }}></img>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} style={{
                                height: '400px',
                                width: '700px'
                            }}></img>
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img4} style={{
                                height: '400px',
                                width: '700px'
                            }}></img>
                            
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col style={{
                    paddingLeft:'200px'
                }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
    </Container>
    </div>
  )
}

export default BodyScreen