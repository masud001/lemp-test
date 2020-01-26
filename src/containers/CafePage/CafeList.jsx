import React, { Component } from 'react';
import Footer from "../../components/FooterComponent/Footer.jsx";
import CafeListLogo from "./../../assets/img/cafe-list-logo.jpg";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import ImgGroupSection from "../../components/ImageGroupComponent/ImgGroupSection.jsx";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class CafeList extends Component {

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div id="cafe-list-page">
                <div className="cafe-list-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <Mainlogo logo={CafeListLogo} logoTitleText ="Tokyo"  logoMainText="까페 | 동호회" logoSubText="목록"></Mainlogo>
                            </div>
                            <div className="col-md-12 ">
                                <div className="heder-btn-div ">
                                    <button className="btn-blue header-btn cust-input-button-next cursor-pointer"onClick={() => this.nextPath('/creation-cafe')}>
                                        카페/동호회 만들기</button>
                                        <span className="question-icon tooltip-right" target="_blank" data-tooltip=" 사용자 가입을 위한 질 문을 최대 3개까지 만 들수 있습니다.">?</span>
                                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-group-section-div">
                        <ImgGroupSection text1="" text2="" text3="" text4="" text5=""></ImgGroupSection>
                    </div>
                    <div className="pagination-main">
                        <div className="container-main">
                            <div className="row">
                                <div className="pagination-grid">
                                    <div className="pagination-list">
                                        <ul >
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pagination-grid pad-l-66">
                                    <div className="pagination-list">
                                        <ul>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pagination-grid pad-l-131">
                                    <div className="pagination-list">
                                        <ul>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pagination-grid pad-l-190">
                                    <div className="pagination-list">
                                        <ul>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                            <li><Link to="/cafe-home">엄마 카페</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default CafeList;