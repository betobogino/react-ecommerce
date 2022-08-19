import NavDropdown from 'react-bootstrap/NavDropdown';

const itemsDropdown = [
	'Vehiculos',
	'Inmuebles',
	'Supermercado',
	'Tecnologia',
	'Hogar y Muebles',
	'Electrodomesticos',
	'Herramientas',
	'Construccion',
	'Deportes y Fitness',
	'Accesorios para Vehiculos',
	'Moda',
	'Juegos y Juguetes',
	'Bebés',
	'Belleza y Cuidado Personal',
	'Salud y Equipamiento Médico',
	'Industrias y Oficinas',
	'Agro',
	'Productos Sustentables',
	'Servicios',
	'Más vendidos',
	'Tiendas oficiales',
	'Ver más categorías',
];

const navsItemsDropdown = itemsDropdown.map((items, index) => {
	return (
		<NavDropdown.Item href='#action/3.1' key={index}>
			{items}
		</NavDropdown.Item>
	);
});
function navDropdown() {
	return (
		<NavDropdown title='Categorias' id='basic-nav-dropdown'>
			{navsItemsDropdown}
		</NavDropdown>
	);
}

export default navDropdown;
