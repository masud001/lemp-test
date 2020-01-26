import React, { Component } from 'react';
import Footer from "./../../components/footer/Footer.jsx";
import BlogYoutubeBanner from "./../../assets/img/blog-youtube-banner.jpg";
import YoutubeImg1 from "./../../assets/img/youtube/youtube-video-1.jpg";
import YoutubeImg2 from "./../../assets/img/youtube/youtube-video-2.jpg";
import YoutubeImg3 from "./../../assets/img/youtube/youtube-video-3.jpg";
import YoutubeImg4 from "./../../assets/img/youtube/youtube-video-4.jpg";
class BlogYoutubeDetail extends Component {
    render() {
        return (
            <div id="blog-youtube-detail-page">
                <div className="blog-youtube-detail-list-section">
                    <div className="container-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="blog-youtbe-upper-text">
                                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    <span className="upper-titile">목록으로</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="blog-youtbe-banner">
                                    <img src={BlogYoutubeBanner}></img>
                                </div>
                            </div>
                            <div className="comment-box">
                                <div className="col-md-12">
                                    <div className="comment-title">동경 개발자 이야기</div>
                                    <div className="right-icon">
                                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                                        <span className="right-no">230</span>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="comment-bottom-section">
                                        <div className="blog-img"></div>
                                        <div className="blog-details">
                                            <p className="p1">마추피추 </p>
                                            <p className="p2">FKJ x Tom Misch - Losing My Way </p>
                                            <p className="mb-0">Filmed by François Dubois</p>
                                            <span>https://www.facebook.com/francoisdubo...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="color-list-vid-box">
                                <div className="col-md-9 left-list-part">
                                    <div className="left-list-title">댓글 17개</div>
                                    <div className="color-list-vid-box-left">
                                        <div className="left-list list-1">
                                            <span className="color-round-div bg-1"></span>
                                            <input type="text " className="vid-left-input"></input>
                                        </div>
                                        <div className="left-list list-2">
                                            <span className="color-round-div bg-2"></span>
                                            <div className="color-div-info">
                                                <span className="info-title">Kate choi</span>
                                                <span className="info-body">What’s he’s playing now?</span>
                                            </div>
                                        </div>
                                        <div className="left-list list-3">
                                            <span className="color-round-div bg-3"></span>
                                            <div className="color-div-info">
                                                <span className="info-title">Masego</span>
                                                <span className="info-body">Awesome music!</span>
                                            </div>
                                        </div>
                                        <div className="left-list list-4">
                                            <span className="color-round-div bg-4"></span>
                                            <div className="color-div-info">
                                                <span className="info-title">Hey</span>
                                                <span className="info-body">this what coconut oil and melanin sound like</span>
                                            </div>
                                        </div>
                                        <div className="left-list list-5">
                                            <span className="color-round-div bg-5"></span>
                                            <div className="color-div-info">
                                                <span className="info-title">Masego</span>
                                                <span className="info-body">Awesome music!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 right-list-part">
                                    <div className="color-list-vid-box-right">
                                        <div className="row mb-38">
                                            <div className="col-md-12 mar-set-cust-1">
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
                                            <div className="col-md-12 mar-set-cust-2">
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
                                            <div className="col-md-12 mar-set-cust-3">
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
                                            <div className="col-md-12 mar-set-cust-4">
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-youtube-detail-section">
                    <div className="blog-youtube-detail-dropdown">

                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default BlogYoutubeDetail;