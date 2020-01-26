import React, { Component } from 'react';
import mapImage from "./../../assets/img/Banner.jpg";
import MapPopup from "./../../assets/img/map-popup.png";
import CommentIcon from "./../../assets/img/icon/comment-icon.png";
import BIcon from "./../../assets/img/icon/b-icon.png";
import CountryImage from "../../containers/MainPage/CountryImage.jsx";
import imgLogo from "./../../assets/img/Banner/asian-laughing-banner-1.jpg";
import Title from "../../assets/img/Banner/Title.gif";
import CustomizedSlider from "../InputSliderComponent/CustomizedSlider"
import Img from 'react-image'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Input, InputAdornment, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            rangeSliderVal: 0,
            isAdvtPopupActive: false,
            selectedMonth: "1달"

        };
        this.onModalOpen = this.onModalOpen.bind(this);
    }
    onModalOpen(value) {
        let { isOpen } = this.state;
        this.setState({
            isOpen: value
        })
    }
    render() {
        let { data, isSerchMenuClicked } = this.props;
        let { isOpen, rangeSliderVal } = this.state;


        return (
            <div id="google-map" className={isOpen ? "google-map-style active" : "google-map-style"}>
                <div className="img-height" >
                    <Img className="slider-img" src={imgLogo} onClick={() => this.onModalOpen(true)} decode={false} crossOrigin="anonymous" />
                </div>
                <div className="slider-text" >
                    <div className="slider-text-title" onClick={() => this.onModalOpen(true)}>
                        <img src={Title} alt="Title" />
                        <span>정글뉴스</span>
                    </div>
                    <h6 style={{ fontSize: "1.5rem" }}>인도네시아 정글 뉴스에 오신걸 환영합니다.</h6>
                    <h6>생활정보와 관광정보 현지에서 있지 않으면 알수 없는 다양한 많은 정보가 제공됩니다.</h6>
                    <h6>앱을 다운받아 교민들을 위한 실시간 채팅을 아주 간편하게 이용하실수 있습니다.</h6>
                    {/* <button className="btn-blue dawnload_btn px-5 mt-2">Download</button> */}
                    <Button variant="contained" size="medium" className="btn-blue mat-input-aftert-btn"  >다운로드</Button>

                </div>

                {isSerchMenuClicked &&
                    <div className="map-search-box">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" className="form-control" onFocus={(e) => e.target.placeholder = ''} placeholder="키워드 검색하기" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3 input-rangr-slide">
                            <CustomizedSlider />
                        </div>


                        {/* <div className="input-group mb-3 input-plus-minus">
                        <div className="input-group-prepend">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            <i className="fa fa-minus" aria-hidden="true"></i>
                        </div>
                    </div> */}
                    </div>
                }


                <div className="full-modal">
                    <div className="map-popup-design" >
                        <img src={MapPopup}></img>
                        <i className="fa fa-times close-icon" onClick={() => this.onModalOpen(false)} aria-hidden="true" id="close-map-modal"></i>
                        <div className="map-main-div">
                            <span className="map-text-1">한식</span>
                            <span className="map-text-2">새마을 식당</span>
                            <div className="map-popup-text">“숯불로 잘 구워 정말 맛있는 고기집”</div>
                        </div>
                        <div className="map-sub-div">
                            <div className="left-div"> <span>연락처</span></div>
                            <div className="right-div">
                                <div className="right-no">03-3292-9837</div>
                                <div className="right-desc">관악구 서원[신림본동]동 409-230</div>
                                <div className="right-url">www.saemarle.co.j</div>
                            </div>
                        </div>
                        <div className="map-bottom-div">
                            <div className="left-div"> <span>영업시간</span></div>
                            <div className="right-div">
                                <div className="right-no">
                                    <div className="main-text-fit">
                                        <span className="bottom-text-1">평일</span>
                                        <span className="tome-zone">9AM ~ 10PM</span>
                                    </div>
                                    <div className="main-text-fit">
                                        <span className="bottom-text-1">주말</span>
                                        <span className="tome-zone">10AM ~ 2PM</span>
                                    </div>
                                    <div className="main-text-fit">
                                        <span className="bottom-text-1">공휴일</span>
                                        <span className="tome-zone">10AM ~ 5PM</span>
                                    </div>
                                    <div className="main-text-fit">
                                        <span className="bottom-text-1">휴일</span>
                                        <span className="tome-zone">첫째 둘째 일요일</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-button-div ">
                            <Button variant="contained" size="medium" className="btn-blue fullWidth " >예약하기</Button>
                        </div>
                        <div className="btn-box">

                            <div className="talk-btn"> <i className="fas fa-comment talk-icon"><span className="talk-icon-text">TALK</span></i><span className="talk-btn-text">ID : j32serl</span></div>
                            {/* <div className="call-btn"> <i className="fa fa-phone"></i> <span>전화하기</span></div>
                            <div className="location-btn"><i className="fa fa-map-marker" aria-hidden="true"></i> <span>위치찾기</span></div> */}
                            <div className="comment-btn"><img src={CommentIcon}></img></div>
                            <div className="b-btn"><img src={BIcon}></img></div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
export default GoogleMap;