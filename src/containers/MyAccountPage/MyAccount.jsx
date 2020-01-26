import React, { Component } from "react";
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import MyAccountTabView from "./MyAccountTabView.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import Edit from '@material-ui/icons/Edit';
import { findIndex } from "lodash";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {AD_POPUP_CLICK} from "../../store/constraint";



class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: "정보 수정"
    };
    this.onMonthSelect = this.onMonthSelect.bind(this);
    this.openModalClick = this.openModalClick.bind(this);
  }
  onMonthSelect(value) {
    this.setState({
        selectedMonth: value
    })
}



openModalClick(item) {
  this.props.onAdModalClick(item);
  }




  render() {
    let { selectedMonth } = this.state;
    return (
      <div id="my-account-page">
        <Mainlogo
          logo={BlogListLogo}
          logoTitleText=""
          logoMainText="내"
          logoSubText="정보"
        ></Mainlogo>

        <div className="my-account-page-section">
          <div className="container-main">
            <div className="my-accounts-logo-text">나의 정보를 자세히 둘러볼 수 있습니다.</div>
            <div className="my-accounts-user-dit">
              <div className="my-accounts-user-dit-left">
                <img src="src\assets\img\user-icon.png"></img>
                <h3>안녕하세요!<span>BIGPIE 123</span>님</h3>
              </div>
              <div className="my-accounts-user-dit-right">
                <div className="dropdown select-align-right main-page-dropdown">
                  <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                    {selectedMonth}
                     <i className="fa fa-angle-down arrow-icon " aria-hidden="true" />
                  </button>
                  <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                    <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onMonthSelect("정보 수정")} >정보 수정</option>
                    <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onMonthSelect("정보 수정 1")}>정보 수정 1</option>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-accounts-info-icons">
              <div className="info-icons-inner-box ">
                <img src="src/assets/img/MyAccountPage/MyAccountImg1.png"></img>
                <div className="icons-text cursor-pointer">
                  <h3 >업소 등록하기</h3>
                <Link to={"/customer-register"}><p className="txt" >고객님의 업소를 무료 등록~!!</p></Link> 
                 </div>
              </div>
              <div className="info-icons-inner-box ">
                <img src="src/assets/img/MyAccountPage/MyAccountImg2.png"></img>
                <div className="icons-text cursor-pointer ">
                  <h3>카페 </h3>
                  <Link to={"/cafe-management"}> <p className="txt">다양한 분야에서 공유하세요.</p></Link>
                </div>
              </div>
              <div className="info-icons-inner-box  ">
                <img src="src/assets/img/MyAccountPage/MyAccountImg3.png"></img>
                <div className="icons-text cursor-pointer">
                  <h3>광고 등록하기</h3>
                   <p className="txt" onClick={() => this.openModalClick(true)}>매출이 팍팍! 상승합니다.</p>
                </div>
              </div>

            </div>
            <div className="my-account-tab-view">
              <MyAccountTabView/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      // headerClickedName: state.data.headerMessage
      
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAdModalClick: isAdOpen => {
      dispatch({ type: AD_POPUP_CLICK, data: isAdOpen });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);

