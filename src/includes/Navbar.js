import React from "react";
import {Link} from "react-router-dom";


function Navbar(){
return(
        <div className="navbar-dark bg-dark shadow sticky-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand"><img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="30" className="d-inline-block align-text-top"/> e-Solutions Inc</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link to="/services" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                            <li><Link to="/web-app-development" className="dropdown-item">Web & App Development</Link></li>
                                            <li><Link to="/softwares" className="dropdown-item">Essential PC & Phone Softwares</Link></li>
                                            <li><Link to="/repair-troubleshooting" className="dropdown-item">Repair & Troubleshooting</Link></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><Link to="/educational-material" className="dropdown-item">Educational Material</Link></li>
                                            <li><Link to="/services" className="dropdown-item">Other Services</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/aboutus" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/contactus" className="nav-link">Contact Us</Link>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-danger ms-3" type="submit">Search</button>
                                </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
);
}
export default Navbar;