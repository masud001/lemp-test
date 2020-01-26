import React, { Component } from 'react';
import { Badge, Avatar, IconButton, Menu, MenuItem, Button } from '@material-ui/core';

import TopBanner from "../../components/TopBannerComponent/TopBanner.jsx";
import Logo_1 from "./../../assets/img/main-logo.png";
import White_Logo from "./../../assets/img/logo-white.png";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { HEADER_MENU_CLICK, AD_POPUP_CLICK } from "../../store/constraint";
import Loginheader from "../LoginheaderComponent/Loginheader.jsx";
import SideMenu from "../LoginheaderComponent/SideMenu.jsx";
import AdWarning from "../../containers/AdPage/AdSelectModal/AdSelectWarningModal.jsx";



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSerchMenuClicked: false, MainDropDown1: 1, MainDropDown2: 1, MainDropDown3: 1, profileMenu: null,
            isWaningModalOpen:false
        }
        this.handleWarningModal = this.handleWarningModal.bind(this);
        this.locationIds();
    }
    
    locationIds() {
        // let ids = localStorage.getItem("locationIds");
        let ids = [
            {locationKey: "mainPageCenter1", locationId:"MC001"},
            {locationKey: "mainPageCenter2", locationId:"MC002"},
            {locationKey: "mainPageCenter3", locationId:"MC003"},
            {locationKey: "mainPageCenter4", locationId:"MC004"},
            {locationKey: "mainPageCenter5", locationId:"MC005"},
            {locationKey: "mainPageRight1", locationId:"MR001"},
        ];
        localStorage.setItem("locationIds", JSON.stringify(ids));
    }
     
    handleWarningModal(item) {
        this.props.onAdModalClick(item);
        // this.setState({
        //     isWaningModalOpen: item
        // });
    } 


    render() {

        const { match, location, history } = this.props;
        let isTestimonialEnable = location && location.pathname === "/" ? true : false;
        let isTestimonialDataEnable = this.props.isTestimonialDataEnable ? true : false;

        return (
            <div id="header">

                <header >
                    {/* <div className= {isTestimonialEnable ? "header-container testimonial header-style-two pad-0 " : "header-container testimonial without-testimonial  header-style-two pad-0  "}> */}
                    <div className={(isTestimonialEnable || isTestimonialDataEnable) ? "header-container testimonial header-style-two pad-0 " : "header-container  without-testimonial  header-style-two pad-0 sticking  "}>
                        {(isTestimonialEnable || isTestimonialDataEnable) &&
                            <div className="header-slider-panel">
                                <div className="container-main">
                                    <TopBanner />
                                </div>
                            </div>}
                        <div className="header-menu-panel">
                            <div className="container-main">
                                <AdWarning isWarnigPopupActive = {this.props.isAdModalOpen} style={{marginTop:"200px"}} onWarnigModalDisplay ={(x)=> this.handleWarningModal(x)}/>
                                <div className="row">
                                    <div className="col-md-3">
                                        {/* onClick={() => { history.push('/new-location') }} */}
                                        {/* <Link to="/main" className="navbar-brand logo-space"> */}
                                        <div className="img-div-logo navbar-brand logo-space" onClick={() => window.location.href = "/"}>

                                            {/* Date 03-10-19 I replaced Logo_1  */}
                                            {/* <img src="src\assets\img\Header\HeaderBlueTitleLogo.png" className="logo-blue"></img> */}
                                            <img src="src\assets\img\Header\header-logo.png" className="logo-blue"></img>
                                            <img src="src\assets\img\Header\WhiteLogo.png" className="logo-white"></img>
                                            {/* <img src={Logo_1} className="logo-blue"></img> */}
                                            {/* <img src="src\assets\img\Header\HeaderWhiteTitleLogo.png" className="logo-white"></img> */}
                                        </div>
                                        {/* </Link> */}
                                    </div>
                                    <div className="col-md-9">
                                        <nav className="navbar navbar-expand-lg navbar-light bg-white position-ab text-center navbar-icon pad-0 ml-2">
                                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>

                                            <div className="collapse navbar-collapse mini-menu" id="navbarSupportedContent">
                                                <ul className="navbar-nav mr-auto menu-setting">
                                                    <li className="nav-item active">
                                                        {/* BuyandSell  */}
                                                        <Link to="/blogList" className="nav-link nav-cust" onClick={() => this.props.onHandleMenuClick("Buy&Sell")}>정글장터<span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    <li className="nav-item active">
                                                        {/*  real estate */}
                                                        <Link to="/blogList" className="nav-link nav-cust" onClick={() => this.props.onHandleMenuClick("RealEstate")}>부동산<span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    {/* Jungle TV */}
                                                    {/* <li className="nav-item active">
                                                       
                                                       <Link to="/blogList" className="nav-link nav-cust">유투브 <span className="sr-only">(current)</span></Link>  
                                                    </li> */}
                                                    <li className="nav-item active">
                                                        {/*  Travel Info */}
                                                        <Link to="/blogList" className="nav-link nav-cust" onClick={() => this.props.onHandleMenuClick("Travel Info")}>여행정보 <span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    <li className="nav-item active">
                                                        {/* employment */}
                                                        <Link to="/blogList" className="nav-link nav-cust" className="nav-link nav-cust" onClick={() => this.props.onHandleMenuClick("Employment")}>구인구직 <span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    <li className="nav-item active">
                                                        {/* cafe */}
                                                        <Link to="/cafe-list" className="nav-link nav-cust" className="nav-link nav-cust" onClick={() => this.props.onHandleMenuClick("Cafe")}>카페/동호회 <span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    <li className="nav-item active">
                                                        {/* localInfoQ&A */}
                                                        <Link to="/localInfoQnA" className="nav-link nav-cust" className="nav-link nav-cust" onClick={() => this.props.onHandleMenuClick("LocalInfo QnA")}>생활정보QnA <span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    <li className="nav-item active">
                                                        {/* Chatting List */}
                                                        <Link to="/chatting-list" className="nav-link nav-cust" className="nav-link nav-cust" onClick={() => this.props.onHandleMenuClick("Chatting Rooms")}>바로바로 단톡방<span className="sr-only">(current)</span></Link>
                                                    </li>
                                                    <li className="nav-item active">
                                                        {/* News */}
                                                        <Link to="/newsnnotice" className="nav-link nav-cust" onClick={() => this.props.onHandleMenuClick("News & Notice")}>뉴스와공지 <span className="sr-only">(current)</span></Link>
                                                    </li>
                                                </ul>

                                            </div>
                                        </nav>
                                        <Loginheader navHistory={this.props.history} />

                                    </div>
                                </div>
                            </div>
                            <SideMenu onWaningModal = {(x)=> this.handleWarningModal(x)} />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
const MyHeader = withRouter(Header);
const mapStateToProps = state => {
    return {
        isAdModalOpen: state.data.isAdPopupOpen
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onHandleMenuClick: menuName => {
            dispatch({ type: HEADER_MENU_CLICK, data: menuName });
        },
            onAdModalClick: isAdOpen => {
            dispatch({ type: AD_POPUP_CLICK, data: isAdOpen });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHeader);