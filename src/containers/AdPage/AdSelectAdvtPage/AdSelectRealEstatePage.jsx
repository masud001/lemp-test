import React, { Component } from 'react';
import Footer from "../../../components/FooterComponent/Footer.jsx";
import AdSelectModal from "./../AdSelectModal/AdSelectModal.jsx"
import SearchIcon from '@material-ui/icons/Search';
import AdSelectWarningModal from "../AdSelectModal/AdSelectWarningModal.jsx";

class AdSelectRealEstatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdvtPopupActive: false,
            selectedMonth: "1달",
            AdSecModal1: false, AdSecModal2: false,  isWarnigPopupActive:false
        };
        this.onAdSelectPopupOpen = this.onAdSelectPopupOpen.bind(this);
        this.onWarnigModalDisplay = this.onWarnigModalDisplay.bind(this);
    }
    onAdSelectPopupOpen(modal) {
        this.setState({
            AdSecModal1: false,
            AdSecModal2: false,

        })
        if (modal === "AdSecModal1") {
            this.setState({
                AdSecModal1: true
            })
        }
        if (modal === "AdSecModal2") {
            this.setState({
                AdSecModal2: true
            })
        }

    }
    onWarnigModalDisplay(val){
        this.setState({
            isWarnigPopupActive: val
        })
    }
    render() {
        let { AdSecModal1, AdSecModal2,isWarnigPopupActive } = this.state;
        return (
            <div id="letest-ad-select-blog-list-page-comp">
                <div className="letest-ad-select-blog-list-page-section" >
                    <div className="letest-ad-select-blog-list-page-data-div">
                        <div className="letest-ad-select-main-div" >
                            <div className="ad-select-blog-list-page-logo">
                                <img src="src/assets/img/AdSelectPage/blog-list-logo-grey.png" alt="" />
                                <div className="ad-select-fire-text">
                                    <span className="ad-select-fire-text-inner box-1">Tokyo</span>
                                    <span className="ad-select-fire-text-inner box-2">정글뉴스</span>
                                    <span className="ad-select-fire-text-inner box-3">Real Estate</span>

                                </div>
                            </div>
                            <div className="ad-select-blog-list-page-logo-inner">
                                <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                                <div className="div-text-2">왼쪽의 약관 동의를 체크하신 후 우측의 버튼을 통해서 가입하실 수있습니다.</div>

                            </div>
                            <div className="ad-select-blog-list-page-logo-filter">
                                <div className="filter-left">
                                    <span>지역선택</span>
                                    <i className="fa fa-angle-down " aria-hidden="true"></i>
                                </div>
                                <div className="filter-right">
                                    <SearchIcon />
                                </div>
                            </div>
                            <div className="ad-select-blog-list-page-table-dropdown">
                                <div className="ad-select-blog-list-page-table-dropdown-header">
                                    <span>카테고리</span>
                                    <i className="fa fa-angle-down " aria-hidden="true"></i>
                                </div>
                                <table className="ad-select-blog-list-page-table-dropdown-header-inner">
                                    <thead>
                                        <tr>
                                            <th>작성자</th>
                                            <th>작성일</th>
                                            <th>카테고리</th>
                                            <th>제목</th>
                                            <th>태그</th>
                                            <th>조회수</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="user-name-box">
                                                    <span className="circlename">S</span>
                                                    <span>Sonny</span>
                                                </div>
                                            </td>
                                            <td>2019 Sep 21</td>
                                            <td>삽니다</td>
                                            <td>
                                                <span>I will buy a computer</span>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="boxs-but"> COMPUTER</span>
                                                </div>
                                            </td>
                                            <td> &gt;34</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="user-name-box">
                                                    <span className="circlename">W</span>
                                                    <span>Wonhee</span>
                                                </div>
                                            </td>
                                            <td>2019 Sep 21</td>
                                            <td>방구해요</td>
                                            <td>
                                                <span>I need to rent a house</span>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="boxs-but"> HOUSE</span>
                                                </div>
                                            </td>
                                            <td> &gt;34</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="user-name-box">
                                                    <span className="circlename">S</span>
                                                    <span>Dhaval</span>
                                                </div>
                                            </td>
                                            <td>2019 Sep 21</td>
                                            <td>Travel Info</td>
                                            <td>
                                                <span>I will buy a ar</span>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="boxs-but"> CAR</span>
                                                </div>
                                            </td>
                                            <td> &gt;34</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="table-footer">
                                    <span>글쓰기</span>
                                </div>
                                <div className="table-footer-page-pagination">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                        <div className="letest-ad-select-right">
                            <div className="letest-ad-select-right-box-1" onClick={!AdSecModal1 ? () => this.onAdSelectPopupOpen("AdSecModal1") : ""}>
                                <div className="sub-box-text-inner">
                                    <p>LT001</p>
                                    <h2>광고 의뢰하기</h2>
                                </div>
                                <AdSelectModal isAdvtPopupActive={AdSecModal1} adSelectPopupclose={() => this.onAdSelectPopupOpen("All")}  onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)}/>
                            </div>
                            <div className="letest-ad-select-right-box-2" onClick={!AdSecModal2 ? () => this.onAdSelectPopupOpen("AdSecModal2") : ""}>
                                <div className="sub-box-text-inner">
                                    <p>LT001</p>
                                    <h2>광고 의뢰하기</h2>
                                </div>
                                <AdSelectModal isAdvtPopupActive={AdSecModal2} adSelectPopupclose={() => this.onAdSelectPopupOpen("All")} onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)} />
                            </div>
                        </div>
                    </div>
                </div>
                <AdSelectWarningModal onWarnigModalDisplay={() => this.onWarnigModalDisplay(false)} isWarnigPopupActive={isWarnigPopupActive} />
            </div>
        )
    }
}
export default AdSelectRealEstatePage;