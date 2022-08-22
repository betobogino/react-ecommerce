import { Row } from "react-bootstrap";
import { NavbarCustom } from "../Navbar/NavbarCustom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup"

import './Header.css';

export const Header = () => {
    return (
        <header>
            <Container>
                <Row className="rowHeaderTop">
                    <div className="rowHeaderTop-logo">
                        <Image src="assets/img/logo.png" alt="" className="logo"/>
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
                    <NavbarCustom />
                </Row>
            </Container>
        </header>
    );
}