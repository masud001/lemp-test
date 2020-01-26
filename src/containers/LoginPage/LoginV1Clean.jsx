import React, { Component } from 'react';
import loginLogo from "./../../assets/img/login-v1-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import LoginSection from "../../components/LoginSectionComponent/LoginSection.jsx"
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
class LoginV1Clean extends Component {
    render() {
        return (
            <div id="login-v1-page">
                <div>
                    <div className="container">
                        <div className="login-v1-main">
                            <div className="login-v1-logo">
                                <Mainlogo logo={loginLogo} logoTitleText ="Tokyo"  logoMainText="정글속으로," logoSubText="로그인!"></Mainlogo>
                                <div className="ad-text">
                                    <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>

                                    <div className="div-text-2">왼쪽의 약관 동의를 체크하신 후 우측의 버튼을 통해서 가입하실 수있습니다.</div>
                                </div>
                            </div>
                            <div className="login-v1-list-content">
                                <LoginSection></LoginSection>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default LoginV1Clean;