// import React, { useState } from 'react'

const ProductCard = ({ value }) => {

    // const [select, setSelect] = useState
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={value.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{value.name}</h5>
                <p class="card-text">{value.description}</p>
                <hr />
                <div>
                    <p>Price:$</p>
                    <button type="button" className="btn btn-primary">Add to Cart</button>
                </div>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    )
}

export default ProductCard
