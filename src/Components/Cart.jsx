import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../Context/ShopProvider'
import Tabla from './Tabla'
import Form from './Form'

const Cart = () => {

  const {products, total, cleanCart} = useContext(Shop)

  return (
    <>
    <div className='container-md mt-5 d-flex justify-content-center'>

    { products.length > 0 ? 
    <table className="table">
      <thead>
       <tr>
         <th scope="col">Producto:</th>
         <th scope="col">Nombre</th>
         <th scope="col">Precio</th>
         <th scope="col">Cantidad</th>
         <th scope="col">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product =>{
          return <Tabla key={product.id} product={product}/>
        })}
        <tr>
            <td className='fs-5 fw-bolder' scope='col'>Total:</td>
            <td className='fs-5 fw-bolder' scope='col'>$ {total()} </td>
            <td>
              <div className='d-flex justify-content-center mb-3'>
                {products.length > 0 ? <button className='btn btn-success' onClick={cleanCart}>Eliminar Carrito</button> : <div></div> }
              </div>
            </td>
        </tr>
      </tbody>
     </table>
     
    : <Link to={"/"}>
      <button className='btn btn-success'>Agregar Productos al Carro</button>
      </Link> 
    } 
    </div>
    {products.length > 0 ?<div className='d-flex justify-content-center'><Form products={products}/></div> : <div></div>}
    </>
  )
}

export default Cart