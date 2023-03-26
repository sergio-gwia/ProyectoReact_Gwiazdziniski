import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { Shop } from '../Context/ShopProvider'

function Form({products}) {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [direction, setDirection] = useState('');
  const [loading, setLoading] = useState(false);
  const cart = products
  const {cleanCart} = useContext(Shop)

  const db = getFirestore();
  const orderCollection = collection(db, 'orden');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    addDoc(orderCollection, { name, direction, email, cart })
      .then(({ id }) => {
        setOrderId(id);
        setLoading(false);
      })
  };

  const url = ()=>{
    <Link to={"/"}></Link>
  }
  const handleConfirmation = () => {
    Swal.fire({
      title: 'Muchas gracias por tu compra!',
      text: `Tu numero de seguimiento es: ${orderId}!`,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        cleanCart()
      }
    });
  };

  return (
    <>
      <div className='mt-4'>
        <form onSubmit={handleSubmit}>
          <h4>Para finalizar por favor completa el formulario.</h4>
          <div className='mb-3'>
            <label className='form-label'>Nombre:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Ingresa tu nombre'
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Direccion:</label>
            <input
              type='text'
              className='form-control'
              placeholder='Ingresa tu direccion'
              required
              onChange={(e) => setDirection(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input
              type='email'
              className='form-control'
              aria-describedby='emailHelp'
              placeholder='Ingresa tu email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-success mt-4 mb-4'>
              {loading ? (
                <span className='spinner-border spinner-border-sm me-2' role='status' aria-hidden='true'></span>
              ) : null}
              Finalizar Compra
            </button>
          </div>
        </form>
      </div>

      {orderId && handleConfirmation()}
    </>
  );
}

export default Form;

