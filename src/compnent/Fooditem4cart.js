import React, { useState } from 'react'

const Fooditem = () => {

  const [num, setNum] = useState(0)

  const incNum = () => {
    setNum(num + 200)

  }

  const decNum = () => {
    if (num > 0) {
      setNum(num - 200)
    } else {
      setNum(0)
    }
  }

  const total = () => {
    setTot(tot + 1)
  }

  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hamburger</h5>
          <p className="card-text">Price : 200</p>
          <p className="card-text">Cost : {num} </p>
          <p className="card-text">Total : {} </p>
          <button className="fw-bolder fs-6 btn btn-primary mx-1 " style={{ width: "60px", height: "40px" }} onClick={incNum} onChange={total} type="button" >+</button>
          <button className="fw-bolder fs-6 btn btn-danger mx-1" style={{ width: "60px", height: "40px" }} type="button" onClick={decNum} >-</button>
        </div>
      </div>
    </div>
  )
}

export default Fooditem
