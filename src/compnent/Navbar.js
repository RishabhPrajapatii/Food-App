import React from 'react'

import logo from "../image/logo.png"

const Navbar = (props) => {
    

    return (
        <>
            <div className="container-fluid text-light" style={{ background: "#493bc4", color: "white" }} >
                <nav className="navbar ">
                    <div className="container-fluid ">
                        <a className="navbar-brand  d-flex " href="/">
                          
                            <img src={logo} alt="" width="50" height="50" className="d-inline-block align-text-top " />
                            <h3 className='mx-2 text-light fs-1'>Food's Restaurant</h3>
                        </a>
                        <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa-solid fa-cart-shopping" style={{ fontSize: "30px" }}></i>
                        </button>

                    </div>
                </nav>
            </div>
        </>

    )

}
export default Navbar
