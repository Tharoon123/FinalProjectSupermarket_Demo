import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'

function ItemList() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <Image src={img6} roundedCircle style={{
                        height: '131px',
                        width: '180px'
                    }}/>
                    <div style={{
                        paddingLeft: '15px',
                        fontSize: '22px'
                    }}>Grocery Items</div>
                </Col>
                <Col>
                    <Image src={img5} roundedCircle style={{
                        height: '131px',
                        width: '180px'
                    }}/>
                    <div style={{
                        paddingLeft: '35px',
                        fontSize: '22px'
                    }}>Vegetables</div>
                </Col>
                <Col>
                    <Image src={img5} roundedCircle style={{
                        height: '131px',
                        width: '180px'
                    }}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ItemList