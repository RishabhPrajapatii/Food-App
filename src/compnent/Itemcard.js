import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Itemcard = (props) => {
    let history = useNavigate();
    const handelCheckout = () => {
        history('/checkout')
    }


    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)

    const add = () => {
        setQty(qty + 1);
        setPrice(price + props.price);

    }

    const minus = () => {
        if (qty > 0) {
            setQty(qty - 1);
            setPrice(price - props.price);
        } else {
            setQty(0);
            setPrice(0);
        }

    }

    return (
        <>

            <div className='col-sm-4'>
                <div className=" mb-4 mx-2">
                    <div className="card  overflow-hidden shadow" >
                        <img src={props.image} className="card-img-top " alt="img" />
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">Price : {props.price}</p>
                            <p className="card-text">Total : {qty} </p>
                            <p className="card-text">Cost(INR) : {price} </p>
                            <button onClick={add} className="fw-bolder fs-6 btn btn-primary mx-1 " style={{ width: "60px", height: "40px" }} type="button" >+</button>
                            <button onClick={minus} className="fw-bolder fs-6 btn btn-danger mx-1" style={{ width: "60px", height: "40px" }} type="button" >-</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Order Summary</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }} >
                                <p>{props.name}</p>
                                <p> {price} </p>
                                <div>
                                    <button onClick={add} className="fw-bolder fs-6 btn btn-primary mx-1 " style={{ width: "60px", height: "40px" }} type="button" >+</button>
                                    <button onClick={minus} className="fw-bolder fs-6 btn btn-danger mx-1" style={{ width: "60px", height: "40px" }} type="button" >-</button>
                                </div>
                            </div>

                            <p className="card-text">Cost(INR) : {price} </p>

                        </div>
                        <div className="modal-footer">
                            <button className='btn ' style={{ background: "#493bc4", color: "white" }} data-bs-dismiss="modal" onClick={handelCheckout}>Save and Checkout </button>
                            <button className=" btn fw-bold " style={{ color: "#493bc4" }} data-bs-dismiss="modal">Cancel</button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Itemcard
