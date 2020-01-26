import React, { Component } from 'react';
import Pagenation from "../../components/UtilityComponent/Pagenation.jsx";
import CircleName from "../../components/UtilityComponent/CircleName.jsx";
import BlogTag from "../../components/UtilityComponent/BlogTag.jsx";
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Lock, LockOpen } from '@material-ui/icons';


class ChattingRoomTable extends Component {
    render() {

        return (
            <>
                <div className="blog-dropdown">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="customer-dropdown-2">

                                    <div className="dropdown select-align-right">
                                        <button type="button" id="dd_drop_3" className="btn footer-dropdown select-trans-btn  custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                            카테고리
                                            <i className="fa fa-angle-down " aria-hidden="true" />
                                        </button>
                                        <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                            <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("전체보기")} >전체보기</option>
                                            <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("삽니다")}>삽니다</option>
                                            <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("팝니다")}>팝니다</option>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>작성자</th>  {/*writer(username) */}
                            <th>제목</th> {/* title */}
                            <th>태그</th> {/* tags */}
                            <th>공개여부</th>{/*  category */}
                            <th>참여자수</th>{/*  view */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tableRow.map((x, index) =>
                                <tr key={index} >
                                    <td><div style={{ display: "flex", margin: "auto", width: "60%" }}><CircleName username={x.username} /><span style={{ paddingLeft: "10px" }}>{x.username}</span></div></td>
                                    <td><span className="txt cursor-pointer" onClick={() => this.props.onChattingTitle(x)}>{x.title}</span></td>
                                    <td><BlogTag tag={x.tags} /></td>
                                    <td>{x.opennlock == true ? <LockOpen /> : <Lock />}<span style={{ position: "absolute"}}> {x.opennlock == true ? "비공개" : "공개"}</span></td>
                                    <td style={{ cursor: "pointer" }}>{x.members}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <Link to="/blog-writing"><Button variant="contained" size="medium" className="btn-blue mat-input-aftert-btn px-5 mt-2 float-right ">채팅룸 만들기</Button></Link>
                {/* <button className="btn-blue ">글쓰기</button>        */}
                <Pagenation pageSize={10} />
            </>
        );
    }

}

export default ChattingRoomTable;