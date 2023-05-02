import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { API } from '../../../API';
import { useNavigate } from 'react-router-dom';
import Cart from '../../Cart';
// import ProductCard from '../../ProductCard';

const NonVeg = () => {

  const [product, setProduct] = useState([]);
  const [nvcart, setNvCart] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  const cart = (id) => {
    setNvCart(id);
    navigate('/cart')
    setIsLoggedIn(true)
  }

  return (
    <div className='container py-5'>
      <h2>Non-Pizza</h2>
      <div className='row' style={{ columnGap: "1.5rem", rowGap: "1.5rem", paddingTop: "2rem" }}>
        {
          product.map((nvData) => {
            return (
              <div class="card" style={{ width: "18rem" }}>
                <img src={nvData.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{nvData.name}</h5>
                  <p class="card-text">{nvData.description}</p>
                  <hr />
                  <div>
                    {
                      nvData.sizeandcrust.map((obj) => {
                        return <p>Price:$ {obj.mediumPan[0].price}</p>
                      })
                    }
                    <button type="button" className="btn btn-primary" onClick={(e) => { cart(nvData.id) }}>Add to Cart</button>
                  </div>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            )
          })
        }
      </div>
      {isLoggedIn && <Cart nvcart={nvcart} />}
    </div>
  )
}

export default NonVeg