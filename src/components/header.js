//imports React library
import React from "react";
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


//variables
const logo = require("../assets/logo.png");


//start Header class - export used in order to use component elsewhere
export class Header extends React.Component {
    //start render method
    render() {
        //returns div tag content and print to screen 
        return (
            <div>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Brand href="/home">
                                <img alt="logo" src={logo.default} width="50" height="50" className="d-inline-block align-top" />{' '}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/read">Read</Nav.Link>
                                    <Nav.Link href="/create">Create</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        );
    }//end render method
}//end Header class