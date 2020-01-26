import React, { Component } from 'react';
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import AdRequestLogo from "./../../assets/img/ad-request.jpg";
import Main from "./../MainPage/Main.jsx";
import Header from "./../../components/HeaderComponent/Header.jsx";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Input, InputAdornment, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
class AdSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdvtPopupActive: false,
            selectedMonth: "1달"

        };
        this.OnAdvtPopupClick = this.OnAdvtPopupClick.bind(this);
        this.onMonthSelect = this.onMonthSelect.bind(this);
    }
    OnAdvtPopupClick(value) {
        let { isAdvtPopupActive } = this.state;
        
        this.setState({
            isAdvtPopupActive: value
        })
    }

    onMonthSelect(value) {
        this.setState({
            selectedMonth: value
        })
    }
    render() {
        let { isAdvtPopupActive, selectedMonth } = this.state;
        return (
            <div id="ad-select-page">
                <div className="ad-select-section">
                    <div className="container-main">
                        <Mainlogo logo={AdRequestLogo} logoTitleText="" logoMainText="정글뉴스" logoSubText="광고안내" ></Mainlogo>
                        <div className="adselect-text">
                            <div className="adselect-text-1">슬라이더를 클릭하시면 다음 페이지로 이동합니다. 원하시는 곳을 클릭하세요!</div>
                            <div className="adselect-text-1">핑크색 부분을 클릭하시면 팝업창이 뜨고 현재 광고 상황을 보실수 있습니다.</div>
                        </div>
                        <div className="ad-select-main-div" >
                            <div className="ad-select-main-page" onClick={() => this.OnAdvtPopupClick(true)}>
                                <Header isTestimonialDataEnable={true}  />
                                <Main />
                            </div>
                            {isAdvtPopupActive &&
                                <div className="map-advt-popup">
                                    <div className="advt-popup-head">
                                        <span className="head-status"><span className="round-design"></span></span>
                                        <span className="head-title">Location ID : LT001</span>
                                        <span className="head-close" onClick={() => this.OnAdvtPopupClick(false)} ><CloseIcon /></span>
                                    </div>
                                    <div className="advt-popup-body">
                                        <div className="advt-popup-body-main">
                                            <div className="advt-popup-body-main-left">기존 광고 종료일</div>
                                            <div className="advt-popup-body-main-right">00.00.00 (금)</div>
                                        </div>
                                        <div className="advt-popup-body-dropdown">

                                            <div className="dropdown select-align-right main-page-dropdown ">
                                                <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                    {selectedMonth}
                                                    <i className="fa fa-angle-down arrow-icon " aria-hidden="true" />
                                                </button>
                                                <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                    <option value="1달" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onMonthSelect("1달")}>1달</option>
                                                    <option value="2달" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onMonthSelect("2달")}>2달</option>
                                                    <option value="3달" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onMonthSelect("3달")}>3달</option>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="advt-popup-body-info-text-1">일일 $12</div>
                                        <div className="advt-popup-body-info-text-2"> 총 $234.00</div>
                                        <div className="advt-popup-body-button">
                                            <Button variant="outlined" className="advt-popup-body-button-design">광고 예약</Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default AdSelect;