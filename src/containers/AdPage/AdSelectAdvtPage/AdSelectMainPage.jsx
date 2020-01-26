import React, { Component } from 'react';
import Footer from "../../../components/FooterComponent/Footer.jsx";
import AdSelectModal from "./../AdSelectModal/AdSelectModal.jsx"
import AdSelectWarningModal from "../AdSelectModal/AdSelectWarningModal.jsx";
import {renderLocationId} from "../../../utils/locationService";

class AdSelectMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // isAdvtPopupActive: false,
            selectedMonth: "1달",
            adSelectedModals: {modalName: "", isOpen: false},
           // AdSecModal1: false, AdSecModal2: false, AdSecModal3: false, AdSecModal4: false, AdSecModal5: false, AdSecModal6: false,isWarnigPopupActive:false,


        };
    //    this.onAdSelectPopupOpen = this.onAdSelectPopupOpen.bind(this);
        this.onMonthSelect = this.onMonthSelect.bind(this);
        this.onWarnigModalDisplay = this.onWarnigModalDisplay.bind(this);
        this.onAdModalPopup = this.onAdModalPopup.bind(this);
        this.handleAdSelectPopupOpen = this.handleAdSelectPopupOpen.bind(this);
    }


    onMonthSelect(value) {
        this.setState({
            selectedMonth: value
        })
    }

    onAdModalPopup(modalName) {
        const {adSelectedModals} = {...this.state};
      //  debugger;
        adSelectedModals["modalName"] = modalName;
        adSelectedModals["isOpen"]= true;
        this.setState({adSelectedModals});
    }

    handleAdSelectPopupOpen() {
        const {adSelectedModals} = {...this.state};
        adSelectedModals["isOpen"]= false;
        this.setState({adSelectedModals});
    }

    // onAdSelectPopupOpen(modal) {
    //     this.setState({
    //         AdSecModal1: false,
    //         AdSecModal2: false,
    //         AdSecModal3: false,
    //         AdSecModal4: false,
    //         AdSecModal5: false,
    //         AdSecModal6: false,
    //     })
    //     if (modal === "AdSecModal1") {
    //         this.setState({
    //             AdSecModal1: true
    //         })
    //     }
    //     if (modal === "AdSecModal2") {
    //         this.setState({
    //             AdSecModal2: true
    //         })
    //     }
    //     if (modal === "AdSecModal3") {
    //         this.setState({
    //             AdSecModal3: true
    //         })
    //     }
    //     if (modal === "AdSecModal4") {
    //         this.setState({
    //             AdSecModal4: true
    //         })
    //     }
    //     if (modal === "AdSecModal5") {
    //         this.setState({
    //             AdSecModal5: true
    //         })
    //     }
    //     if (modal === "AdSecModal6") {
    //         this.setState({
    //             AdSecModal6: true
    //         })
    //     }
    // }
    onWarnigModalDisplay(val){
        this.setState({
            isWarnigPopupActive: val
        })
    }
    render() {
        let { AdSecModal1, AdSecModal2, AdSecModal3, AdSecModal4, AdSecModal5,
             AdSecModal6,isWarnigPopupActive, adSelectedModals } = this.state;
            //  console.log(adSelectedModals);
            //  console.log(renderLocationId("mainPageCenter1"));
        return (
            <div id="letest-ad-select-main-page-comp">
                <div className="letest-ad-select-main-page-section" >
                    <div className="letest-ad-select-main-data-div">
                        <div className="letest-ad-select-main-div" >
                            <div className="letest-ad-select-main-page">
                                <div className="letest-ad-select-cont cursor-pointer" onClick={()=> this.onAdModalPopup(renderLocationId("mainPageCenter1"))}>
                                    <p>{renderLocationId("mainPageCenter1")}</p>
                                    <h2>광고 의뢰하기</h2>
                                    {/* <AdSelectModal isAdvtPopupActive={renderLocationId("mainPageCenter1")== AdSelectModal && AdSelectModal.modalName ? AdSelectModal.isOpen : false} adSelectPopupclose={() => this.onAdSelectPopupOpen("All")}  onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)}/> */}
                                </div>
                                <div className="letest-ad-select-header">
                                    <div className="letest-ad-select-header-logo">
                                        <img src="src\assets\img\Header\GreyLogo .png"></img>
                                    </div>
                                    <div className="letest-ad-select-header-menu">
                                        <ul>
                                            <li>정글장터</li>
                                            <li>부동산</li>
                                            <li>여행정보 </li>
                                            <li>구인구직 </li>
                                            <li>카페/동호회 </li>
                                            <li>지역정보QnA </li>
                                            <li>뉴스와공지 </li>
                                        </ul>
                                    </div>
                                    <div className="letest-ad-select-header-right">
                                        <img src="src\assets\img\user-icon.png"></img>
                                    </div>
                                </div>
                                <div className="letest-ad-select-cont-big cursor-pointer" onClick={()=> this.onAdModalPopup(renderLocationId("mainPageCenter2"))} >
                                    <p>{renderLocationId("mainPageCenter2")}</p>
                                    <h2>광고 의뢰하기</h2>
                                    {/* <AdSelectModal isAdvtPopupActive={AdSecModal2} adSelectPopupclose={() => this.onAdSelectPopupOpen("All")} onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)}/> */}

                                </div>
                                <div className="letest-ad-select-cont-icons">
                                    <div className="letest-ad-select-cont-icons-inner">
                                        <div className="icons-box">
                                            <i className="fa fa-globe" aria-hidden="true"></i>
                                            <div className="icons-box-text">Global</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <div className="icons-box-text">Shopping</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                                            <div className="icons-box-text">Event</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-home" aria-hidden="true"></i>
                                            <div className="icons-box-text">Home</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-ban" aria-hidden="true"></i>
                                            <div className="icons-box-text">Exit</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-car" aria-hidden="true"></i>
                                            <div className="icons-box-text">Car</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-globe" aria-hidden="true"></i>
                                            <div className="icons-box-text">Globe</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-tree" aria-hidden="true"></i>
                                            <div className="icons-box-text">Tree</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-wrench" aria-hidden="true"></i>
                                            <div className="icons-box-text">Setting</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                                            <div className="icons-box-text">Business</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                                            <div className="icons-box-text">Idea</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-industry" aria-hidden="true"></i>
                                            <div className="icons-box-text">Factory</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            <div className="icons-box-text">Global</div>
                                        </div>
                                        <div className="icons-box">
                                            <i className="fa fa-address-book-o" aria-hidden="true"></i>
                                            <div className="icons-box-text">Global</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="letest-ad-select-cont-slider cursor-pointer" onClick={()=> this.onAdModalPopup(renderLocationId("mainPageCenter3"))}>
                                    <div className="slider-box-text">
                                        <p>{renderLocationId("mainPageCenter3")}</p>
                                        <h2>광고 의뢰하기</h2>
                                    </div>
                                    <div className="slider-box"></div>
                                    <div className="slider-box"></div>
                                    <div className="slider-box"></div>
                                    <div className="slider-box"></div>
                                    <div className="slider-box"></div>
                                    <div className="slider-box"></div>
                                    <div className="slider-box"></div>
                                    <div className="slider-box"></div>
                                    {/* <AdSelectModal isAdvtPopupActive={AdSecModal3} adSelectPopupclose={() => this.onAdSelectPopupOpen("All")} onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)} /> */}
                                </div>
                            </div>
                            <div className="letest-ad-select-sub">
                                <div className="letest-ad-select-sub-inner">
                                    <div className="letest-ad-select-sub-left">
                                        <div className="letest-ad-select-sub-sec-1">
                                            <div className="letest-ad-select-sub-sec-1-title">
                                                <div className="left-box">최신글</div>
                                                <div className="right-box">게시판 바로가기 ></div>
                                            </div>
                                            <div className="letest-ad-select-sub-sec-1-box">
                                                <div className="sub-sec-1-box-left"> </div>
                                                <div className="sub-sec-1-box-left"></div>
                                            </div>

                                        </div>
                                        <div className="letest-ad-select-sub-sec-2">
                                            <div className="sec-box-head-title">
                                                <div className="sec-box-head-title-left">주변과 가까운 업소</div>
                                                <div className="sec-box-head-title-right">
                                                    <div className="select-box">
                                                        <span>전체</span>
                                                        <i className="fa fa-angle-down arrow-icon " aria-hidden="true"></i>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sec-box-head cursor-pointer" onClick={()=> this.onAdModalPopup(renderLocationId("mainPageCenter4"))}>
                                                <div className="sec-box-title">
                                                    <p>{renderLocationId("mainPageCenter4")}</p>
                                                    <h2>광고 의뢰하기</h2>
                                                </div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                {/* <AdSelectModal isAdvtPopupActive={AdSecModal4} adSelectPopupclose={() => this.onAdSelectPopupOpen("All")} onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)} /> */}
                                            </div>
                                        </div>
                                        <div className="letest-ad-select-sub-sec-3">
                                            <div className="sec-box-head-title">
                                                <div className="sec-box-head-title-left">추천 맛집</div>
                                                <div className="sec-box-head-title-right">
                                                    <div className="select-box">
                                                        <span>전체</span>
                                                        <i className="fa fa-angle-down arrow-icon " aria-hidden="true"></i>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sec-box-head cursor-pointer" onClick={()=> this.onAdModalPopup(renderLocationId("mainPageCenter5"))}>
                                                <div className="sec-box-title">
                                                    <p>{renderLocationId("mainPageCenter5")}</p>
                                                    <h2>광고 의뢰하기</h2>
                                                </div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                <div className="sec-box"></div>
                                                {/* <AdSelectModal isAdvtPopupActive={AdSecModal5} adSelectPopupclose={() => this.onAdSelectPopupOpen("All")} onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)} /> */}
                                            </div>
                                        </div>
                                        <div className="letest-ad-select-sub-sec-4">
                                            <div className="img-div">
                                                <div className="img-div-box">
                                                    <div className="img-div-box-innner"></div>
                                                    <div className="img-div-box-text">게시판</div>
                                                </div>
                                                <div className="img-div-box">
                                                    <div className="img-div-box-innner"></div>
                                                    <div className="img-div-box-text">업소목록</div>
                                                </div>
                                                <div className="img-div-box">
                                                    <div className="img-div-box-innner"></div>
                                                    <div className="img-div-box-text">카페/동호회</div>
                                                </div>
                                                <div className="img-div-box">
                                                    <div className="img-div-box-innner"></div>
                                                    <div className="img-div-box-text">정글 포인트카드</div>
                                                </div>
                                                <div className="img-div-box">
                                                    <div className="img-div-box-innner"></div>
                                                    <div className="img-div-box-text">정글 푸드</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="letest-ad-select-sub-right">
                                        <div className="letest-ad-select-sub-right-sec-1">
                                            <div className="sub-right-text">
                                                <h2 className="sub-rigt-title-text">환율</h2>
                                                <p className="sub-right-main-text">원달<span className="sub-right-sub-text">러미국USD</span></p>
                                            </div>
                                        </div>
                                        <div className="letest-ad-select-sub-right-sec-2">
                                            <div className="sub-right-innre">
                                                <div className="sub-right-innre-icons"><i className="fa fa-caret-left" aria-hidden="true"></i></div>
                                                <div className="sub-right-innre-text">0000.00   </div>
                                                <div className="sub-right-innre-icons"><i className="fa fa-caret-right" aria-hidden="true"></i></div>
                                            </div>
                                        </div>
                                        <div className="letest-ad-select-sub-right-sec-3 cursor-pointer"onClick={()=> this.onAdModalPopup(renderLocationId("mainPageRight1"))}>
                                            <div className="sub-box-text-inner">
                                                <p>{renderLocationId("mainPageRight1")}</p>
                                                <h2>광고 의뢰하기</h2>
                                            </div>
                                            {/* <AdSelectModal isAdvtPopupActive={AdSecModal6} adSelectPopupclose={() => this.onAdSelectPopupOpen("All")} onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)} /> */}
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                    <AdSelectWarningModal onWarnigModalDisplay={() => this.onWarnigModalDisplay(false)} isWarnigPopupActive={isWarnigPopupActive} />
                    <AdSelectModal 
                    locationAdId={adSelectedModals.modalName}
                    isAdvtPopupActive={adSelectedModals.isOpen} 
                    onAdSelectPopupclose={() => this.handleAdSelectPopupOpen()}  
                    onWarnigModalDisplay={() => this.onWarnigModalDisplay(true)}/>
            </div>
        )
    }
}
export default AdSelectMainPage;