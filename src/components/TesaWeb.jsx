import React from 'react'

const TesaWeb = (props) => {
    return (
        <>
            <div className='card shadow-sm h-100'>
                <div className='ratio ratio-16x9'>
                    <img src={props.img} alt="" className='card-img-top object-fit-cover' />
                </div>
                <div className='card-body'>
                    <h3 className='card-title'>{props.name}</h3>
                    <p className='card-text'>{props.desc}</p>
                    <h5 className='card-text'>{props.price}</h5>
                </div>
                <div className='p-3 d-flex justify-content-between gap-3'>
                    <button className='btn btn-outline-dark w-50'>Add to Cart</button>
                    <button className='btn btn-outline-info w-50'>Add to your favorite</button>
                </div>
            </div>
        </>
    )
}

export default TesaWeb