import Brand from '../../../Assets/Images/Brand.png'
import '../../../Assets/Styles/Navbar.css'


const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={Brand} className="brand-image" alt="..." />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#!">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Link</a>
                            </li>
                        </ul>
                        <div >
                            <ul className='d-flex justify-content-center align-items-center gap-3' style={{ listStyleType: "none" }}>
                                <li><i class="bi bi-person"></i> Login</li>
                                <li><i class="bi bi-bag"></i>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
