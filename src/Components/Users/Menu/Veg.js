import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { API } from '../../../API';
import ProductCard from '../../ProductCard';

const Veg = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get(`${API}/vegpizza`).then((res) => {
      if (res.status === 401) {
        console.log("Data Not Found")
      }
      console.log(res.data)
      setProduct(res.data)
    })
  }

  return (
    <div className='container py-5'>
      <h2>Veg Pizza</h2>
      <div className='row' style={{ columnGap: "1.5rem", rowGap: "1.5rem", paddingTop: "2rem" }}>
        {
          product.map((vData) => {
            return (<div class="card" style = {{ width: "18rem" }}>
        <img src={vData.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{vData.name}</h5>
          <p class="card-text">{vData.description}</p>
          <hr />
          <div>
            {
              vData.sizeandcrust.map((obj)=>{
                return <p>Price:$ {obj.mediumPan[0].price}</p>
              })
            }
            
            <button type="button" className="btn btn-primary">Add to Cart</button>
          </div>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>)
          })
        }
    </div>
    </div >

  )
}

export default Veg
