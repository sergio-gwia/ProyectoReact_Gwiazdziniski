import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

  const getData = async ()=>{
    const response = await fetch("../data.json")
    const data = await response.json()
    return data;
  }
  
  
  useEffect(()=>{
    getData().then((product) => setProduct(product))
  }, []);

  const [product, setProduct] = useState([]);
  return (
    <>
    <div className= "container-md d-flex justify-content-center ">
      <ItemDetail product={product}/>
    </div>
    </>
    
  )
}

export default ItemDetailContainer 