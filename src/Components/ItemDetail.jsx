
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

function ItemDetail({product}) {
  const {id} = useParams()
  const idFilter = product.filter((product)=> product.id == id)

  return (
    <>
    {idFilter.map((product)=>(
    <div className="card  card-detail mt-5 mb-5" key={product.id}>
    <img src={product.pictureUrl} className="card-img-top" alt="imagen_camiseta"/>
          <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">$ {product.price}</p>
              <div className='d-flex flex-column align-items-center'>
                <ItemCount detail={product}/>  
              </div>           
          </div>
      </div>
    ))}
    </>
  )
}

export default ItemDetail