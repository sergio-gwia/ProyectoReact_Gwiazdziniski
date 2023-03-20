import React from 'react'
import { useState } from 'react';
import { createContext } from "react";


export const Shop = createContext()

const ShopProvider = ({children}) => {

  const [products, setProducts] = useState ([])

  const isProductOnCart = (id) =>{
    return products.some(product => product.id === id)
  }
  
  const addProduct = (product) => {
    const isInCart = isProductOnCart(product.id)
    console.log(isInCart);
    if (isInCart) {
      const prodRepe = products.find(element => element.id === product.id)
      prodRepe.cantidad += product.cantidad
      setProducts([...products])
    } else {
      setProducts([...products, product])
    }
  }

  const cantCart = () =>{
    let cantTotal = 0;
    for (const product of products) {
      cantTotal += product.cantidad 
    }
    return cantTotal
  }

  const removeItem = (id) =>{
    const cartConProdEliminado = products.filter(product => product.id !==id)
    setProducts(cartConProdEliminado)
  }

  const cleanCart = () =>{
    setProducts([])
  } 

  const total = () => {
    let tot = 0;
    for (const product of products) {
      tot += product.price * product.cantidad
    }
    return tot;
  }
 

  return (
    <Shop.Provider value = {{products, setProducts, addProduct, cantCart, removeItem, cleanCart, total}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider