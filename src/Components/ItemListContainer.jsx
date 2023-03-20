import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'

function ItemListContainer() {

  const getData = async ()=>{
    const response = await fetch("../data.json")
    const data = await response.json()
    return data;
  }
  
  useEffect(()=>{
    getData().then((product) => setProduct(product))
  }, []);

  const [product, setProduct] = useState([]);

  const {category} = useParams()

  const catFilter = product.filter((product)=> product.category === category)

  return (
    <>
    <div className= "container-md">
      {category ? <ItemList product={catFilter}/> : <ItemList product={product}/>}
    </div>
    </>
    
  )
}

export default ItemListContainer 