
import React from 'react'
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import logo from '../Assets/logo.jpg'
import ReactSearchBox from 'react-search-box'
import { BsCart4, BsHeartFill } from 'react-icons/bs'
import { BiSearchAlt, BiUserPlus } from 'react-icons/bi'

function HeaderS() {

    console.log(logo)

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container style={{
                background: '',
            }}>
                <Row>
                <Col style={{
                    //background: 'blue',
                    
                }}>
                <Navbar.Brand href="#home"> <img src={logo} alt='logo' style={{
                    height: '100px',
                    width: '100px',
                    
                    
                }}/></Navbar.Brand>
                </Col>
                <Col style={{
                    //background: 'green'
                }}>
                    <Form.Control type="email" placeholder="Search Items" style={{
                        marginTop: '30px',
                        width:'500px'
                    }}/>
                </Col >
                <Col style={{
                    //background: 'red'
                }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{
                        marginTop: '30px',
                        marginLeft: '200px'
                    }}>
                    <Nav className="me-auto" >
                        
                        <Nav.Link href="#contact" >Contact Us </Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>

                    </Navbar.Collapse>
                </Col>
                </Row>
            </Container>
        </Navbar>
        
    </div>
  )
}

export default HeaderS