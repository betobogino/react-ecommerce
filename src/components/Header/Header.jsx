import { Row } from "react-bootstrap";
import Navbar from "../Navbar/";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup"
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <header>
            <Container>
                <Row className="rowHeaderTop">
                    <div className="rowHeaderTop-logo">
                        <Link to="/">
                            <Image src="assets/img/logo.png" alt="" className="logo"/>
                        </Link>
                    </div>
                    <InputGroup className="rowHeaderTop-search">
                        <Form.Control
                            placeholder="Buscar productos, marcas y mas..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup>
                    <div className="rowHeaderTop-disney">
                        <Image src="assets/img/disney+.webp" alt=""/>
                    </div>
                </Row>
                <Row>
                    <Navbar />
                </Row>
            </Container>
        </header>
    );
}

export default Header;