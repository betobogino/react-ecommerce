import NavDropdown from 'react-bootstrap/NavDropdown';
function navDropdown() {
	return (
		<NavDropdown title='Categorias' id='basic-nav-dropdown'>
			<NavDropdown.Item href='#action/3.1'>Vehiculos</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.2'>Inmuebles</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Supermercado</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Tecnologia</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Hogar y Muebles</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.1'>Electrodomesticos</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.2'>Herramientas</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Construccion</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Deportes y Fitness</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>
				Accesorios para Vehiculos
			</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Moda</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Juegos y Juguetes</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Bebés</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>
				Belleza y Cuidado Personal
			</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>
				Salud y Equipamiento Médico
			</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>
				Industrias y Oficinas
			</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Agro</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>
				Productos Sustentables
			</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Servicios</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Más vendidos</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Tiendas oficiales</NavDropdown.Item>
			<NavDropdown.Item href='#action/3.3'>Ver más categorías</NavDropdown.Item>

			<NavDropdown.Divider />
			<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
		</NavDropdown>
	);
}

export default navDropdown;
