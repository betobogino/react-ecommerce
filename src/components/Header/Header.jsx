import Navbar from "../Navbar/";

import Form from 'react-bootstrap/Form';

import InputGroup from "react-bootstrap/InputGroup"
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row rowHeaderTop">
                    <div className="rowHeaderTop-logo">
                        <Link to="/">
                            <img src="/assets/img/logo.png" alt="" className="logo"/>
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
                        <img src="/assets/img/disney+.webp" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;