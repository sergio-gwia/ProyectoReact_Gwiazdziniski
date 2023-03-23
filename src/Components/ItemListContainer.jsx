import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

function ItemListContainer() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const db = getFirestore();
    const itemCollection = collection(db, "productos");
  
    getDocs(itemCollection).then((snapshot) => {
      const productsData = snapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data };
      });
      setProducts(productsData);
    });
  }, []);

  const {category} = useParams()

  const catFilter = products.filter((products)=> products.category === category)

  return (
    <>
    <div className= "container-md">
      {category ? <ItemList product={catFilter}/> : <ItemList product={products}/>}
    </div>
    </>
    
  )
}; 
export default ItemListContainer 