import React, { useEffect, useState } from 'react'

const Fooditem = () => {

  const [num, setNum] = useState(0)
  const incNum = () => {
    setNum(num + 1)

  }
  console.log("plus")

  const decNum = () => {
    setNum(num - 1)

  }
  console.log("minus")

  const [data, setData] = useState([])
  // const [image, setImage] = useState([])
  useEffect(() => {
    fetch("https://bitbucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/data/feeds.json").then((result) => {
      result.json().then((resp) => {
        // console.warn("result", resp)
        setData(resp)
      })
    })
  }, [])
  console.warn(data)

 

  return (
    <div className='container'>

      {
        data.map((item) =>

          <div className="card" style={{ width: "18rem" }}>

            <img src={'https://bytebucket.org/punitdiwan/coding-challange/raw/422d739e95063be2ad555486c6d207c92a9977ff/assets/burger.jpeg'} className="card-img-top" alt="..." />
            {/* {item.image} */}
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Price:{item.price}</p>
              <p className="card-text">Cost:{item.price}</p>

              <button className="fw-bolder fs-6 btn btn-primary mx-1 " onClick={incNum} style={{ width: "60px", height: "40px" }} type="button" >+</button>
              <button className="fw-bolder fs-6 btn btn-danger mx-1" onClick={decNum} style={{ width: "60px", height: "40px" }} type="button" >-</button>

            </div>

          </div>

        )
      }


      <div div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div className="p-3">Row column</div>
          </div>
          <div className="col">
            <div className="p-3">Row column</div>
          </div>
          <div className="col">
            <div className="p-3">Row column</div>
          </div>
          <div className="col">
            <div className="p-3">Row column</div>
          </div>

        </div>
      </div>




    </div >
  )
}

export default Fooditem
