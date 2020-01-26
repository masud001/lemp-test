import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class ImgGroupSection extends Component {
    render() {
        let { text1, text2, text3, text4, text5 } = this.props
        return (
            <div id="img-group-section-comp">
                <div className="img-group-section ">
                    <div className="img-group-center">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="img-div">
                                <Link to={"/blogList"}><div className="img-data">
                                        <img className="img-style" src="src\assets\img\HomePage\GroupSectionImg1.png"></img>
                                    </div>
                                   <div className="img-text">{text1 ? text1 : "게시판"}</div></Link>
                                </div>
                                <div className="img-div">
                                <Link to={"/shopownerlist"}> <div className="img-data">
                                        <img className="img-style" src="src\assets\img\HomePage\GroupSectionImg2.png"></img>
                                    </div>
                                    <div className="img-text">{text2 ? text2 : "업소목록"}</div></Link>
                                </div>
                                <div className="img-div">
                                <Link to={"/cafe-list"}>   <div className="img-data">
                                        <img className="img-style" src="src\assets\img\HomePage\GroupSectionImg3.png"></img>

                                    </div>

                                 <div className="img-text">{text3 ? text3 : "카페/동호회"}</div></Link>
                                </div>
                                <div className="img-div">
                                <Link to={"/blogList"}> <div className="img-data">
                                        <img className="img-style" src="src\assets\img\HomePage\GroupSectionImg4.png"></img>
                                    </div>
                                   <div className="img-text">{text4 ? text4 : "정글 포인트카드"} </div></Link>
                                </div>
                                <div className="img-div">
                                <Link to={"/blogList"}>  <div className="img-data">
                                        <img className="img-style" src="src\assets\img\HomePage\GroupSectionImg5.png"></img>
                                    </div>
                                   <div className="img-text">{text5 ? text5 : "정글 푸드"} </div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ImgGroupSection;