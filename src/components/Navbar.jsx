import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from './NavDropdown';

function navbar() {
	const links = [
		'Ofertas',
		'Historial',
		'Supermercado',
		'Moda',
		'Vender',
		'Ayuda',
	];

	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>React-Ecommerce</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<NavDropdown></NavDropdown>
						{links.forEach((link) => {
							<Nav.Link href='#link'>{link}</Nav.Link>;
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default navbar;
