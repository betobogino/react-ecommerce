import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addOrder } from '../../services/firebaseCRUD';

const Checkout = () => {
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const {cartItems, cartTotal} = useContext(CartContext);
  
  const {name, phone, email} = buyer;

  const handleInputChange = (e) => {
    console.log(e.target.value)
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
    console.log("data: ",data)
    addOrder(data);
  }

  return (
    <div className="checkoutContainer">
      <div className="checkout">
        <div className="row g-5">
          {/* DetailCheckout */}
          <div className="col-md-7 col-lg-8">
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
              <button className="w-100 btn btn-primary">Terminar compra</button>
            </form>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Checkout