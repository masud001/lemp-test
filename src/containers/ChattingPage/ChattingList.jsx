import React, { Component } from 'react';
import { TextField, Button, Select, InputAdornment, IconButton, MenuItem, InputLabel, FormControl, ListItem  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Footer from "../../components/FooterComponent/Footer.jsx";
import BlogDetailLogo from "./../../assets/img/blog-detail-logo.jpg";
// import DummyIcon from "./../../assets/img/Dummy-icon.png";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import ChattingRoomTable from "./ChattingRoomTable.jsx";
import Pagenation from "../../components/UtilityComponent/Pagenation.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import { connect } from "react-redux";
import { findIndex } from "lodash";
import Cap_Man from "./../../assets/img/cap-man.png";



class ChattingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectTabKey: "Tokyo", MainDropDown1: 1, MainDropDown2: 1,
            categorySubtitle: "Chatting Rooms",
            chattingList: [
                {
                    tabKey: 'Tokyo', displayName: "동경", data: [
                        { username: 'Sonny', opennlock: true, title: 'I will buy a computer', tags: 'computer', members: '23' },
                        { username: 'Wonhee', opennlock: false, title: 'I need to rent a house', tags: 'House', members: '23' },
                        { username: 'Sonny', opennlock: true, title: 'I will buy a ar', tags: 'car', members: '23' }
                    ]
                },
                {
                    tabKey: 'Osaka', displayName: "오사카", data: [
                        { username: 'Mansur', opennlock: true, title: 'I will buy a computer', tags: 'computer', members: '23' },
                        { username: 'Wonhee', opennlock: true, title: 'I need to rent a house', tags: 'House', members: '23' },
                        { username: 'Sonny', opennlock: true, title: 'I will buy a ar', tags: 'car', members:'23' }
                    ]
                },
                {
                    tabKey: 'Kagosima', displayName: "카고시마", data: [
                        { username: 'James', opennlock: true, title: 'I will buy a computer', tags: 'computer', members: '23' },
                        { username: 'Wonhee', opennlock: true, title: 'I need to rent a house', tags: 'House', members:'23' },
                        { username: 'Sonny', opennlock: true, title: 'I will buy a ar', tags: 'car', members: '23' }
                    ]
                },
                {
                    tabKey: 'Hotkaido', displayName: "홋카이도", data: [
                        { username: '왕정치', opennlock: true, title: 'I will buy a computer', tags: 'computer', members: '23' },
                        { username: 'Wonhee', opennlock: true, title: 'I need to rent a house', tags: 'House', members: '23' },
                        { username: 'Sonny', opennlock: true, title: 'I will buy a ar', tags: 'car', members:'23' }
                    ]
                }
            ],
            valueDrop: "all", ValueSearch: "",
        }
        this.onHandleFormChange = this.onHandleFormChange.bind(this);
    }

    updateSubtitle() {
        let { categorySubtitle } = { ...this.state };
        categorySubtitle = this.props.headerClickedName;// == "Buy&Sell"
        this.setState({ categorySubtitle });
    }

    shouldComponentUpdate(Prevprops, nextState) {

        if (Prevprops.headerClickedName != nextState.categorySubtitle) {
            this.updateSubtitle();
            // return false;

        }

        return true;
    }
    handleChattingTitle(x) {
        this.props.history.push({
            pathname: "/chatting-room",
            state: { selectedchatting: x }
        });
    }

    renderTableValue() {
        const tabKey = this.state.selectTabKey;
        const index = findIndex(this.state.chattingList, function (o) { return o.tabKey == tabKey });
        return this.state.chattingList[index].data;
    };
    
    handleTab(item) {
        this.setState({ selectTabKey: item.tabKey })
    };


    onHandleFormChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value,
        })
    }



    render() {
        // alert(this.props.headerClickedName); 
        let { valueDrop, ValueSearch, MainDropDown1, MainDropDown2, } = this.state;
        return (
            <div id="customer-list-page">
                <Mainlogo logo={BlogListLogo} logoTitleText="Tokyo" logoSubText={this.state.categorySubtitle} ></Mainlogo>

                <div className="customer-list-section">
                    <div className="ad-text">
                        <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                        <div className="div-text-2">왼쪽의 약관 동의를 체크하신 후 우측의 버튼을 통해서 가입하실 수있습니다.</div>
                    </div>
                    <div className="page-filter-box-main-div">
                        <div className="page-filter-box-sub-div">
                            
                            <div className="page-filter-dropdown">                                
                            <div className="dropdown select-purple-align">
                                        <button type="button" id="dd_drop_3" className="btn select-purple footer-dropdown custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                        지역선택
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
                                    value={ValueSearch}
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
                    <div className="joincafe-blog blog-list">
                        <div className="wrap">
                            <div className="tab-table">
                                <div id="longitude" className="tabcontent">
                                    <div className="table-responsive">
                                        <ChattingRoomTable tableRow={this.renderTableValue()} onChattingTitle={(x) => this.handleChattingTitle(x)} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}
// export default ChattingList;
export default ChattingList;