import React, { Component } from 'react';
import FooterWhiteLogo from "./../../assets/img/footer-logo-no-cap.png"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { footerDropdownVal: 'langauge' };

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.onLangaugeSelect = this.onLangaugeSelect.bind(this);
    }

    handleDropdownChange(event) {
        this.setState({ footerDropdownVal: event.target.value });
    }
    onLangaugeSelect(data) {
        this.setState({
            footerDropdownVal: data
        })
    }

    render() {
        let { footerDropdownVal } = this.state;
        return (
            <div id="footer" className="footer">
                <div className="container-main">
                    <div className="footer-border">
                        <div className="footer-content-data">
                            <div className="footer-logo-div">
                                {/* <img src="src\assets\img\Header\HeaderWhiteTitleLogo.png" className="logo-style" /> */}
                                <img src="src\assets\img\Header\WhiteLogo.png" className="logo-style" />
                            </div>
                            <div className="footer-list-content">
                                <div className="footer-logo-list">
                                    <div className="footer-link-list-main-div">
                                        <div className="footer-link-list-sub-div">
                                            <ul className="footer-link-list-data">
                                                <li className="footer-link-list"><a href="#" className="footer-link">회사안내</a></li> {/* company info */}
                                                <li className="footer-link-list"><a href="#" className="footer-link">광고문의</a></li> {/*Inquiry for Ad */}
                                                <li className="footer-link-list"><a href="#" className="footer-link">사용자 이용약관</a></li> {/* terms and conditions */}
                                                <li className="footer-link-list"><a href="#" className="footer-link">Privacy Policy</a></li>
                                                <li className="footer-link-list"><a href="#" className="footer-link">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-drop-down-div mt-3">
                                        <div className="dropdown">
                                            <button type="button" id="dd_drop_3" className="btn footer-dropdown custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                {footerDropdownVal}
                                                <i className="fa fa-angle-down " aria-hidden="true" />
                                            </button>
                                            <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >지역선택</option>
                                                <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>일본</option>
                                                <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>인도네시아</option>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-text-div">
                                    <div className="footer-text-data">
                                        <div className="footer-contect-line">
                                            <span className="footer-line-1">(00000) 서울특별시 어쩌구 이쪽대로 12길 34 무슨빌딩</span>
                                            <span className="footer-line-2">TEL: 02-3498-8500</span>
                                        </div>
                                        <div className="footer-contect-line">
                                            <span className="footer-line-3">© 2019 Simplyonline.io. All rights reserved.</span>
                                        </div>

                                    </div>
                                    <div className="footer-icon-data">
                                        <div className="footer-icon-text">
                                            <ul className="footer-icon-list-data">
                                                <li className="footer-icon-list">
                                                    <a href="#" className="footer-icon-link"> <i className="fa fa-twitter-square social-icon" aria-hidden="true"></i></a>
                                                    <a href="#" className="footer-icon-link mar-l-15"> <i className="fa fa-facebook-square social-icon" aria-hidden="true"></i></a>
                                                    <a href="#" className="footer-icon-link mar-l-20"><i className="fa fa-instagram social-icon" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="copyright-footer">
                    <div className="container-main">
                        <div className="footer-img-text">
                            © 2019 Simplyonline.io. All rights reserved.
                            </div>
                            </div>
                    </div> */}
            </div>
        )
    }
}
export default Footer;