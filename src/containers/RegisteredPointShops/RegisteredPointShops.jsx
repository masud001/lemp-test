import React, { Component } from 'react';
import RegisterLogo from "./../../assets/img/Register-point-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import RegisteredShopList from "../../components/TableComponent/RegisteredShopList.jsx";
import { TextField, Button, Select, InputAdornment, IconButton, MenuItem, InputLabel, FormControl, ListItem  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


class RegisterPoint extends Component {

    render() {
        return (
            <div id="register-point-v1">
                <div className="container">
                    <Mainlogo logo={RegisterLogo} logoTitleText ="Tokyo"  logoMainText="정글 적립카드" logoSubText="업소목록"></Mainlogo>
                        <div className="ad-text" style={{marginTop:"0px"}}>
                            <div className="div-text-1">정글 멤버쉽카드는 방문하시는 고객들께 무료로 발급해드리는 적립타드입니다.</div>

                            <div className="div-text-2">적립금은 정글뉴스에서 재 사용 할 수 있거나 당사와 연계된 항공권 할인</div>
                        </div>
                    <div className="page-filter-box-main-div">
                        <div className="page-filter-box-sub-div">
                            
                            <div className="page-filter-dropdown">                                
                            <div className="dropdown select-purple-align">
                                        <button type="button" id="dd_drop_3" className="btn select-purple footer-dropdown custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                        All
                                            <i className="fa fa-angle-down " aria-hidden="true" />
                                        </button>
                                        <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                            <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >지역선택</option>
                                            <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>일본</option>
                                            <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>인도네시아</option>
                                        </div>
                                    </div>
                            </div>
                            <div className="page-filter-input">
                                <TextField
                                    id="ValueSearch"
                                    name="ValueSearch"
                                    className="fullWidth"
                                  //  value={ValueSearch}
                                    onChange={this.onHandleFormChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    aria-label="toggle password visibility"
                                                >
                                                    <SearchIcon></SearchIcon>
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="registe-point-main">
                        <div className="register-point-table-title">
                            <span className="tbl-title-text">전체 회원</span>
                            <span className="tbl-title-count">242</span>
                        </div>
                        <RegisteredShopList></RegisteredShopList>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default RegisterPoint;