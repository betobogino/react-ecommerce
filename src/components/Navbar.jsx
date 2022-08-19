import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from './NavDropdown';

const links = [
	'Ofertas',
	'Historial',
	'Supermercado',
	'Moda',
	'Vender',
	'Ayuda',
];

const navLinks = links.map((link, index) => {
	return <NavLink key={index}>{link}</NavLink>;
});
function navbar() {
	return (
		<Container>
			<Navbar bg='light' expand='lg'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<NavDropdown></NavDropdown>
						<Nav>{navLinks}</Nav>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}

export default navbar;
