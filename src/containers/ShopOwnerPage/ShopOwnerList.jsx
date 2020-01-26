import React, { Component } from 'react';
import { TextField, Button, Select, InputAdornment, IconButton, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Footer from "../../components/FooterComponent/Footer.jsx";
import CustomerListLogo from "./../../assets/img/customer-list-logo.jpg";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import ImgGroupSection from "../../components/ImageGroupComponent/ImgGroupSection.jsx";
import MapMoadal from "../../containers/MainPage/Modals/MapModal.jsx";
import BusinessCategoryCards from "../../containers/ShopOwnerPage/BisinessCategoryCards.jsx";
import Pagenation from '../../components/UtilityComponent/Pagenation.jsx';

class ShopOwnerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryKey: "All",
            businessCategories: [
                {
                    categoryKey: 'Resturant', displayName: "식당", data: [
                        { companyName: '돈부리 식당', businessType: '일식', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '완전싸 식당', businessType: '한식', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '비싼 식당', businessType: '분식', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' }
                    ]
                },
                {
                    categoryKey: 'Consulting', displayName: "컨설팅", data: [
                        { companyName: '소니 컨설팅', businessType: '비자', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '학원 컨설팅', businessType: '여행', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '인천 컨설팅', businessType: '', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' }
                    ]
                },
                {
                    categoryKey: 'Shopping', displayName: "쇼핑", data: [
                        { companyName: '무궁화 마트', businessType: '한국 쇼핑', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '이마트', businessType: '일본제품', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '돈벌어 주는 마트', businessType: '', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                    ]
                },
                {
                    categoryKey: 'RealEastate', displayName: "부동산", data: [
                        { companyName: '비싼 부동산', businessType: '현지 부동산', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '맘대로 부동산', businessType: '', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '열심히 부동산', businessType: '', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                    ]
                },
                {
                    categoryKey: 'Car', displayName: "렌트", data: [
                        { companyName: 'TK Rental', businessType: '일식', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '돈부리 식당', businessType: '일식', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                        { companyName: '돈부리 식당', businessType: '일식', address: '도쿄시 니혼바시 54 3F', telephone: '03 2093 0292' },
                    ]
                }
            ],
            valueDrop: "all", ValueSearch: "",
        }
        this.onHandleFormChange = this.onHandleFormChange.bind(this);
    };
    onHandleFormChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value,
        })
    }

    selectedCategory(key) {
        this.setState({ selectedCategoryKey: key });
    }


    renderBizCard() {
        let result = [];
        if (this.state.selectedCategoryKey == "All") {
            this.state.businessCategories.map(x =>
                x.data.map(y =>
                    result.push(y)
                )
            );
        }
        else {
            const categories = this.state.businessCategories.filter(x => x.categoryKey == this.state.selectedCategoryKey);
            result = categories[0].data;
        }
        const formatedArray = this.chunkArray(result, 4);
        return formatedArray;
    }

    chunkArray(myArray, chunk_size) {
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];

        for (index = 0; index < arrayLength; index += chunk_size) {
            let myChunk = myArray.slice(index, index + chunk_size);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }

        return tempArray;
    }


    render() {
        const { selectedCategoryKey, valueDrop, ValueSearch } = this.state;

        return (
            <div id="customer-list-page">
                <MapMoadal />
                <div className="customer-list-section">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-12 ">
                                <Mainlogo logo={CustomerListLogo} logoTitleText="Tokyo" logoMainText="정글뉴스" logoSubText="업소등록"></Mainlogo>
                                <div className="ad-text">
                                    <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                                    <div className="div-text-2">왼쪽의 약관 동의를 체크하신 후 우측의 버튼을 통해서 가입하실 수있습니다.</div>
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
                            </div>
                            <div className="col-md-12 ">
                                <div className="heder-btn-div">
                                    <button className="btn-blue header-btn cust-input-button-next"><i className="fa fa-search" aria-hidden="true"></i> 결 제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer-services-section">
                        <div className="customer-services-section-container-main">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className={selectedCategoryKey == "All" ? "active-td" : ""} onClick={() => this.selectedCategory("All")}>모든업체 (All)</td>
                                        <td className={selectedCategoryKey == "Resturant" ? "active-td" : ""} onClick={() => this.selectedCategory("Resturant")}>식당 (restaurant)</td>
                                        <td className={selectedCategoryKey == "Shopping" ? "active-td" : ""} onClick={() => this.selectedCategory("Shopping")}>마트 (shopping) </td>
                                        <td className={selectedCategoryKey == "RealEastate" ? "active-td" : ""} onClick={() => this.selectedCategory("RealEastate")}>부동산(real estate) </td>
                                    </tr>
                                    <tr>
                                        <td className={selectedCategoryKey == "Consulting" ? "active-td" : ""} onClick={() => this.selectedCategory("Consulting")}>컨설팅(consulting)</td>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>자동차(Car)</td>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>학교(school)m</td>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>여행(travel)</td>
                                    </tr>
                                    <tr>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>컴퓨터 (computer)</td>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>병원(hospital)</td>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>미용(beauty)</td>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>헬쓰(Health)</td>
                                    </tr>
                                    <tr>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>기타(others) </td>
                                        <td className={selectedCategoryKey == "Car" ? "active-td" : ""} onClick={() => this.selectedCategory("Car")}>노래방(karaoke)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {
                        this.renderBizCard().map(x =>
                            <BusinessCategoryCards cardDetails={x} />
                        )
                    }

                    <div className="pagination-main">
                        <div className="container-main">
                            <div className="row">
                                <div className="col-md-12">
                                    <Pagenation pageSize={10} />
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
export default ShopOwnerList;