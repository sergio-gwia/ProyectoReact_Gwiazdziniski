import React from 'react';
import { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, 'productos', id);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data();
        setProduct({...docs, id: id});
      }
    });
  }, [id]);

  return (
    <>
      <div className="container-md d-flex justify-content-center">
        <ItemDetail product={product} />
      </div>
    </>
  );
}

export default ItemDetailContainer;