import React, { Component } from 'react';
import GooglePlus from "./../../assets/img/google-plus-logo.jpg";
import Massage from "./../../assets/img/massenger-logo.jpg";
import Navar from "./../../assets/img/navar-logo.jpg";
import Wechat from "./../../assets/img/wechat-logo.jpg";

class LoginSection extends Component {
    render() {
        return (
            <div id="login-section-comp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-main-content">
                                <div className="btn-group-div">
                                    <div className="btn-div">
                                        <button type="button" className=" btn-green fullWidth">
                                            <i className="btn-icon" aria-hidden="true">
                                                <img src={Navar}></img>
                                            </i>
                                            {/* Login by Naver */}
                                            <span className="login-btn-text">Naver로 로그인</span>
                                        </button>
                                    </div>
                                    <div className="btn-div">
                                        <button type="button" className=" btn-yellow fullWidth">
                                            <i className="btn-icon" aria-hidden="true">
                                                <img src={Massage}></img>
                                            </i>
                                            {/* kakao login */}
                                            <span className="login-btn-text">카카오로 로그인</span>
                                        </button>
                                    </div>
                                    <div className="btn-div">
                                        <button type="button" className=" btn-green-1 fullWidth">
                                            <i className="btn-icon" aria-hidden="true">
                                                <img src={Wechat}></img>
                                            </i>
                                            {/* Jungle Talk Login */}
                                            <span className="login-btn-text">위챗으로 로그인</span>
                                        </button>
                                    </div>
                                    <div className="btn-div">
                                        <button type="button" className=" btn-red fullWidth">
                                            <i className="btn-icon" aria-hidden="true">
                                                <img src={GooglePlus}></img>
                                            </i>
                                            {/* google login */}
                                            <span className="login-btn-text">구글로 로그인</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginSection;