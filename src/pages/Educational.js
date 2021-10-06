import React from "react";
import Card1 from "../images/card-img2.png";

function Educational(){
return(
    <div>
        <section className="py-4 bg-info">
            <div className="container">
                <h3 className="text-center">Check Out Our Educational Materials</h3>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div class="row g-2">
                    <div class="col-md-4">
                        <div className="card shadow">
                            <img src={Card1} className="img-fluid rounded-start" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className="card shadow">
                            <img src={Card1} className="img-fluid rounded-start" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className="card shadow">
                            <img src={Card1} className="img-fluid rounded-start" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div class="row g-2">
                    <div class="col-md-4">
                        <div className="card shadow">
                            <img src={Card1} className="img-fluid rounded-start" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className="card shadow">
                            <img src={Card1} className="img-fluid rounded-start" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className="card shadow">
                            <img src={Card1} className="img-fluid rounded-start" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );

}
export default Educational;