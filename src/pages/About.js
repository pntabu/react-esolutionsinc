import React from "react";
import Vmc from "./include/Vmc";

function Aboutus(){
return(
<div>
    <section className="py-4 bg-info">
        <div className="container">
            <h3 className="text-center">Get to Know More About e-Solutions Inc</h3>
        </div>
    </section>

{/* Company Section*/}
    <section className="section border-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="main-heading">Our Company</h3>
                    <div className="underline mx-auto"></div>
                    <p>
                        This is the first item's accordion body. 
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                        These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                        You can modify any of this with custom CSS or overriding our default variables. 
                        It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* Mission, Vision and Values*/}
    <Vmc />

</div>
);

}
export default Aboutus;