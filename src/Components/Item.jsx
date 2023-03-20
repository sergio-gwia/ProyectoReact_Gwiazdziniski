import React from 'react'
import {Link} from 'react-router-dom'

function item({name, descrition, price, img, id}) {
  return (
  <>
  <div className="card mt-5 mb-3">
  <img src={img} className="card-img-top" alt="imagen_camiseta"/>
        <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{descrition}</p>
            <p className="card-text">$ {price}</p>
            <Link to={`/item/${id}`}>
              <p className="btn btn-success">Detalles</p>
            </Link>
        </div>
    </div>
  </>
  )
}

export default item 