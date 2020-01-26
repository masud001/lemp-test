import React, { Component } from 'react';
import userImage  from "./../../assets/img/Demo.png";

class TopBanner extends Component {
    render() {
        return (
            <div id="testimonial">
                <div className="card col-md-12">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="100000">
                        <div className="w-100 carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="bg"></div>
                                <div className="carousel-caption">
                                            <img src={userImage} alt="" className="rounded-circle img-food" />
                                            <div className="testimonial-text">
                                            <h3>Lorem Ipsum is simple Dummy Text Lorem Ipsum</h3>
                                            <small>Lorem Ipsum is simply dummy text of the. </small>
                                            <small className="smallest mute"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></small>
                                            <br/>
                                            <small>No 1 : <b>Lorem Ipsum is</b></small>
                                            </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="bg"></div>
                                <div className="carousel-caption">
                                            <img src={userImage} alt="" className="rounded-circle img-food" />
                                            <div className="testimonial-text">
                                            <h3>Lorem Ipsum is simple Dummy Text Lorem Ipsum</h3>
                                            <small>Lorem Ipsum is simply dummy text of the.</small>
                                            <small className="smallest mute"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></small>
                                            <br/>
                                            <small>No 1 : <b>Lorem Ipsum is</b></small>
                                            </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="bg"></div>
                                <div className="carousel-caption">
                                            <img src={userImage} alt="" className="rounded-circle img-food" />
                                            <div className="testimonial-text">
                                            <h3>Lorem Ipsum is simple Dummy Text Lorem Ipsum</h3>
                                            <small>Lorem Ipsum is simply dummy text of the.</small>
                                            <small className="smallest mute"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></small>
                                            <br/>
                                            <small>No 1 : <b>Lorem Ipsum is</b></small>
                                            </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon carousel-cust-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon carousel-cust-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}
export default TopBanner;