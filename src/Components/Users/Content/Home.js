import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import '../../../Assets/Styles/Home.css'
import Veg from '../../../Assets/Images/Veg.jpg'
import NonVeg from '../../../Assets/Images/NonVeg.jpg'
import Dessset from '../../../Assets/Images/Dessset.jpg'
import Footer from '../../Users/Content/Footer'

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            {/* page content */}
            <div className='container'>
                <h3 className="head" >Our Menu</h3>
                <div className='row'>
                    <div className='col-md-4 col-sm-6'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Veg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Veg Pizza</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type='button' className='btn btn-primary' onClick={()=>navigate('/veg')}>Vegetarian</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={NonVeg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Non-Veg Pizza</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type='button' className='btn btn-primary' onClick={()=>navigate('/nonveg')}>Non-Vegetarian</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6'>
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={Dessset} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dessert</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button type='button' className='btn btn-primary' disabled>Coming Soon</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
