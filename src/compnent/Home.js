import React from 'react'
import Itemcard from './Itemcard'
import data from "./data"


const Home = (props) => {
    console.warn(data.productData)

    return (
        <>
            <div>
                <section className='py-5 container ' >
                    <div className='row container'>
                        {data.productData.map((item, index) => {
                            return (
                                <Itemcard image={item.image} name={item.name} price={item.price} key={item.id} />

                            )
                        })}

                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
