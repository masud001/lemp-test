import React, { Component } from 'react';
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import AdRequestLogo from "./../../assets/img/ad-request.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AdSelectMainPage from "./AdSelectAdvtPage/AdSelectMainPage.jsx";
import AdSelectBlogListPage from "./AdSelectAdvtPage/AdSelectBlogListPage.jsx";
import AdSelectRealEstatePage from "./AdSelectAdvtPage/AdSelectRealEstatePage.jsx";
import AdSelectTravelInfoPage from "./AdSelectAdvtPage/AdSelectTravelInfoPage.jsx";
import AdSelectEmploymentPage from "./AdSelectAdvtPage/AdSelectEmploymentPage.jsx";
class LestestAdSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div id="letest-ad-select-page">
                <div className="letest-ad-select-section">
                    <div className="container-main add-container-main">
                        <Mainlogo logo={AdRequestLogo} logoTitleText="" logoMainText="정글뉴스" logoSubText="광고안내" ></Mainlogo>
                        <div className="letest-adselect-text">
                            <div className="adselect-text-1">슬라이더를 클릭하시면 다음 페이지로 이동합니다. 원하시는 곳을 클릭하세요!</div>
                            <div className="adselect-text-1">핑크색 부분을 클릭하시면 팝업창이 뜨고 현재 광고 상황을 보실수 있습니다.</div>
                        </div>
                        <div className="ad-select-main-cursol-view">
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} showIndicators={false} >
                                <div>
                                    <AdSelectMainPage />
                                </div>
                                <div >
                                    <AdSelectBlogListPage />
                                </div>
                                <div>
                                    <AdSelectRealEstatePage />
                                </div>
                                <div>
                                    <AdSelectTravelInfoPage />
                                </div>
                                <div>
                                    <AdSelectEmploymentPage />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default LestestAdSelect;