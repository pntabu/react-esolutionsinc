import React from "react";

function Contactus(){
return(
    <div>
        <section className="py-4 bg-info">
        <div className="container">
            <h3 className="text-center">Get In Touch With e-Solutions Inc</h3>
        </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                            <h4>Leave Your Message</h4>
                            <hr/>
                            <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="mb-2"> First Name: </label><small className="required"> (Required)</small>
                                            <input name = "FirstName" type="text" className="form-control required" placeholder="Enter First Name" required=""></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="mb-2"> Last Name: </label><small className="required"> (Required)</small>
                                            <input name = "LastName" type="text" className="form-control required" placeholder="Enter Last Name" required=""></input>
                                        </div>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label className="mb-2"> Phone Number: </label><small className="required"> (Required)</small>
                                <input name = "PhoneNumber" type="text" className="form-control required" placeholder="Enter First Name" required=""></input>
                            </div>
                            <div className="form-group">
                                <label className="mb-2"> Email Address: </label><small className="required"> (Required)</small>
                                <input name = "EmailAddress" type="text" className="form-control required" placeholder="Enter Email Address" required=""></input>
                            </div>
                            <div className="form-group">
                                <label className="mb-2"> Message: </label><small className="required"> (Required)</small>
                                <textarea name = "Message" row="12" className="form-control required" placeholder="Type Your Message..." required=""></textarea>
                            </div>
                            <div className="form-group py-3">
                                <button type="button" className="btn btn-danger shadow">Send Message</button>
                            </div>
                            </div>
                            <div className="col-md-6 border-start">
                                <h4>Get in Touch With Us</h4>
                                <hr/>
                                <div className="icon-box media mb-0 pb-0"> <a href="#"></a>
                                    <div className="media-body">
                                        <h6 className="mt-0">Our Office Location</h6>
                                        <p className="text-black">#Plot 722, Namuli Road, Bukoto, Kampala, Uganda</p>
                                    </div>
                                </div>
                                <div className="icon-box media mb-0 pb-0"> <a href="#"></a>
                                    <div className="media-body">
                                        <h6 className="mt-0">Contact Number</h6>
                                        <div><p className="text-white mb-1"><a href="Tel:+256 785 430 302">Phone Number 1: +256 (0) 785 430 302</a></p></div>
                                        <div><p className="text-white mb-1"><a href="Tel:+256 785 430 302">Phone Number 2: +256 (0) 705 807 536</a></p></div>
                                    </div>
                                </div>
                                <div className="icon-box media mb-0 pb-0 pt-0"> <a href="#"></a>
                                    <div className="media-body">
                                        <h6 className="mt-0">Email Address</h6>
                                        <p><a className="text-black" href="mailto:e.solutionsinc3@gmail.com">e.solutionsinc3@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="icon-box media mb-0 pb-0 pt-0"> <a href="#"></a>
                                    <div className="media-body">
                                        <h6 className="mt-0">Make a Video Call</h6>
                                        <p className="text-black">ThemeMascotSkype</p>
                                    </div>
                                </div>
                                <div className="icon-box media mb-0 pb-0 pt-0"> <a href="#"></a>
                                    <div className="media-body">
                                        <h6 className="mt-0">Opening Days and Hours</h6>
                                        <p className="text-black">Days: Monday - Friday</p>
                                        <p className="text-black">Hours: 08:00 AM – 02:00 PM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
);
}
export default Contactus;