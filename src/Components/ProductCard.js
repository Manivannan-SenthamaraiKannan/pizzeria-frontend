// import React, { useState } from 'react'

const ProductCard = (props) => {
    console.log(props.vData)

    // const [select, setSelect] = useState
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={props.vData.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.vData.name}</h5>
                <p class="card-text">{props.vData.description}</p>
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
