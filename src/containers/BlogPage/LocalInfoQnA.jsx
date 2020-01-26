import React, { Component } from 'react';
import { TextField, Button, Select, InputAdornment, IconButton, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Footer from "../../components/FooterComponent/Footer.jsx";// import DummyIcon from "./../../assets/img/Dummy-icon.png";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
// import BlogTable from "../../containers/BlogPage/BlogTable.jsx";
import LocalInfoQnATable from "../../containers/BlogPage/LocalInfoQnATable.jsx";
import Pagenation from "../../components/UtilityComponent/Pagenation.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import { findIndex } from "lodash";
import Cap_Man from "./../../assets/img/cap-man.png";
import Slider_Img_1 from "./../../assets/img/slider-img-1.jpg";


class BlogList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectTabKey: "Tokyo",
            blogList: [
                {
                    tabKey: 'Tokyo', displayName: "동경", data: [
                        { date: '2019 Sep 21', username: 'Sonny', category: 'Buy&Sell', title: 'I will buy a computer', tags: 'computer', view: '23' },
                        { date: '2019 Oct 21', username: 'Wonhee', category: 'RealEstate', title: 'I need to rent a house', tags: 'House', view: '23' },
                        { date: '2019 Dec 21', username: 'Sonny', category: 'Buy&Sell', title: 'I will buy a ar', tags: 'car', view: '23' }
                    ]
                },
                {
                    tabKey: 'Osaka', displayName: "오사카", data: [
                        { date: '2019 Sep 21', username: 'Mansur', category: 'Buy&Sell', title: 'I will buy a computer', tags: 'computer', view: '23' },
                        { date: '2019 Oct 21', username: 'Wonhee', category: 'RealEstate', title: 'I need to rent a house', tags: 'House', view: '23' },
                        { date: '2019 Dec 21', username: 'Sonny', category: 'Buy&Sell', title: 'I will buy a ar', tags: 'car', view: '23' }
                    ]
                },
                {
                    tabKey: 'Kagosima', displayName: "카고시마", data: [
                        { date: '2019 Sep 21', username: 'James', category: 'Buy&Sell', title: 'I will buy a computer', tags: 'computer', view: '23' },
                        { date: '2019 Oct 21', username: 'Wonhee', category: 'RealEstate', title: 'I need to rent a house', tags: 'House', view: '23' },
                        { date: '2019 Dec 21', username: 'Sonny', category: 'Buy&Sell', title: 'I will buy a ar', tags: 'car', view: '23' }
                    ]
                },
                {
                    tabKey: 'Hotkaido', displayName: "홋카이도", data: [
                        { date: '2019 Sep 21', username: '왕정치', category: 'Buy&Sell', title: 'I will buy a computer', tags: 'computer', view: '23' },
                        { date: '2019 Oct 21', username: 'Wonhee', category: 'RealEstate', title: 'I need to rent a house', tags: 'House', view: '23' },
                        { date: '2019 Dec 21', username: 'Sonny', category: 'Buy&Sell', title: 'I will buy a ar', tags: 'car', view: '23' }
                    ]
                }
            ],
            valueDrop: "all", ValueSearch: "",
        }
        this.onHandleFormChange = this.onHandleFormChange.bind(this);
    }

    handleBlogTitle(x) {
        this.props.history.push({
            pathname: "/blog-detail",
            state: { selectedBlog: x }
        });
    }

    renderTableValue() {
        const tabKey = this.state.selectTabKey;
        const index = findIndex(this.state.blogList, function (o) { return o.tabKey == tabKey });
        return this.state.blogList[index].data;
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
        let { valueDrop, ValueSearch } = this.state;
        return (
            <div id="customer-list-page">
                <Mainlogo logo={BlogListLogo} logoTitleText="Tokyo" logoMainText="정글뉴스" logoSubText="지역정보 QnA" ></Mainlogo>

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
                                        <LocalInfoQnATable tableRow={this.renderTableValue()} onBlogTitle={(x) => this.handleBlogTitle(x)} />
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
export default BlogList;