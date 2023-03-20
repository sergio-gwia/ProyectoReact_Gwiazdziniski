import React, { useContext } from 'react'
import { Shop } from '../Context/ShopProvider'

const Tabla = ({product}) => {
  const {removeItem} = useContext(Shop)
  return (
    <tr>
      <th><img className='imagen-cart' src={product.pictureUrl} alt="Table-Row" /></th>
      <td className='text-uppercase fw-semibold'>{product.name}</td>
      <td className='text-uppercase fw-semibold'>{product.price} </td>
      <td className='text-uppercase fw-semibold'> {product.cantidad} </td>
      <td className='text-uppercase fw-semibold'> {product.price * product.cantidad} </td>
      <td><button className='btn btn-success' onClick={() => removeItem(product.id)}>Eliminar</button></td>
    </tr>
  )
}
export default Tabla

