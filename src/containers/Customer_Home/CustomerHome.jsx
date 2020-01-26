import React, { Component } from 'react';
import Footer from "../../components/FooterComponent/Footer.jsx";
import CustomerBanner from "./../../assets/img/customer-banner.jpg";
import TreeLogoIcon from "./../../assets/img/logo-tree-icon.png";
import ContactBanner from "./../../assets/img/contact-banner.jpg";
import ContactLeftBanner from "./../../assets/img/Contact-left-img.jpg";
import GoogleMap from "../../components/MapComponent/Map.jsx";
import Map from "./../../assets/img/Contact-map.jpg"
class CustomerHome extends Component {
    render() {
        return (
            <div id="customer-home-page">
                <div className="customer-main-section">
                    <div className="customer-banner">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={CustomerBanner}></img>
                            </div>
                        </div>
                    </div>

                    <div className="customer-secound-section">
                        <div className="container-main">
                            <div className="customer-membership-panel">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="left-box">
                                            <div className="tree-logo-icon">
                                                <img src={TreeLogoIcon}></img>
                                            </div>
                                            <div className="jungle-restaurant">
                                                <span className="jungle-text">한국음식   >   <span className="jungle-sub-text">해물탕/해물요리/꽃게</span></span>
                                                <div className="jungle-main-text">Jungle Restaurant</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="right-box">
                                            <div className="comment-box">
                                                <span className="comment-icon"><i class="fa fa-commenting" aria-hidden="true"></i>5</span>
                                                <span className="favorite-icon"><i class="fa fa-heart-o" aria-hidden="true"></i>354</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="join-membership">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="join-left-text">
                                            <p>맛있는 조개구이를 저렴하고 푸짐하게 드실 수 있는 해물천하조개구이 삼성점입니다.
                                                매일 산지에서 직송되는 싱싱한 조개와 최상의 재료들을 사용하여 최상의 서비스
                                                고객님을 모십니다. 조개구이찜.조개구이,키조개구이,가래비구이,랍스타찜등 다양한
                                                해물찜,구이 요리가 준비되어 있습니다.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="join-button-right">
                                            <span className="btn-right"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
                                            <span className="btn-blue btn-middle">예약하기</span>
                                            <span className="btn-blue btn-left">Join Membership</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-panel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="contact-heading">
                                            <span>매장 사진 및 기본 정보</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="contact-bottom-panel">
                                            <div className="container-main">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="bottom-left-section">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <img src={ContactBanner}></img>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="contact-3-img">
                                                                        <div className="contact-img-1">
                                                                            <img src={ContactLeftBanner}></img>
                                                                        </div>
                                                                        <div className="contact-img-2">
                                                                            <img src={ContactLeftBanner}></img>
                                                                        </div>
                                                                        <div className="contact-img-3">
                                                                            <img src={ContactLeftBanner}></img>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="bottom-right-section">
                                                            <div className="map-div-data">
                                                              <div className="banner-slide">
                                                                  <img src="src\assets\img\Banner\asian-laughing-banner-1.jpg"></img>
                                                              </div>
                                                                <div className="map-text">서울시 강남구 논현동 23-4</div>
                                                            </div>

                                                            <div className="bottom-address-info">
                                                                <p className="address-phone">☎ 02-456-6789</p>
                                                                <p className="address-main">경복아파트 사거리 라움웨딩 뒷편에 위치</p>

                                                                <p className="address-sub-1">
                                                                    <span className="address-sub-left-text">* 월 - 금</span><span className="address-sub-right-text">09:00  -  22:00</span>
                                                                </p>

                                                                <p className="address-sub-2">
                                                                    <span className="address-sub-left-text">* 주말 </span><span className="address-sub-right-text">09:00  -  22:00</span>
                                                                </p>
                                                                <p className="address-sub-3">
                                                                    <span className="address-sub-left-text" >* 공휴일</span><span className="address-sub-right-text">Closed</span>
                                                                </p>

                                                                <p className="address-bottom"> 매월 첫째주 수요일은 쉽니다.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customer-third-section">
                        <div className="customer-third-section-main-div">
                            <div className="container-main">
                            <div className="customer-third-section-title-div">
                                <span className="customer-third-section-title-text">
                                    대표 메뉴
                                </span>
                            </div>
                            <div className="customer-third-section-box-div">
                                <div className="customer-third-section-main-div">
                                    <div className="customer-third-section-box-design">
                                        <div className="box">
                                            <div className="box-data"></div>
                                            <div className="box-body">
                                                <div className="box-title-main-text">찜사냥 <span>BEST</span></div>
                                                <div className="box-title-body-text">생생한 조개를 바로 잡아서 조리합니다</div>
                                                <div className="box-title-footer-text">4,500 Yen</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="customer-third-section-box-design">
                                        <div className="box">
                                            <div className="box-data"></div>
                                            <div className="box-body">
                                                <div className="box-title-main-text">찜사냥</div>
                                                <div className="box-title-body-text">생생한 조개를 바로 잡아서 조리합니다</div>
                                                <div className="box-title-footer-text">4,500 Yen</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="customer-third-section-box-design">
                                        <div className="box">
                                            <div className="box-data"></div>
                                            <div className="box-body">
                                                <div className="box-title-main-text">찜사냥 </div>
                                                <div className="box-title-body-text">생생한 조개를 바로 잡아서 조리합니다</div>
                                                <div className="box-title-footer-text">4,500 Yen</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="customer-third-section-box-design">
                                        <div className="box">
                                            <div className="box-data"></div>
                                            <div className="box-body">
                                                <div className="box-title-main-text">찜사냥 </div>
                                                <div className="box-title-body-text">생생한 조개를 바로 잡아서 조리합니다</div>
                                                <div className="box-title-footer-text">4,500 Yen</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="customer-third-section-box-design">
                                        <div className="last-box">
                                            <div className="box-data"></div>
                                            <div className="box-body">
                                                <div className="box-title-main-text">찜사냥 </div>
                                                <div className="box-title-body-text">생생한 조개를 바로 잡아서 조리합니다</div>
                                                <div className="box-title-footer-text">4,500 Yen</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="customer-fourth-section">
                        <div className="container-main">
                            <div className="customer-fourth-section-main-div">
                                <div className="customer-fourth-section-title-div">
                                    <span className="customer-fourth-section-title-text">
                                        사용자 리뷰
                                </span>
                                </div>
                                <div className="customer-fourth-section-box-div">
                                    <div className="customer-fourth-section-main-div">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="fourth-left-profile">
                                                    <div className="blog-detail-panel mar-b-22">
                                                        <div className="blog-box">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="profile-main">
                                                                        <div className="profile-img bg-yellow-pis"></div>
                                                                        <div className="profile-name">Kate Choi</div>
                                                                        <div className="profile-right">2018.07.19</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <p div className="blog-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                                    when an unknown printer took a galley of type and scrambled it to make
                                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="fourth-left-profile">
                                                    <div className="blog-detail-panel mar-b-22">
                                                        <div className="blog-box">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="profile-main">
                                                                        <div className="profile-img bg-red-pis"></div>
                                                                        <div className="profile-name">Kate Choi</div>
                                                                        <div className="profile-right">2018.07.19</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <p div className="blog-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                                    when an unknown printer took a galley of type and scrambled it to make
                                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                </p>
                                                                </div>
                                                                <div className="col-md-12 mar-t-20">
                                                                    <div className="box-data-1"></div>
                                                                    <div className="box-data-2"></div>
                                                                    <div className="box-data-3"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="fourth-right-profile">
                                                    <div className="blog-detail-panel mar-b-22">
                                                        <div className="blog-box">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="profile-main">
                                                                        <div className="profile-img bg-green-pis"></div>
                                                                        <div className="profile-name">Kate Choi</div>
                                                                        <div className="profile-right">2018.07.19</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <p div className="blog-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                                    when an unknown printer took a galley of type and scrambled it to make
                                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                </p>
                                                                </div>
                                                                <div className="col-md-12 mar-t-20">
                                                                    <div className="box-data-4"></div>
                                                                    <div className="box-data-5"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
export default CustomerHome;