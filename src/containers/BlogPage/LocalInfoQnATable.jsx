import React, { Component } from 'react';
import Pagenation from "../../components/UtilityComponent/Pagenation.jsx";
import CircleName from "../../components/UtilityComponent/CircleName.jsx";
import { Button } from '@material-ui/core';

class LocalInfoQnATable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollepsOpen: false,
            collespsId: ""
        }
        // this.handleRemoveComment = this.handleRemoveComment.bind(this);
        this.onHandleColleps = this.onHandleColleps.bind(this);
    }
    onHandleColleps( id) {

        let { isCollepsOpen, collespsId } = this.state;
        this.setState({
            isCollepsOpen: !isCollepsOpen,
            collespsId: id
        })
    }
    render() {
        let { isCollepsOpen, collespsId } = this.state;


        return (
            <div id="local-Info-qna-table-comp">
                <table className="table main-table" >
                    <thead>
                        <tr>
                            <th><div  style={{ display: "flex", margin: "auto", width: "60%" }}>번호</div></th>{/*writer(username) */}
                            <th>제목</th>{/*  date of write */}
                            <th>조회수</th>{/*  category */}
                        </tr>
                    </thead>
                    {
                        this.props.tableRow.map((x, index) =>
                            <tbody onClick={() => this.onHandleColleps( index)} className="border_bottom" >
                                <tr key={index}>
                                    <td><div style={{ display: "flex", margin: "auto", width: "60%" }}><CircleName username={x.username} /><span style={{ paddingLeft: "10px" }}>{x.username}</span></div></td>
                                    {/* <td>{x.date}</td> */}
                                    <td>{x.category}</td>
                                    {/* <td><span style={{ cursor: "pointer" }} onClick={() => this.props.onBlogTitle(x)}>{x.title}</span></td> */}
                                    {/* <td>{x.tags}</td> */}
                                    <td>34
                                    {isCollepsOpen && collespsId === index ?
                                            <i className="fa fa-minus colleps-icon" aria-hidden="true" ></i>
                                            :
                                            <i className="fa fa-plus colleps-icon" aria-hidden="true"  ></i>
                                        }
                                    </td>
                                </tr>
                                <tr className={isCollepsOpen && collespsId === index ? "collesps-main-row" : "collesps-main-row close"}>
                                    <td colSpan="6" className="collesps-main-column" >
                                        <div className="table-heading-colapse">시리얼 통신이 안되는 경우는 아래의 순서대로 체크바랍니다.</div>
                                        <div className="colleps-data-div">
                                            <div className="table-title-colapse">안되는 경우는 아래의 순서대로 체크바랍니다.</div>
                                            <div className="step1-blue-dotted-border">
                                                <span className="step1-box">Step   1</span>
                                                <div className="step1-text">안되는 경우는 아래의 순서대로</div>
                                            </div>
                                            <div className="colapse-main-panel">
                                                <div className="colapse-main-left-panel"><div className="left-text">안되 는는</div></div>
                                                <div className="colapse-main-right-panel">
                                                    <div className="colapse-main-right-panel-section">
                                                        <div className="right-panel-text-1">[IEC SERIES 안되는 경우는 아래의 순서대로]</div>
                                                        <div className="right-panel-text-2">IEC SERIES
                                                   <span className="arrow">
                                                                <img src="src\assets\img\icon\black-dashed-arrow.png"></img>
                                                            </span>안되는 경우는 아래의 순서대로</div>
                                                        <div className="right-panel-section-bottom">
                                                            <div className="section-bottom-left">
                                                                <span className="span-orange-text">IEC - Series</span>
                                                                <span className="orange-box">
                                                                    <div className="orange-box-text-1">RS232  TTL</div>
                                                                    <div className="orange-box-text-2">RS485</div></span>
                                                            </div>
                                                            <div className="section-middle-left">
                                                                <div className="tx-box">
                                                                    <span className="tx-text">TX</span>
                                                                    <span className="tx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-right-arrow.png"></img>
                                                                    </span>
                                                                    <span className="tx-text-2">TX</span>
                                                                </div>
                                                                <div className="rx-box">
                                                                    <span className="rx-text">RX</span>
                                                                    <span className="rx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-left-arrow.png"></img>
                                                                    </span>
                                                                    <span className="rx-text-2">RX</span>
                                                                </div>
                                                                <div className="rnd-box">
                                                                    <span className="rnd-text">RND</span>
                                                                    <span className="rnd-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="rnd-text-2">RND</span>
                                                                </div>
                                                                <div className="plus-box">
                                                                    <span className="plus-text">+</span>
                                                                    <span className="plus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="plus-text-2">+</span>
                                                                </div>
                                                                <div className="minus-box">
                                                                    <span className="minus-text">-</span>
                                                                    <span className="minus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="minus-text-2">-</span>
                                                                </div>
                                                            </div>
                                                            <div className="section-right-part">
                                                                <span className="span-blue-text">순서대로</span>
                                                                <span className="blue-box">
                                                                    <div className="blue-box-text-1">RS232  TTL</div>
                                                                    <div className="blue-box-text-2">RS485</div>
                                                                    <div className="blue-littl-box"><div>순서</div></div>
                                                                    <span className="blue-mini-box-1"></span>
                                                                    <span className="blue-mini-box-2"></span>
                                                                    <span className="plus">+</span>
                                                                    <span className="minus">-</span>
                                                                </span>
                                                            </div>
                                                            <div className="section-right-touch">
                                                                <div className="right-touch-text-1">
                                                                    -  RS232/TTL안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                </div>
                                                                <div className="right-touch-text-2">
                                                                    -  RS485/TTL안되는 경우는 아래의
                                                                </div>
                                                            </div>
                                                            <div className="dashed-border-main">1</div>
                                                            <div className="gray-box-bottom">
                                                                안되는 경우는 아래의 순서대로 안되는 경우는
                                                                아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                 안되는 경우는 아래의 순서대로 안되는 경우는
                                                                  아래의 순서대로 안되는 경우는 아래의 순서대로
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bottom-text-section">
                                                    <div className="bottom-text-1"> 1. 안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2"> 1 - 1.MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-3"> # 안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-4"> 1 - 2.MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="part-of-panel">
                                                        <div className="part-blue-box"><div>아래</div></div>
                                                        <div className="part-text">MAX232안되는 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 MAX232안되는 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div>
                                                    <div className="paregraph-box-101">
                                                        <div className="para-main-1">2. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div>
                                                    <div className="paregraph-box-202">
                                                        <div className="para-main-2">3. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-1-bottom-btn">
                                            <div className="step-1-red-img">
                                                <img src="src\assets\img\icon\reb-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                            <div className="step-1-blue-img">
                                                <img src="src\assets\img\icon\blue-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                        </div>
                                        <div className="colleps-data-div">
                                            <div className="table-title-colapse-2">안되는 경우는 아래의 순서대로 체크바랍니다.</div>
                                            <div className="step1-blue-dotted-border">
                                                <span className="step1-box">Step  2</span>
                                                <div className="step1-text">안되는 경우는 아래의 순서대로</div>
                                            </div>
                                            <div className="colapse-main-panel">
                                                <div className="colapse-main-left-panel"><div className="left-text">안되 는는</div></div>
                                                {/* <div className="colapse-main-right-panel">
                                                    <div className="colapse-main-right-panel-section">
                                                        <div className="right-panel-text-1">[IEC SERIES 안되는 경우는 아래의 순서대로]</div>
                                                        <div className="right-panel-text-2">IEC SERIES
                                                   <span className="arrow">
                                                                <img src="src\assets\img\icon\black-dashed-arrow.png"></img>
                                                            </span>안되는 경우는 아래의 순서대로</div>
                                                        <div className="right-panel-section-bottom">
                                                            <div className="section-bottom-left">
                                                                <span className="span-orange-text">IEC - Series</span>
                                                                <span className="orange-box">
                                                                    <div className="orange-box-text-1">RS232  TTL</div>
                                                                    <div className="orange-box-text-2">RS485</div></span>
                                                            </div>
                                                            <div className="section-middle-left">
                                                                <div className="tx-box">
                                                                    <span className="tx-text">TX</span>
                                                                    <span className="tx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-right-arrow.png"></img>
                                                                    </span>
                                                                    <span className="tx-text-2">TX</span>
                                                                </div>
                                                                <div className="rx-box">
                                                                    <span className="rx-text">RX</span>
                                                                    <span className="rx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-left-arrow.png"></img>
                                                                    </span>
                                                                    <span className="rx-text-2">RX</span>
                                                                </div>
                                                                <div className="rnd-box">
                                                                    <span className="rnd-text">RND</span>
                                                                    <span className="rnd-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="rnd-text-2">RND</span>
                                                                </div>
                                                                <div className="plus-box">
                                                                    <span className="plus-text">+</span>
                                                                    <span className="plus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="plus-text-2">+</span>
                                                                </div>
                                                                <div className="minus-box">
                                                                    <span className="minus-text">-</span>
                                                                    <span className="minus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="minus-text-2">-</span>
                                                                </div>
                                                            </div>
                                                            <div className="section-right-part">
                                                                <span className="span-blue-text">순서대로</span>
                                                                <span className="blue-box">
                                                                    <div className="blue-box-text-1">RS232  TTL</div>
                                                                    <div className="blue-box-text-2">RS485</div>
                                                                    <div className="blue-littl-box"><div>순서</div></div>
                                                                    <span className="blue-mini-box-1"></span>
                                                                    <span className="blue-mini-box-2"></span>
                                                                    <span className="plus">+</span>
                                                                    <span className="minus">-</span>
                                                                </span>
                                                            </div>
                                                            <div className="section-right-touch">
                                                                <div className="right-touch-text-1">
                                                                    -  RS232/TTL안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                </div>
                                                                <div className="right-touch-text-2">
                                                                    -  RS485/TTL안되는 경우는 아래의
                                                                </div>
                                                            </div>
                                                            <div className="dashed-border-main">1</div>
                                                            <div className="gray-box-bottom">
                                                                안되는 경우는 아래의 순서대로 안되는 경우는
                                                                아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                 안되는 경우는 아래의 순서대로 안되는 경우는
                                                                  아래의 순서대로 안되는 경우는 아래의 순서대로
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="bottom-text-section">
                                                    <div className="bottom-text-1 mb-2"> 1. 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> 2. MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    {/* <div className="bottom-text-3"> # 안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-4"> 1 - 2.MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div> */}
                                                    <div className="part-of-panel-1">
                                                        <div className="part-red-box"><div>아래</div></div>
                                                        <div className="part-text-red">MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div>
                                                    <div className="part-of-panel">
                                                        <div className="part-blue-box"><div>아래</div></div>
                                                        <div className="part-text">MAX232안되는 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 MAX232안되는 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div>
                                                    {/* <div className="paregraph-box-101">
                                                        <div className="para-main-1">2. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div>
                                                    <div className="paregraph-box-202">
                                                        <div className="para-main-2">3. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-1-bottom-btn">
                                            <div className="step-1-red-img">
                                                <img src="src\assets\img\icon\reb-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                            <div className="step-1-blue-img">
                                                <img src="src\assets\img\icon\blue-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                        </div>
                                        <div className="colleps-data-div">
                                            <div className="table-title-colapse-2">IEC SERIES 안되는 경우는 아래의 순서대로 체크바랍니다.</div>
                                            <div className="step1-blue-dotted-border mt-90px">
                                                <span className="step1-box">Step  3</span>
                                                <div className="step1-text">안되는 경우는 아래의 순서대로</div>
                                            </div>
                                            <div className="colapse-main-panel">
                                                <div className="colapse-main-left-panel"><div className="left-text">안되 는는</div></div>
                                                {/* <div className="colapse-main-right-panel">
                                                    <div className="colapse-main-right-panel-section">
                                                        <div className="right-panel-text-1">[IEC SERIES 안되는 경우는 아래의 순서대로]</div>
                                                        <div className="right-panel-text-2">IEC SERIES
                                                   <span className="arrow">
                                                                <img src="src\assets\img\icon\black-dashed-arrow.png"></img>
                                                            </span>안되는 경우는 아래의 순서대로</div>
                                                        <div className="right-panel-section-bottom">
                                                            <div className="section-bottom-left">
                                                                <span className="span-orange-text">IEC - Series</span>
                                                                <span className="orange-box">
                                                                    <div className="orange-box-text-1">RS232  TTL</div>
                                                                    <div className="orange-box-text-2">RS485</div></span>
                                                            </div>
                                                            <div className="section-middle-left">
                                                                <div className="tx-box">
                                                                    <span className="tx-text">TX</span>
                                                                    <span className="tx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-right-arrow.png"></img>
                                                                    </span>
                                                                    <span className="tx-text-2">TX</span>
                                                                </div>
                                                                <div className="rx-box">
                                                                    <span className="rx-text">RX</span>
                                                                    <span className="rx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-left-arrow.png"></img>
                                                                    </span>
                                                                    <span className="rx-text-2">RX</span>
                                                                </div>
                                                                <div className="rnd-box">
                                                                    <span className="rnd-text">RND</span>
                                                                    <span className="rnd-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="rnd-text-2">RND</span>
                                                                </div>
                                                                <div className="plus-box">
                                                                    <span className="plus-text">+</span>
                                                                    <span className="plus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="plus-text-2">+</span>
                                                                </div>
                                                                <div className="minus-box">
                                                                    <span className="minus-text">-</span>
                                                                    <span className="minus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="minus-text-2">-</span>
                                                                </div>
                                                            </div>
                                                            <div className="section-right-part">
                                                                <span className="span-blue-text">순서대로</span>
                                                                <span className="blue-box">
                                                                    <div className="blue-box-text-1">RS232  TTL</div>
                                                                    <div className="blue-box-text-2">RS485</div>
                                                                    <div className="blue-littl-box"><div>순서</div></div>
                                                                    <span className="blue-mini-box-1"></span>
                                                                    <span className="blue-mini-box-2"></span>
                                                                    <span className="plus">+</span>
                                                                    <span className="minus">-</span>
                                                                </span>
                                                            </div>
                                                            <div className="section-right-touch">
                                                                <div className="right-touch-text-1">
                                                                    -  RS232/TTL안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                </div>
                                                                <div className="right-touch-text-2">
                                                                    -  RS485/TTL안되는 경우는 아래의
                                                                </div>
                                                            </div>
                                                            <div className="dashed-border-main">1</div>
                                                            <div className="gray-box-bottom">
                                                                안되는 경우는 아래의 순서대로 안되는 경우는
                                                                아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                 안되는 경우는 아래의 순서대로 안되는 경우는
                                                                  아래의 순서대로 안되는 경우는 아래의 순서대로
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="bottom-text-section">
                                                    <div className="bottom-text-1 mb-2"> 1. 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> 2. MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    {/* <div className="bottom-text-3"> # 안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-4"> 1 - 2.MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div> */}
                                                    {/* <div className="part-of-panel-1">
                                                        <div className="part-red-box"><div>아래</div></div>
                                                        <div className="part-text-red">MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div> */}
                                                    <div className="part-of-panel mb-2">
                                                        <div className="part-blue-box"><div>아래</div></div>
                                                        <div className="part-text">MAX232안되는 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 MAX232안되는 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div>
                                                    <div className="bottom-text-1 mb-2">안되는 경우는 순서대로 안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> - MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> - MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-4"> - MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-1 mb-2">3. 안되는 경우는 순서대로 안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> - MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="part-of-panel mb-2">
                                                        <div className="part-blue-box"><div>아래</div></div>
                                                        <div className="part-text">MAX232안되는 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 MAX232안되는 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div>
                                                    <div className="bottom-text-1 mb-2">4. 안되는 경우는 순서대로 안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> - MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="part-of-panel mb-2">
                                                        <div className="part-blue-box"><div>아래</div></div>
                                                        <div className="part-text">MAX232안되는 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 MAX232안되는 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div>
                                                    {/* <div className="paregraph-box-101">
                                                        <div className="para-main-1">2. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div>
                                                    <div className="paregraph-box-202">
                                                        <div className="para-main-2">3. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-1-bottom-btn">
                                            <div className="step-1-red-img">
                                                <img src="src\assets\img\icon\reb-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                            <div className="step-1-blue-img">
                                                <img src="src\assets\img\icon\blue-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                        </div>
                                        <div className="colleps-data-div">
                                            <div className="table-title-colapse-2">안되는 경우는 아래의 순서대로 체크바랍니다.</div>
                                            <div className="step1-blue-dotted-border">
                                                <span className="step1-box">Step  4</span>
                                                <div className="step1-text">안되는 경우는 아래의 순서대로</div>
                                            </div>
                                            <div className="colapse-main-panel">
                                                <div className="colapse-main-left-panel"><div className="left-text">안되 는는</div></div>
                                                {/* <div className="colapse-main-right-panel">
                                                    <div className="colapse-main-right-panel-section">
                                                        <div className="right-panel-text-1">[IEC SERIES 안되는 경우는 아래의 순서대로]</div>
                                                        <div className="right-panel-text-2">IEC SERIES
                                                   <span className="arrow">
                                                                <img src="src\assets\img\icon\black-dashed-arrow.png"></img>
                                                            </span>안되는 경우는 아래의 순서대로</div>
                                                        <div className="right-panel-section-bottom">
                                                            <div className="section-bottom-left">
                                                                <span className="span-orange-text">IEC - Series</span>
                                                                <span className="orange-box">
                                                                    <div className="orange-box-text-1">RS232  TTL</div>
                                                                    <div className="orange-box-text-2">RS485</div></span>
                                                            </div>
                                                            <div className="section-middle-left">
                                                                <div className="tx-box">
                                                                    <span className="tx-text">TX</span>
                                                                    <span className="tx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-right-arrow.png"></img>
                                                                    </span>
                                                                    <span className="tx-text-2">TX</span>
                                                                </div>
                                                                <div className="rx-box">
                                                                    <span className="rx-text">RX</span>
                                                                    <span className="rx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-left-arrow.png"></img>
                                                                    </span>
                                                                    <span className="rx-text-2">RX</span>
                                                                </div>
                                                                <div className="rnd-box">
                                                                    <span className="rnd-text">RND</span>
                                                                    <span className="rnd-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="rnd-text-2">RND</span>
                                                                </div>
                                                                <div className="plus-box">
                                                                    <span className="plus-text">+</span>
                                                                    <span className="plus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="plus-text-2">+</span>
                                                                </div>
                                                                <div className="minus-box">
                                                                    <span className="minus-text">-</span>
                                                                    <span className="minus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="minus-text-2">-</span>
                                                                </div>
                                                            </div>
                                                            <div className="section-right-part">
                                                                <span className="span-blue-text">순서대로</span>
                                                                <span className="blue-box">
                                                                    <div className="blue-box-text-1">RS232  TTL</div>
                                                                    <div className="blue-box-text-2">RS485</div>
                                                                    <div className="blue-littl-box"><div>순서</div></div>
                                                                    <span className="blue-mini-box-1"></span>
                                                                    <span className="blue-mini-box-2"></span>
                                                                    <span className="plus">+</span>
                                                                    <span className="minus">-</span>
                                                                </span>
                                                            </div>
                                                            <div className="section-right-touch">
                                                                <div className="right-touch-text-1">
                                                                    -  RS232/TTL안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                </div>
                                                                <div className="right-touch-text-2">
                                                                    -  RS485/TTL안되는 경우는 아래의
                                                                </div>
                                                            </div>
                                                            <div className="dashed-border-main">1</div>
                                                            <div className="gray-box-bottom">
                                                                안되는 경우는 아래의 순서대로 안되는 경우는
                                                                아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                 안되는 경우는 아래의 순서대로 안되는 경우는
                                                                  아래의 순서대로 안되는 경우는 아래의 순서대로
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="bottom-text-section">
                                                    <div className="bottom-text-1 mb-2"> 1. 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> -  MAX232안되는 경우는 아래의 순서대로 경우는 아래의 순서대로  MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-1 mb-2"> 2. MAX232안되는 경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> -  MAX232안되는 경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-1 mb-2"> 3. MAX232안되는 경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-2 mb-2"> -  MAX232안되는 경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    {/* <div className="bottom-text-3"> # 안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-4"> 1 - 2.MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div> */}
                                                    {/* <div className="part-of-panel-1">
                                                        <div className="part-red-box"><div>아래</div></div>
                                                        <div className="part-text-red">MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div>
                                                    <div className="part-of-panel">
                                                        <div className="part-blue-box"><div>아래</div></div>
                                                        <div className="part-text">MAX232안되는 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 MAX232안되는 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div> */}
                                                    {/* <div className="paregraph-box-101">
                                                        <div className="para-main-1">2. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div>
                                                    <div className="paregraph-box-202">
                                                        <div className="para-main-2">3. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-1-bottom-btn">
                                            <div className="step-1-red-img">
                                                <img src="src\assets\img\icon\reb-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                            <div className="step-1-blue-img">
                                                <img src="src\assets\img\icon\blue-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                        </div>
                                        <div className="colleps-data-div">
                                            <div className="table-title-colapse-2">안되는 경우는 아래의 순서대로 체크바랍니다.</div>
                                            <div className="step1-blue-dotted-border">
                                                <span className="step1-box">Step  5</span>
                                                <div className="step1-text">안되는 경우는 아래의 순서대로</div>
                                            </div>
                                            <div className="colapse-main-panel mb-60px">
                                                <div className="colapse-main-left-panel"><div className="left-text">안되 는는</div></div>
                                                {/* <div className="colapse-main-right-panel">
                                                    <div className="colapse-main-right-panel-section">
                                                        <div className="right-panel-text-1">[IEC SERIES 안되는 경우는 아래의 순서대로]</div>
                                                        <div className="right-panel-text-2">IEC SERIES
                                                   <span className="arrow">
                                                                <img src="src\assets\img\icon\black-dashed-arrow.png"></img>
                                                            </span>안되는 경우는 아래의 순서대로</div>
                                                        <div className="right-panel-section-bottom">
                                                            <div className="section-bottom-left">
                                                                <span className="span-orange-text">IEC - Series</span>
                                                                <span className="orange-box">
                                                                    <div className="orange-box-text-1">RS232  TTL</div>
                                                                    <div className="orange-box-text-2">RS485</div></span>
                                                            </div>
                                                            <div className="section-middle-left">
                                                                <div className="tx-box">
                                                                    <span className="tx-text">TX</span>
                                                                    <span className="tx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-right-arrow.png"></img>
                                                                    </span>
                                                                    <span className="tx-text-2">TX</span>
                                                                </div>
                                                                <div className="rx-box">
                                                                    <span className="rx-text">RX</span>
                                                                    <span className="rx-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-left-arrow.png"></img>
                                                                    </span>
                                                                    <span className="rx-text-2">RX</span>
                                                                </div>
                                                                <div className="rnd-box">
                                                                    <span className="rnd-text">RND</span>
                                                                    <span className="rnd-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="rnd-text-2">RND</span>
                                                                </div>
                                                                <div className="plus-box">
                                                                    <span className="plus-text">+</span>
                                                                    <span className="plus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="plus-text-2">+</span>
                                                                </div>
                                                                <div className="minus-box">
                                                                    <span className="minus-text">-</span>
                                                                    <span className="minus-red-arrow-img">
                                                                        <img src="src\assets\img\icon\red-single-line.png"></img>
                                                                    </span>
                                                                    <span className="minus-text-2">-</span>
                                                                </div>
                                                            </div>
                                                            <div className="section-right-part">
                                                                <span className="span-blue-text">순서대로</span>
                                                                <span className="blue-box">
                                                                    <div className="blue-box-text-1">RS232  TTL</div>
                                                                    <div className="blue-box-text-2">RS485</div>
                                                                    <div className="blue-littl-box"><div>순서</div></div>
                                                                    <span className="blue-mini-box-1"></span>
                                                                    <span className="blue-mini-box-2"></span>
                                                                    <span className="plus">+</span>
                                                                    <span className="minus">-</span>
                                                                </span>
                                                            </div>
                                                            <div className="section-right-touch">
                                                                <div className="right-touch-text-1">
                                                                    -  RS232/TTL안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                </div>
                                                                <div className="right-touch-text-2">
                                                                    -  RS485/TTL안되는 경우는 아래의
                                                                </div>
                                                            </div>
                                                            <div className="dashed-border-main">1</div>
                                                            <div className="gray-box-bottom">
                                                                안되는 경우는 아래의 순서대로 안되는 경우는
                                                                아래의 순서대로 안되는 경우는 아래의 순서대로
                                                                 안되는 경우는 아래의 순서대로 안되는 경우는
                                                                  아래의 순서대로 안되는 경우는 아래의 순서대로
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="bottom-text-section">
                                                    <div className="bottom-text-1 mb-2"> 1. 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로 안되는 경우는 아래의 순서대로</div>
                                                    {/* <div className="bottom-text-2 mb-2"> 2. MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div> */}
                                                    {/* <div className="bottom-text-3"> # 안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    <div className="bottom-text-4"> 1 - 2.MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div> */}
                                                    {/* <div className="part-of-panel-1">
                                                        <div className="part-red-box"><div>아래</div></div>
                                                        <div className="part-text-red">MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div> */}
                                                    <div className="part-of-panel">
                                                        <div className="part-blue-box"><div>아래</div></div>
                                                        <div className="part-text">MAX232안되는 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 경우는 아래의 순서대로 MAX232안되는  경우는 아래의 순서대로 MAX232안되는 MAX232안되는 경우는 아래의 순서대로</div>
                                                    </div>
                                                    {/* <div className="paregraph-box-101">
                                                        <div className="para-main-1">2. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div>
                                                    <div className="paregraph-box-202">
                                                        <div className="para-main-2">3. 경우는 아래의 순서대로 MAX232안되는 경우는 아래의</div>
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                        경우는 아래의 순서대로 MAX232안되는 경우는 아래의 순서대로 MAX232안되는 경우는 아래의
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="step-1-bottom-btn">
                                            <div className="step-1-red-img">
                                                <img src="src\assets\img\icon\reb-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                            <div className="step-1-blue-img">
                                                <img src="src\assets\img\icon\blue-arrow-btn.png"></img>
                                                <div>통신이</div>
                                            </div>
                                        </div> */}
                                    </td>
                                </tr>
                                {/* <tr className={isCollepsOpen && collespsId === index ? "collesps-main-row" : "collesps-main-row close"}>
                                        <td colSpan="6" className="collesps-main-column" >
                                            <div className="colleps-data-div">
                                                <table className="table colleps-table" >
                                                    <thead>
                                                        <tr>
                                                            <th>번호(No)</th> 
                                                            <th> 제목(Title)</th>
                                                            <th>조회수(View)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>32</td>  
                                                            <td>Q  네트워크가 연결이 되지 않을 때 점검 사항</td>
                                                            <td>114</td>
                                                        </tr>
                                                        <tr>
                                                            <td>32</td>  
                                                            <td>Q  네트워크가 연결이 되지 않을 때 점검 사항</td>
                                                            <td>114</td>
                                                        </tr>
                                                        <tr>
                                                            <td>32</td>  
                                                            <td>Q  네트워크가 연결이 되지 않을 때 점검 사항</td>
                                                            <td>114</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr> */}
                            </tbody>
                        )
                    }
                </table>
                <Button variant="contained" size="medium" className="btn-blue mat-input-aftert-btn px-5 mt-2 float-right ">글쓰기</Button>
                {/* <button className="btn-blue  px-5 mt-2 float-right">글쓰기</button>        */}
                <Pagenation pageSize={10} />
            </div>
        );
    }

}

export default LocalInfoQnATable ;

