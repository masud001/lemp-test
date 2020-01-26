import React, { Component } from 'react';
import { TextField, Button, Select, InputAdornment, IconButton, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import PanToolIcon from '@material-ui/icons/PanTool';
import DeleteIcon from '@material-ui/icons/Delete';
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import ImgGroupSection from "../../components/ImageGroupComponent/ImgGroupSection.jsx";
import CustomerListLogo from "./../../assets/img/customer-list-logo.jpg";

import joincafeheader from "./../../assets/img/joincafe/joincafe-header.png";
import iconHome from "./../../assets/img/joincafe/icon-home.png";
import iconshoppingcart from "./../../assets/img/joincafe/icon-shopping-cart.png";
import iconglobe from "./../../assets/img/joincafe/icon-globe.png";
import iconyoutube from "./../../assets/img/joincafe/icon-youtube.png";
import iconcompass from "./../../assets/img/joincafe/icon-compass.png";
import iconusers from "./../../assets/img/joincafe/icon-users.png";
import iconnetwork from "./../../assets/img/joincafe/icon-network.png";
import iconmegaphone from "./../../assets/img/joincafe/icon-megaphone.png";
import brupPurple from "./../../assets/img/joincafe/br_up-purple.png";
import footerLogo from "./../../assets/img/joincafe/footer-logo.png"
import twitter from "./../../assets/img/joincafe/twitter.png"
import facebook from "./../../assets/img/joincafe/facebook.png"
import instagram from "./../../assets/img/joincafe/instagram.png"

class CafeManagement extends Component {
    render() {
        let TblIconPos = {
            IconDiv: {
                position: "relative"
            },
            Icon: {
                position: "absolute",
                right: 0,
                fontSize: "29px",
                color: "#6e47d4",
                top: "-5px",
            }
        }
        return (
            <div id="cafe-management-page">
                <div className="cafe-management-section">

                    <div className="joincafe-head">
                        <div className="wrap mb-5">
                            {/* <Mainlogo logo={joincafeheader} logoTitleText ="Tokyo"  logoMainText="정글장터" logoSubText="블로그"></Mainlogo> */}
                            <img src={joincafeheader} alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="joincafe-blog">
                        <div className="wrap">
                            <div className="row">
                                <div className="col-5">
                                    <div className="table-head">
                                        전체 블로그
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th>블로그 타이틀</th>
                                                    <th>포스팅 수</th>
                                                    <th>액션</th>
                                                </tr>
                                                <tr>
                                                    <td className="txt cursor-pointer" >sELLING COSMETICS</td>
                                                    <td>2</td>
                                                    <td><Button  variant="contained" color="primary" size="small" className="ad-button"  ><DoneIcon /> 활성화</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="txt cursor-pointer" >sELLING COSMETICS</td>
                                                    <td>2</td>
                                                    <td><Button className="table-badge-btn-pink"  variant="contained" > <PanToolIcon /> 비활성화</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="txt cursor-pointer" >sELLING COSMETICS</td>
                                                    <td>2</td>
                                                    <td><Button  variant="contained" color="primary" size="small" className="ad-button"  ><DoneIcon /> 활성화</Button></td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                    <nav className="table-nav">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item"><a href="#">1</a></li>
                                            <li className="page-item active" aria-current="page">
                                                <span>
                                                    2
                                </span>
                                            </li>
                                            <li className="page-item"><a href="#">3</a></li>
                                            <li className="page-item"><a href="#">4</a></li>
                                        </ul>
                                    </nav>
                                </div>
                               <div className="col-2"></div>
                                <div className="col-5">
                                    <div className="cusDD_default table-head tableDropdown">
                                        <select id="select1" className="select-purple">
                                            <option value="" data-display-text="">블로그 : 엄마의 포럼</option>
                                            <option value="apples">블로그</option>
                                            <option value="bananas">블로그 : 엄마의 포럼</option>
                                        </select>
                                        <div className="cusDD_arrow"></div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>

                                                <tr>
                                                    <th>블로그 타이틀</th>
                                                    <th>포스팅 수</th>
                                                    <th>액션</th>
                                                </tr>
                                                <tr>
                                                    <td className="txt cursor-pointer" >sELLING COSMETICS</td>
                                                    <td>2</td>
                                                    <td><Button className="table-badge-btn-pink"  variant="contained"  > <DeleteIcon/> 삭제</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="txt cursor-pointer">sELLING COSMETICS</td>
                                                    <td>2</td>
                                                    <td><Button className="table-badge-btn-pink"  variant="contained"  > <DeleteIcon/> 삭제</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="txt cursor-pointer">sELLING COSMETICS</td>
                                                    <td>2</td>
                                                    <td><Button className="table-badge-btn-pink"  variant="contained"  > <DeleteIcon/> 삭제</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="txt cursor-pointer">sELLING COSMETICS</td>
                                                    <td>2</td>
                                                    <td><Button className="table-badge-btn-pink" variant="contained"   > <DeleteIcon/> 삭제</Button></td>
                                                </tr>
                                                <tr>
                                                    <td className="txt cursor-pointer">sELLING CLOTHS</td>
                                                    <td>2</td>
                                                    <td><Button className="table-badge-btn-pink"  variant="contained"  > <DeleteIcon/> 삭제</Button></td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                    <nav className="table-nav">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item"><a href="#">1</a></li>
                                            <li className="page-item active" aria-current="page">
                                                <span>
                                                    2
                                </span>
                                            </li>
                                            <li className="page-item"><a href="#">3</a></li>
                                            <li className="page-item"><a href="#">4</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="wrap mt-wrap">
                    <div className="table-head">
                        회원정보
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>회원 유저 네임</th>
                                    <th>Join 날짜</th>
                                    <th>포스팅 수</th>
                                    <th>CafeAnser 1</th>
                                    <th>CafeAnser 1</th>
                                    <th>CafeAnser 1</th>
                                    <th>액션</th>
                                    <th>&nbsp;</th>
                                </tr>
                                <tr>
                                    <td>UserName</td>
                                    <td>2019 Mar 22</td>
                                    <td>2</td>
                                    <td>Yes</td>
                                    <td>+82 10 2829 8400</td>
                                    <td>N/A</td>
                                    <td>활성화</td>
                                    <td style={{ paddingRight: 0 }}>
                                        <a href="#" style={{ float: "right" }}>
                                            <div style={TblIconPos.IconDiv}>
                                                <i className="fa fa-angle-down" style={TblIconPos.Icon} aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>UserName</td>
                                    <td>2019 Mar 22</td>
                                    <td>2</td>
                                    <td>Yes</td>
                                    <td>+82 10 2829 8400</td>
                                    <td>N/A</td>
                                    <td>활성화</td>
                                    <td style={{ paddingRight: 0 }}>
                                        <a href="#" style={{ float: "right" }}>
                                            <div style={TblIconPos.IconDiv}>
                                                <i className="fa fa-angle-down" style={TblIconPos.Icon} aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>UserName</td>
                                    <td>2019 Mar 22</td>
                                    <td>2</td>
                                    <td>Yes</td>
                                    <td>+82 10 2829 8400</td>
                                    <td>N/A</td>
                                    <td>활성화</td>
                                    <td style={{ paddingRight: 0 }}>
                                        <a href="#" style={{ float: "right" }}>
                                            <div style={TblIconPos.IconDiv}>
                                                <i className="fa fa-angle-down" style={TblIconPos.Icon} aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <nav className="table-nav">
                        <ul className="pagination justify-content-center mt-4">
                            <li className="page-item"><a href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                                <span>
                                    2
                    </span>
                            </li>
                            <li className="page-item"><a href="#">3</a></li>
                            <li className="page-item"><a href="#">4</a></li>
                        </ul>
                    </nav>
                </div>
                {/* </div > */}

                {/* <footer className="footer ftop-m">
                    <div className="wrap">
                        <div className="row footer-drop-down-div mt-3">
                            <div className="col-6">
                                <p><img src={footerLogo} alt="Logo" className="img-fluid" /></p>
                                <p className="">&copy; 2019 Simplyonline.io. All rights reserved.</p>
                            </div>
                            <div className="col-6 text-right language">
                                <div className="custom-select" >
                                    <select>
                                        <option value="0">Language</option>
                                        <option value="1">English</option>
                                        <option value="2">Korean</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="dropdown col-6 text-right">

                                <button type="button" id="dd_drop_3" className="btn dropdown-footer dropdown-toggle footer-dropdown" data-toggle="dropdown">
                                    Language
            <i className="fa fa-angle-down" aria-hidden="true" />
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Language 1</a>
                                    <a className="dropdown-item" href="#">Language 2</a>
                                    <a className="dropdown-item" href="#">Language 3</a>
                                </div>
                            </div> 
                        </div>
                        <hr className="hr" />
                        <div className="row">
                            <div className="col-6">
                                <a href="#">회사안내</a> <a href="#">광고문의</a> <a href="#">사용자 이용약관</a> <a href="#">Privacy Policy</a> <a
                                    href="#">Contact Us</a>


                            </div>
                            <div className="col-6">
                                <div className="social">
                                    <a href="#" className="twitter"><img src={twitter} alt="" /></a>
                                    <a href="#" className="facebook"><img src={facebook} alt="" /></a>
                                    <a href="#" className="instagram"><img src={instagram} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
                <Footer />
            </div >

        )
    }
}
export default CafeManagement;