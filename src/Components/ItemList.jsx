import React from 'react'
import Item from './Item'

function itemList({product}) {
  return (
    <>
    <div className="row gap-3 justify-content-center">
        {product.map((prod)=>{
          return (
            <Item
            key={prod.id}
            name = {prod.name}
            description = {prod.description}
            price = {prod.price}
            img = {prod.pictureUrl}
            id = {prod.id}
          />
          )

        })}
    </div>
              
    </>
  )
}

export default itemList