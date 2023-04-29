import React from "react";
import "../../Admin/Styles/Login.css";

const Login = () => {
    return (
        <div className='page-bg'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 ">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <div className="bg-login-image"></div>
                                                <h1 className="h4 text-gray-900 mb-4" style={{ paddingTop: "1rem" }}>Login to access admin panel</h1>
                                            </div>
                                            <form>
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                                    <input type="email" className="form-control" placeholder='Type your Username' id="exampleInputEmail1" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                                    <input type="password" placeholder='Type your Password' className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div className="mb-3 form-check d-flex justify-content-end align-items-center">
                                                    <a className="small" href="#!">Forgot Password?</a>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button type="button" className="btn btn-primary login-button">Login</button>
                                                </div>
                                            </form>

                                            {/* Social Login */}
                                            <div className='py-3'>
                                                <h6><span>or signin using</span></h6>
                                                <div className='d-flex justify-content-center align-items-center gap-3'>
                                                    <div>
                                                        <button type='button' className='btn btn-danger signin'><i className="bi bi-google"></i></button>
                                                    </div>
                                                    <div>
                                                        <button type='button' className='btn btn-primary signin'><i className="bi bi-facebook"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Signup */}
                                            <div className='py-3' style={{ display: "flex", flexDirection: "column" }}>
                                                <h6><span>or signup</span></h6>
                                                <div className='d-flex justify-content-center align-items-center '>
                                                    <button type="button" className="btn btn-primary">SignUp</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;
