import React, { Component } from 'react';
import { Popover, Typography, Button } from '@material-ui/core';
import { Apps } from '@material-ui/icons';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RedirectTo: [
                { optionName: "업체무료등록", navigateTo: "/customer-register" },
                { optionName: "교민업체목록", navigateTo: "/shopownerlist" },
                { optionName: "카페관리", navigateTo: "/cafe-management" },
                // { optionName: "광고문의", navigateTo: "/letest-ad-select" }
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(data) {
        const optionName = this.state.RedirectTo.filter(x => x.optionName == data);
        if (optionName.length > 0) {
            const matchedNavigateTo = optionName[0].navigateTo;
            this.props.history.push(matchedNavigateTo);
        } else {
            alert("현재 준비중입니다.");
        }

    }

    openModalClick(evnt) {
        this.props.onWaningModal(true);
    }


    render() {
        const { match, location, history } = this.props;
        let isTestimonialEnable = location && location.pathname === "/" ? true : false;

        return (
            <>
                <div className="dropdown select-align-right main-page-dropdown">

                    <button type="button" id="dd_drop_3" className="custom-main-div-dropdown-menu-apps" data-toggle="dropdown">
                        <Apps style={{fontSize: '35px' }} />
                    </button>

                    <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                        <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.handleClick("지역선택")} >지도로 보기</option>
                        <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.handleClick("업체무료등록")}>업체무료등록</option>
                        <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.handleClick("교민업체목록")}>교민업체목록</option>
                        <option value="3" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.handleClick("카페관리")}>카페관리</option>
                        <option value="4" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.handleClick("정글포인트")}>정글포인트</option>
                        <option value="5" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.openModalClick(true)}>광고문의</option>
                        <option value="5" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.handleClick("개발API")}>개발 API</option>
                    </div>
                </div>
            </>
        )
    }

}

export default withRouter(SideMenu);