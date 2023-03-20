import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='container-md background'>
        <Link to={"/catalogo"}>
        <button className=" btn btn-primary"> Ver Catalogo</button>
        </Link>
    </div>
    
  )
}

export default Home