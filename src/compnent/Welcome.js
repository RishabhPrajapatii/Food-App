import React from 'react'
import { useNavigate } from "react-router-dom";


const Weclome = () => {
  let history = useNavigate();
  const handelhome = () => {
    history('/home')
  }

  return (
    <div className='container text-center'>
      <div className='mt-5 fs-1' >
        Welcome To Food'S <br /> Kitchen
      </div>
      <button className='btn btn-primary mt-4 ' onClick={handelhome}>Go To Menu </button>
    </div>
  )
}

export default Weclome
