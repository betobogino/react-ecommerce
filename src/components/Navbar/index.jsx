import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IconWidgetCart } from '../IconWidget/IconWidgetCart';
import { IconWidgetBell } from '../IconWidget/IconWidgetBell';

import './index.css';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
  const { cartItems, quantityItems } = useContext(CartContext);
  
  // let totalQuantity = 0

  // for (const item of cartItems) {
  //   //totalQuantity = totalQuantity + item.quantity
  //   totalQuantity += item.quantity
  // }

	return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navLink" to={"/category/1"}>Teclados</Link>
            </li>
            <li className="nav-item">
              <Link className="navLink" to={"/category/2"}>Mouses</Link>
            </li>
            <li className="nav-item">
              <Link className="navLink" to={"/category/3"}>Procesadores</Link>
            </li>
            <li className="nav-item">
              <Link className="navLink" to={"/category/4"}>Notebooks</Link>
            </li>
            <li className="nav-item">
              <Link className="navLink" to={"/category/5"}>Placas de video</Link>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navIcons">
            <li className="nav-item navLink">

            </li>
            <li className="nav-item navLink">
              <IconWidgetBell />
            </li>  
            <li className="nav-item">
              <Link to="/cart/" className="navLink">
                <IconWidgetCart />
                {
                  Object.keys(cartItems).length > 0 
                    &&
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      { quantityItems() }
                      <span className="visually-hidden">Productos en el carrito</span>
                    </span>  
                }
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>    
  )
};  

export default Navbar;