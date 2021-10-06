import React from "react";
import Slider from "../includes/Slider";
import {Link} from "react-router-dom";
import Vmc from "./include/Vmc";
import Card1 from "../images/card-img2.png";


function Home(){
return(
<div>
    <Slider/>
    <div>
        {/* Company Section*/}
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Our Company</h3>
                        <div className="underline mx-auto"></div>
                        <p>
                        This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                        </p>
                        <Link to="/aboutus" className="btn btn-warning shadow">Read More</Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Mission, Vision and Values*/}
        <Vmc />

        {/* Our Services*/}
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">Our Services</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow">
                            <img src={Card1} className="w-80 border-bottom" alt="..."/>
                            <div className="card-body">
                                <h5>Web and App Development</h5>
                                <div className="underline-card"></div>
                                <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.</p>
                                <Link to="/web-app-development" className="btn btn-danger shadow">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow">
                            <img src={Card1} className="w-80 border-bottom" alt="..."/>
                            <div className="card-body">
                                <h5>Design and Customisation</h5>
                                <div className="underline-card"></div>
                                <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.</p>
                                <Link to="/web-app-development" className="btn btn-danger shadow">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow">
                            <img src={Card1} className="w-80 border-bottom" alt="..."/>
                            <div className="card-body">
                                <h5>Repair and Troubleshooting</h5>
                                <div className="underline-card"></div>
                                <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.</p>
                                <Link to="/repair-troubleshooting" className="btn btn-danger shadow">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow">
                            <img src={Card1} className="w-80 border-bottom" alt="..."/>
                            <div className="card-body">
                                <h5>Educational Material</h5>
                                <div className="underline-card"></div>
                                <p>This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.</p>
                                <Link to="/educational-material" className="btn btn-danger shadow">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
);

}
export default Home;