import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { API } from '../../../API';
import ProductCard from '../../ProductCard';

const NonVeg = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get(`${API}/nonvegpizza`).then((res) => {
      if (res.status === 401) {
        console.log("Data Not Found")
      }
      console.log(res.data)
      setProduct(res.data)
    })
  }

  return (
    <div className='container py-5'>
      <h2>Non-Pizza</h2>
      <div className='row' style={{ columnGap: "1.5rem", rowGap: "1.5rem", paddingTop: "2rem" }}>
        {
          product.map((nvData) => {
            return <ProductCard key={nvData.id} nvData={nvData} />
          })
        }
      </div>
    </div>
  )
}

export default NonVeg