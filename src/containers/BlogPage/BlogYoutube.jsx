import React, { Component } from 'react';
import Footer from "./../../components/footer/Footer.jsx";
import Pagination from "./../../components/pagination/Pagination.jsx";
import BlogDetailLogo from "./../../assets/img/blog-youtub-logo.jpg";
import Mainlogo from "./../../components/main_logo/MainLogo.jsx";
import YoutubeImg1 from "./../../assets/img/youtube/youtube-video-1.jpg";
import YoutubeImg2 from "./../../assets/img/youtube/youtube-video-2.jpg";
import YoutubeImg3 from "./../../assets/img/youtube/youtube-video-3.jpg";
import YoutubeImg4 from "./../../assets/img/youtube/youtube-video-4.jpg";

class BlogYoutube extends Component {
    render() {
        return (
            <div id="blog-youtube-page">
                <div className="blog-youtube-list-section">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-12 ">
                                <Mainlogo logo={BlogDetailLogo} logoTitleText ="Tokyo"  logoMainText="정글장터" logoSubText="블로그"></Mainlogo>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-youtube-section">
                    <div className="container-main pad-r-20">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="youtub-upper-section">
                                    <button className="btn-blue blog-youtube-head-btn-1 hover-class cust-selected"> 일본정보</button>
                                    <button className="btn-blue blog-youtube-head-btn-2 hover-class"> 먹방</button>
                                    <button className="btn-blue blog-youtube-head-btn-3 hover-class "> 현재 진행중 </button>
                                    <input type="text" class="btn-blue blog-youtube-head-input " /><i class="fa fa-search" aria-hidden="true"> </i><span className="youtube-search">검색</span>
                                </div>
                            </div>
                            <div className="col-md-12 ">
                                <div className="youtub-bottom-section">
                                    <div className="row mb-38">
                                        <div className="col-md-3 ">
                                            <div className="vid-box">
                                                <img src={YoutubeImg1} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-1">
                                                <img src={YoutubeImg2} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |   <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-2">
                                                <img src={YoutubeImg3} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |   <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-3">
                                                <img src={YoutubeImg4} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |   <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row mb-38">
                                        <div className="col-md-3 ">
                                            <div className="vid-box">
                                                <img src={YoutubeImg1} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-1">
                                                <img src={YoutubeImg2} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-2">
                                                <img src={YoutubeImg3} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-3">
                                                <img src={YoutubeImg4} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |   <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row mb-38">
                                        <div className="col-md-3 ">
                                            <div className="vid-box">
                                                <img src={YoutubeImg1} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  font-weight: bolder  124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-1">
                                                <img src={YoutubeImg2} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-2">
                                                <img src={YoutubeImg3} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-3">
                                                <img src={YoutubeImg4} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  | <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row mb-38">
                                        <div className="col-md-3 ">
                                            <div className="vid-box">
                                                <img src={YoutubeImg1} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-1">
                                                <img src={YoutubeImg2} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-2">
                                                <img src={YoutubeImg3} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  | <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-3">
                                                <img src={YoutubeImg4} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  | <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row mb-38">
                                        <div className="col-md-3 ">
                                            <div className="vid-box">
                                                <img src={YoutubeImg1} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-1">
                                                <img src={YoutubeImg2} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-2">
                                                <img src={YoutubeImg3} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="vid-box vid-box-3">
                                                <img src={YoutubeImg4} />
                                            </div>
                                            <div className="title">
                                                동경 개발자 이야기
                                        </div>
                                            <div className="body">
                                                마추피추  |  <span className="weight-text">좋아요</span> 124만회    조회수 1.4만
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default BlogYoutube;