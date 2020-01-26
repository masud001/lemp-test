import React, { Component } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Calendar from 'react-calendar';
import GoogleMap from "../../components/MapComponent/Map.jsx";
import Submenu from "./../../components/SubMenuComponent/Submenu.jsx";
import Footer from "../../components/FooterComponent/Footer.jsx";
import ImgSection from "../../components/ImgSectionComponent/ImgSection.jsx"
import ImgGroupSection from "../../components/ImageGroupComponent/ImgGroupSection.jsx";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSerchMenuClicked: false, MainDropDown1: 1, MainDropDown2: 1, MainDropDown3: 1,
            calendarDate: new Date(),
        };
        this.onSearchMenuClick = this.onSearchMenuClick.bind(this);
        this.onHandleFormChange = this.onHandleFormChange.bind(this);
        this.onCalendarDateChange = this.onCalendarDateChange.bind(this);
    }
    onSearchMenuClick(isSerchMenuClicked) {
        this.setState({
            isSerchMenuClicked
        })
    }

    onCalendarDateChange(calendarDate) {
        this.setState({ calendarDate })
    }
    onHandleFormChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value,
        })
    }
    render() {
        let { isSerchMenuClicked, MainDropDown1, MainDropDown2, MainDropDown3, calendarDate } = this.state;
        return (
            <div id="main-page">
                <GoogleMap isSerchMenuClicked={isSerchMenuClicked}></GoogleMap>
                <Submenu onSearchMenuClick={this.onSearchMenuClick}></Submenu>
                <div id="img-section">
                    <ImgSection></ImgSection>
                </div>
                <div className="container-main ">
                    <div className="main-page-left-panel">
                        <div className="letest-articel-section">
                            <div className="artical-title">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="artical-left-text-1">최신글</span>
                                        <span className="artical-left-text-2">3월</span>
                                    </div>
                                    <div className="col-md-6">
                                     <Link to = "/blogList"> <span className="artical-right-text">게시판 바로가기 ></span></Link>  
                                    </div>
                                </div>
                            </div>
                            <div className="artical-bottom-panel">
                                <div className="row">
                                    <div className="col-md-6 artical-bootom-panel-border">
                                        <div className="artical-bottom-box">
                                            <div className="artical-date">
                                                <div className="artical-date-top-content">23</div>
                                                <div className="artical-date-bottom-content">9월</div>
                                            </div>
                                            <div className="artical-avilability">
                                                <span className="artical-btn">정글장터</span>
                                                <span className="artical-avilability-title txt cursor-pointer">동경 아타리지역 2룸임대</span>
                                            </div>
                                            <div className="artical-views">조회수 1234</div>
                                        </div>
                                        <div className="artical-bottom-box">
                                            <div className="artical-date">
                                                <div className="artical-date-top-content">23</div>
                                                <div className="artical-date-bottom-content">9월</div>
                                            </div>
                                            <div className="artical-avilability">
                                                <span className="artical-btn">부동산</span>
                                                <span className="artical-avilability-title txt cursor-pointer">동경 아타리지역 2룸임대 <span className="artical-avilability-title-sub-text"></span></span>
                                            </div>
                                            <div className="artical-views">조회수 1234</div>
                                        </div>
                                        <div className="artical-bottom-box">
                                            <div className="artical-date">
                                                <div className="artical-date-top-content">23</div>
                                                <div className="artical-date-bottom-content">9월</div>
                                            </div>
                                            <div className="artical-avilability">
                                                <span className="artical-btn">여행정보</span>
                                                <span className="artical-avilability-title txt cursor-pointer">동경 아타리지역 2룸임대 <span className="artical-avilability-title-sub-text">2룸임대</span></span>
                                            </div>
                                            <div className="artical-views">조회수 1234</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="artical-bottom-right-box">
                                            <div className="artical-bottom-box">
                                                <div className="artical-date">
                                                    <div className="artical-date-top-content">23</div>
                                                    <div className="artical-date-bottom-content">9월</div>
                                                </div>
                                                <div className="artical-avilability">
                                                    <span className="artical-btn">구인구직</span>
                                                    <span className="artical-avilability-title txt cursor-pointer ">동경 아타리지역  2룸임대<span className="artical-avilability-title-sub-text"></span></span>
                                                </div>
                                                <div className="artical-views">조회수 1234</div>
                                            </div>
                                            <div className="artical-bottom-box">
                                                <div className="artical-date">
                                                    <div className="artical-date-top-content">23</div>
                                                    <div className="artical-date-bottom-content">9월</div>
                                                </div>
                                                <div className="artical-avilability">
                                                    <span className="artical-btn">뉴스/공지</span>
                                                    <span className="artical-avilability-title txt cursor-pointer">동경 아타리지역 2룸임대 <span className="artical-avilability-title-sub-text"></span></span>
                                                </div>
                                                <div className="artical-views">조회수 1234</div>
                                            </div>
                                            <div className="artical-bottom-box">
                                                <div className="artical-date">
                                                    <div className="artical-date-top-content">23</div>
                                                    <div className="artical-date-bottom-content">9월</div>
                                                </div>
                                                <div className="artical-avilability">
                                                    <span className="artical-btn">벼룩시장</span>
                                                    <span className="artical-avilability-title cursor-pointer">동경 아타리지역 2룸임대 <span className="artical-avilability-title-sub-text"></span></span>
                                                </div>
                                                <div className="artical-views">조회수 1234</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="business-section">
                            <div className="business-title">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="business-left-text-1">주변과 가까운 업소</span>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="dropdown select-align-right main-page-dropdown">
                                            <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                전체
                                            <i className="fa fa-angle-down arrow-icon " aria-hidden="true" />
                                            </button>
                                            <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >식당</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("마트")}>마트</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("부동산")}>부동산</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("컨설팅")}>컨설팅</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("렌트")}>렌트</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("학원")}>학원</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>컴퓨터</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>병원</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("헬쓰")}>헬쓰</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>기타</option>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="business-bottom-panel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="business-img-main-box">
                                            <div className="business-img-box">
                                                <div className="business-img">
                                                    <img src="src\assets\img\HomePage\BusinessImg.png" className="img-style"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="business-img-info">
                                                    <div className="business-info-text">
                                                        <ShoppingCartOutlinedIcon className="businees-icon" />
                                                        <div className="businees-text">Business Name</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="business-img-box">
                                                <div className="business-img">
                                                    <img src="src\assets\img\HomePage\BusinessImg.png" className="img-style"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="business-img-info">
                                                    <div className="business-info-text">
                                                        <ShoppingCartOutlinedIcon className="businees-icon" />
                                                        <div className="businees-text">Business Name</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="business-img-box">
                                                <div className="business-img">
                                                    <img src="src\assets\img\HomePage\BusinessImg.png" className="img-style"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="business-img-info">
                                                    <div className="business-info-text">
                                                        <ShoppingCartOutlinedIcon className="businees-icon" />
                                                        <div className="businees-text">Business Name</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="business-img-box">
                                                <div className="business-img">
                                                    <img src="src\assets\img\HomePage\BusinessImg.png" className="img-style"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="business-img-info">
                                                    <div className="business-info-text">
                                                        <ShoppingCartOutlinedIcon className="businees-icon" />
                                                        <div className="businees-text">Business Name</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="business-img-box">
                                                <div className="business-img">
                                                    <img src="src\assets\img\HomePage\BusinessImg.png" className="img-style"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="business-img-info">
                                                    <div className="business-info-text">
                                                        <ShoppingCartOutlinedIcon className="businees-icon" />
                                                        <div className="businees-text">Business Name</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="business-img-box">
                                                <div className="business-img">
                                                    <img src="src\assets\img\HomePage\BusinessImg.png" className="img-style"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="business-img-info">
                                                    <div className="business-info-text">
                                                        <ShoppingCartOutlinedIcon className="businees-icon" />
                                                        <div className="businees-text">Business Name</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recommended-section">
                            <div className="recommended-title">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="recommended-left-text-1">추천 맛집</span>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="dropdown select-align-right main-page-dropdown">
                                            <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                전체
                                            <i className="fa fa-angle-down arrow-icon " aria-hidden="true" />
                                            </button>
                                            <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >정글푸드 바로 가기</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>인기 맛집</option>
                                                <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>나의 맛집</option>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="recommended-bottom-panel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="recommended-img-main-box">
                                            <div className="recommended-img-box">
                                                <div className="recommended-img">
                                                    <img src="src\assets\img\HomePage\RestaurantImg1.jpg" className="img-style restaurant-img"></img>
                                                    <img src="src\assets\img\HomePage\RestaurantImgHover.png" className="img-style restaurant-img-hover"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="recommended-img-info">
                                                    <div className="recommended-info-text">
                                                        <RestaurantIcon className="restaurantIcon-icon" />
                                                        <div className="recommended-text">프리모바치오바치</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recommended-img-box">
                                                <div className="recommended-img">
                                                    <img src="src\assets\img\HomePage\RestaurantImg2.jpg" className="img-style restaurant-img"></img>
                                                    <img src="src\assets\img\HomePage\RestaurantImgHover.png" className="img-style restaurant-img-hover"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="recommended-img-info">
                                                    <div className="recommended-info-text">
                                                        <RestaurantIcon className="restaurantIcon-icon" />
                                                        <div className="recommended-text">서가앤쿡</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recommended-img-box">
                                                <div className="recommended-img">
                                                    <img src="src\assets\img\HomePage\RestaurantImg2.jpg" className="img-style restaurant-img"></img>
                                                    <img src="src\assets\img\HomePage\RestaurantImgHover.png" className="img-style restaurant-img-hover"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="recommended-img-info">
                                                    <div className="recommended-info-text">
                                                        <RestaurantIcon className="restaurantIcon-icon" />
                                                        <div className="recommended-text">서가앤쿡</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recommended-img-box">
                                                <div className="recommended-img">
                                                    <img src="src\assets\img\HomePage\RestaurantImg1.jpg" className="img-style restaurant-img"></img>
                                                    <img src="src\assets\img\HomePage\RestaurantImgHover.png" className="img-style restaurant-img-hover"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="recommended-img-info">
                                                    <div className="recommended-info-text">
                                                        <RestaurantIcon className="restaurantIcon-icon" />
                                                        <div className="recommended-text">프리모바치오바치</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="recommended-img-box">
                                                <div className="recommended-img">
                                                    <img src="src\assets\img\HomePage\RestaurantImg2.jpg" className="img-style restaurant-img"></img>
                                                    <img src="src\assets\img\HomePage\RestaurantImgHover.png" className="img-style restaurant-img-hover"></img>
                                                    <MyLocationIcon className="my-location-icon" />
                                                </div>
                                                <div className="recommended-img-info">
                                                    <div className="recommended-info-text">
                                                        <RestaurantIcon className="restaurantIcon-icon" />
                                                        <div className="recommended-text">서가앤쿡</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-group-section-div">
                            <ImgGroupSection></ImgGroupSection>
                        </div>
                        <div className="video-section">
                            <div className="video-title">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="video-left-text-1">지금 뜨는 동영상</span>

                                    </div>
                                    <div className="col-md-6">

                                        <div className="dropdown select-align-right main-page-dropdown">
                                            <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                전체
                                            <i className="fa fa-angle-down arrow-icon " aria-hidden="true" />
                                            </button>
                                            <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >지역선택</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>일본</option>
                                                <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>인도네시아</option>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="video-bottom-panel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="video-img-main-box">
                                            <div className="video-img-box">
                                                <div className="video-img">
                                                    <img src="src\assets\img\HomePage\VideoSectionImg1.jpg" className="img-style"></img>
                                                    <div className="video-timer-div">
                                                        00:00
                                                    </div>
                                                </div>
                                                <div className="video-img-info">
                                                    <div className="video-info-text">
                                                        <div className="video-main-text">동경 개발자 이야기</div>
                                                        <div className="video-sub-text-1">마추피추</div>
                                                        <div className="video-sub-text-2">좋아요  124만회     조회수  1.4만</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-img-box">
                                                <div className="video-img">
                                                    <img src="src\assets\img\HomePage\VideoSectionImg2.jpg" className="img-style"></img>
                                                    <div className="video-timer-div">
                                                        00:00
                                                    </div>
                                                </div>
                                                <div className="video-img-info">
                                                    <div className="video-info-text">
                                                        <div className="video-main-text">동경 개발자 이야기</div>
                                                        <div className="video-sub-text-1">마추피추</div>
                                                        <div className="video-sub-text-2">좋아요  124만회     조회수  1.4만</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-img-box">
                                                <div className="video-img">
                                                    <img src="src\assets\img\HomePage\VideoSectionImg3.jpg" className="img-style"></img>
                                                    <div className="video-timer-div">
                                                        00:00
                                                    </div>
                                                </div>
                                                <div className="video-img-info">
                                                    <div className="video-info-text">
                                                        <div className="video-main-text">동경 개발자 이야기</div>
                                                        <div className="video-sub-text-1">마추피추</div>
                                                        <div className="video-sub-text-2">좋아요  124만회     조회수  1.4만</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="video-img-box">
                                                <div className="video-img">
                                                    <img src="src\assets\img\HomePage\VideoSectionImg4.jpg" className="img-style"></img>
                                                    <div className="video-timer-div">
                                                        00:00
                                                    </div>
                                                </div>
                                                <div className="video-img-info">
                                                    <div className="video-info-text">
                                                        <div className="video-main-text">동경 개발자 이야기</div>
                                                        <div className="video-sub-text-1">마추피추</div>
                                                        <div className="video-sub-text-2">좋아요  124만회     조회수  1.4만</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-page-right-panel">
                    <div className="right-data-panel">
                        <div className="data-top-box">
                            <div className="title">환율</div>
                            <div className="sub-title">
                                <span className="sub-title-text-1">원달러</span>
                                <span className="sub-title-text-2">미국USD</span>
                            </div>
                            <div className="percentage">
                                <span className="percentage-text-1">1,200.50</span>
                                <span className="percentage-text-2">- 0.00(0%)</span>
                            </div>
                        </div>
                        <div className="data-bottom-box">
                            <div className="dropdown main-page-dropdown">
                                <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                    매매기준율
                                            <i className="fa fa-caret-down arrow-icon " aria-hidden="true" />
                                </button>
                                <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                    <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >지역선택</option>
                                    <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>일본</option>
                                    <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>인도네시아</option>
                                </div>
                            </div>
                            <div className="dropdown main-page-dropdown">
                                <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                    환율우대없음
                                            <i className="fa fa-caret-down arrow-icon " aria-hidden="true" />
                                </button>
                                <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                    <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >지역선택</option>
                                    <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>일본</option>
                                    <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>인도네시아</option>
                                </div>
                            </div>
                        </div>
                        <div className="data-usd-input-box">
                            <div className="dropdown main-page-dropdown data-usd-input-dropdown">
                                <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button cust-data-drop" data-toggle="dropdown">
                                    <span className="usd-text">미국</span>
                                    <span className="usd-count">USD</span>
                                    <i className="fa fa-caret-down arrow-icon " aria-hidden="true" />
                                </button>
                                <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                    <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >지역선택</option>
                                    <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>일본</option>
                                    <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>인도네시아</option>
                                </div>
                            </div>
                            <div className="data-usd-input-box-content">
                                <div className="data-usd-input-box-content-left">1</div>
                                <div className="data-usd-input-box-content-right">달러</div>
                            </div>
                            <span className="equal-border-icon">=</span>
                        </div>
                        <div className="data-usd-input-box">
                            <div className="dropdown main-page-dropdown data-usd-input-dropdown">
                                <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button cust-data-drop" data-toggle="dropdown">
                                    <span className="usd-text">대한민국</span>
                                    <span className="usd-count">KRW</span>
                                    <i className="fa fa-caret-down arrow-icon " aria-hidden="true" />
                                </button>
                                <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                    <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >지역선택</option>
                                    <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>일본</option>
                                    <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>인도네시아</option>
                                </div>
                            </div>
                            <div className="data-usd-input-box-content">
                                <div className="data-usd-input-box-content-left">1,200.50</div>
                                <div className="data-usd-input-box-content-right">원</div>
                            </div>

                        </div>
                        <div className="data-pause-box"></div>
                        <div className="data-krw-box"></div>
                        <div className="data-total-count"></div>
                    </div>
                    <div className="calendar-design">
                        <Calendar
                            onChange={this.onCalendarDateChange}
                            value={calendarDate}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Main;
