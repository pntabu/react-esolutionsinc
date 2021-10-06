import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
    return(
    <div className="footer">
        <section className="section footer bg-dark text-white">
            <div className='container'>
                <div className="row">
                    <div className="col-md-3 text-justify">
                        <h5>Company Information</h5>
                        <hr/>
                        <p className="text-white ">
                        This is the first item's accordion body. 
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/aboutus">About Us</Link></div>
                        <div><Link to="/contactus">Contact Us</Link></div>
                        <div><Link to="/educational-material">Educational Material</Link></div>
                        <div><Link to="/web-app-development">Web and App Development</Link></div>
                    </div>
                    <div className="col-md-3">
                        <h5>Social Media</h5>
                        <hr/>
                        <div><a href="/">LinkedIn</a></div>
                        <div><a href="/">WhatsApp</a></div>
                        <div><a href="/">Facebook</a></div>
                        <div><a href="/">Youtube</a></div>
                        <div><a href="/">Twitter</a></div>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Information</h5>
                        <hr/>
                        <div><p className="text-white mb-1">Physical Address: #Plot 722, Namuli Road, Bukoto, Kampala, Uganda</p></div>
                        <div><p className="text-white mb-1"><a href="Tel:+256 785 430 302">Phone Number 1: +256 (0) 785 430 302</a></p></div>
                        <div><p className="text-white mb-1"><a href="Tel:+256 785 430 302">Phone Number 2: +256 (0) 705 807 536</a></p></div>
                        <div><p className="text-white mb-1"><a href="mailto:e.solutionsinc3@gmail.com">Email Address: e.solutionsinc3@gmail.com</a></p></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-danger text-white">
            <div className='container'>
                <div className="row text-center">
                    <div className="col-md-4">
                        <a href="/">e-Solutions Inc</a>
                    </div>
                    <div className="col-md-4">
                        <small className='website-rights'>All Rights Reserved. e-Solutions © 2021</small>
                    </div>
                    <div className="col-md-4">
                        <a href="/">Designed By: e-Solutions Inc</a>
                    </div>
                </div>
            </div>
      </section>
    </div>
    );
}
export default Footer;