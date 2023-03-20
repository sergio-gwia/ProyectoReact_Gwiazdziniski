import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'
import img from '../assets/img/logo_fvsport.svg'

function NavBar() {
  return (
    <>
    <div className='barra'>PAGO EN LINEA↓</div>
    
    <nav className="navbar bg-body-tertiary bg-light-subtle">
        <div className="container-fluid d-flex justify-content-evenly">
            <Link to={"/"}>
            <img src={img} alt="" className='logo-img'/>
            </Link>
            
            <div>

                <ul className="navbar-nav d-flex flex-row gap-4">
                    <li className="nav-item">
                        <Link to={`/category/${"Camisetas"}`}>
                        <p>Camisetas</p>
                        </Link>   
                    </li>
                    <li className="nav-item">
                        <Link to={`/category/${"Shorts"}`}>
                        <p>Shorts</p>
                        </Link>   
                    </li>
                    <li className="nav-item">
                        <Link to={`/category/${"botines"}`}>
                        <p>Botines</p>
                        </Link>   
                    </li>
           
                </ul>

            </div>
            <Link to={"/Cart"}>
                <CartWidget/>                
            </Link>
            
        </div>   
    </nav>

    </>
    
  )
}

export default NavBar 