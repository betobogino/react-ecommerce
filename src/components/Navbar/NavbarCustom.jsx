import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { IconWidgetCart } from '../IconWidget/IconWidgetCart';
import { IconWidgetBell } from '../IconWidget/IconWidgetBell';

import NavDropdown from './NavDropdown';

import './NavbarCustom.css';
import { AddressSend } from '../AddressSend/AddressSend';

const linksCategories = [
	'Ofertas',
	'Historial',
	'Supermercado',
	'Moda',
	'Vender',
	'Ayuda',
];

const navCategories = linksCategories.map((link, index) => {
	return <NavLink key={index}>{link}</NavLink>;
});

const linksProfile = [
	'Beto',
	'Mis compras',
	'Favoritos',
];

const navProfile = linksProfile.map((link, index) => {
	return <NavLink key={index}>{link}</NavLink>;
})

export const NavbarCustom = () => {
	return (
		<Container>
			<Navbar expand='lg'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<NavLink>
							<AddressSend name="Alberto" address="España 235"/>
						</NavLink>
					</Nav>
					<Nav className='me-auto'>
						<NavDropdown></NavDropdown>
						<Nav>{navCategories}</Nav>
					</Nav>
					<Nav>
						{navProfile}
						<NavLink>
							<IconWidgetBell />
						</NavLink>
						<NavLink>
							<IconWidgetCart />
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}
