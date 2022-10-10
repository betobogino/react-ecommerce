import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addOrder } from '../../services/firebaseCRUD';

import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({
    completed: false,
    id : null
  });

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const {name, phone, email} = buyer;
  const {cartItems, cartTotal, setCartItems} = useContext(CartContext);
  
  const handleInputChange = (e) => {
    setBuyer(({
      ...buyer,
      [e.target.name]:e.target.value
    }))
  }

  const handleForm = (e) => {
    e.preventDefault()
    
    const items = cartItems.map(item => {return {id: item.id, title: item.title, price: item.price}});
    const date = new Date();
    const total = cartTotal();

    const data = {buyer, items, date, total}
    
    const order = addOrder(data);
    
    order.then(nroOrder => {
      Swal.fire({
        title: '¿Está seguro de completar su compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si terminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          setOrderDetails({
            completed: true,
            id: nroOrder.id
          });

          setCartItems([]);
        }
      })
    })
  }

  return (
    <div className="checkoutContainer">
      <div className="checkout">
        {
          !orderDetails.completed
            ?
              <div className="row g-5">
                <div className="col-12">
                  <h4 className="mb-3">Ingrese sus datos</h4>
                  <form className="needs-validation" onSubmit={handleForm}>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">Nombre</label>
                        <input 
                          name="name"
                          type="text" 
                          className="form-control" 
                          id="firstName" 
                          value={name}
                          placeholder="Su nombre" 
                          onChange={handleInputChange}
                          required 
                        />
                        <div className="invalid-feedback">
                          Su nombre es un dato requerido
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input 
                          name="surname"
                          type="text" 
                          className="form-control" 
                          id="lastName"
                          placeholder="Su apellido" 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                          name="email"
                          type="email" 
                          className="form-control" 
                          id="email" 
                          value={email}
                          placeholder="you@example.com" 
                          onChange={handleInputChange}
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>    
                      <div className="col-md-6">
                        <label htmlFor="zip" className="form-label">Telefono</label>
                        <input 
                          name="phone"
                          type="text" 
                          className="form-control" 
                          id="zip" 
                          value={phone}
                          placeholder="Su telefono"
                          required 
                          onChange={handleInputChange}
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <button className="w-100 btn btn-primary">Terminar orden</button>
                  </form>
                </div>
              </div>
            :
              <div className="row g-5">
                <div className="col-12">
                  <h4 className="mb-3">Su orden se registro de manera satisfactoria.</h4>  
                </div>  
                <div className="col-12">
                  <span className=''>Su numero de seguimiento es {orderDetails.id}</span>
                </div>
                <div className='col-12'>
                  <Link className="w-100 btn btn-primary" to="/">Terminar</Link>
                </div>
              </div>
        }
      </div> 
    </div>
  );
}

export default Checkout