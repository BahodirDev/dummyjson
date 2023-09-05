import React from 'react'

export default function Cards({ value, getFiltredProduct, getBucket }) {
    return (
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={value?.thumbnail} class="img_fluid rounded-start" alt="img" />
                </div>
                <div class="col-md-8 text_left">
                    <div class="card-body">
                        <h5 class="card-title">{value?.title}</h5>
                        <p class="card-text">{value?.description?.slice(0, 45)}...</p>
                        <b>Brand: {value?.brand}</b> <br />
                        <b>Price: {value?.price}$</b> <br />
                        <b>Category: <span style={{ color: "blue", cursor: "pointer" }} className='text-decoration-none' onClick={() => getFiltredProduct(value?.category)}>{value?.category}</span></b>

                        <p class="card-text"><small class="text-body-secondary">Discount: {value?.discountPercentage}</small></p>
                        <button className='btn btn-outline-primary' onClick={() => getBucket(value)}>Add to Bucket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
