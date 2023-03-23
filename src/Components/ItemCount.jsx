import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Shop} from '../Context/ShopProvider'

function ItemCount({detail}) {

    const [cantidad, setCantidad] = useState(1)

    const {addProduct} = useContext(Shop)

    const onAdd = (cantidad) => {
        if (cantidad < detail.stock){
          addProduct({...detail, cantidad: cantidad})
        }
 }  

    const sumar = () => {
        if (detail.stock > cantidad) {
            setCantidad (cantidad + 1) 
        }else {
            setCantidad(0)
        }
    }

    const restar = () => {
        if (cantidad > 1) {
            setCantidad (cantidad - 1) 
        }
    }

    return (
        <>
        <div className='d-flex gap-2'>

            <button className="btn btn-light btn-contador" onClick={sumar}>+</button>

            <button className='btn btn-contador btn-success'> {cantidad}</button>

            <button className="btn btn-light btn-contador" onClick={restar}>-</button>
            
        </div>
        <div className='d-flex flex-column align-items-center gap-3 mt-3'>
        <button className="btn btn-success" onClick={() => onAdd(cantidad)}>Agregar al Carrito</button>
        <Link to={"/Cart"}>
        <button className="btn btn-success">Ir al Carrito</button>
        </Link>
        </div>
        </>
    )
}

export default ItemCount