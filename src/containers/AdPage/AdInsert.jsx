import React, { Component } from 'react';;
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Input, InputAdornment, FormControlLabel, FormGroup, Checkbox, Radio, RadioGroup } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Logo from "./../../assets/img/customer-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";

class AdInsert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerName: "",
            contact: "",
            businessNumber: "지역선택",
            all: "",
            detailedAddress: "",
            zipCode: "",
            isfocused: false,
            dynamicDropdown: "전체 1",
            isFormSubmited: false,
            btnInput1: "",
            btnInput2: "",
            btnInput3: "",
            checkedA: false,
            checkedB: false,
            checkedC: false,
            radio: "",
        }
        this.onHandleFormChange = this.onHandleFormChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onCustomerDropdownSelect = this.onCustomerDropdownSelect.bind(this);
        this.OnCheckboxSelectChange = this.OnCheckboxSelectChange.bind(this);
    }

    OnCheckboxSelectChange(evt) {
        debugger
        this.setState({
            ...this.state,
            [evt.target.name]: event.target.checked
        }
        );
    };

    onCustomerDropdownSelect(stateObj, value) {
        this.setState({
            ...this.state,
            [stateObj]: value
        })
    }
    onHandleFormChange(evt) {
        const value = evt.target.value;
        debugger
        this.setState({
            ...this.state,
            [evt.target.name]: value,
        })
    }
    onFormSubmit() {
        this.props.history.push({
            pathname: "/credit-card-payment",
        })
    }

    render() {
        const { customerName, contact, businessNumber, btnInput1, btnInput2, btnInput3, checkedA, checkedB, checkedC, detailedAddress, zipCode, isFormSubmited, radio } = this.state;
        const {locationAdId, selectedAdContents} = this.props.location.state
        return (
            <div id="ad-insert-page">
                <div>
                    <div className="ad-insert-container">
                        <div className="ad-insert-main">
                            <div className="ad-insert-img">
                                <Mainlogo logo={Logo} logoTitleText="Tokyo" logoMainText="정글뉴스" logoSubText="광고 문의" ></Mainlogo>
                                <div className="ad-text">
                                    <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                                    <div className="div-text-2">Hello World</div>
                                </div>
                            </div>
                            <div className="ad-insert-content">
                                <div className="row ">
                                    <div className="col-md-12">
                                        <div style={{ fontWeight: "700", marginLeft: "11px", marginBottom: "10px" }}>신규광고 삽입
                                            <div style={{
                                                background: "#e3e4e8",
                                                borderRadius: "5px",
                                                padding: "10px",
                                                border: "1px sold #0000FF",
                                                marginBottom: "30px"
                                            }}>
                                                <br></br>
                                                <span>LocationID : </span><span style={{ color: "#6f42c1" }}>{locationAdId}</span>

                                                <br></br>
                                                <span>허용 파일 크기: </span><sapn style={{ color: "#6f42c1" }}>1900 X 150</sapn>


                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="mat-input-icon-div">
                                            <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : btnInput1 ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                        </div>
                                        <div className="mat-input-textfield-div" error={!isFormSubmited ? false : btnInput1 ? false : true}>
                                            <FormControl className="fullWidth">
                                                <InputLabel htmlFor="btnInput1">사이즈에 맞는 파일로 업로드 하세요</InputLabel>
                                                <Input
                                                    name="btnInput1"
                                                    id="btnInput1"
                                                    defaultValue={btnInput1}
                                                    onChange={this.onHandleFormChange}
                                                    required
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <Button variant="contained" color="primary" className="btn-blue mat-input-aftert-btn">업로드</Button>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-md-12"> 
                                        <div className="mat-input-below-textfield-div p-box-left-box" style={{ fontSize: "12px", color: "#6f42c1" }}  >
                                            규격에 맞지 않거나 허용되지 않는 컨텐츠의 경우 업데이트가 안되오니 주의해주세요.
                                        </div>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="mat-input-icon-div">
                                            <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : btnInput1 ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                        </div>
                                        <div className="mat-input-textfield-div">
                                            <FormControl className="fullWidth">
                                                <InputLabel htmlFor="btnInput1">Link URL  예) www.example.com</InputLabel>
                                                <Input
                                                    name="btnInput1"
                                                    id="btnInput1"
                                                    defaultValue={btnInput1}
                                                    onChange={this.onHandleFormChange}
                                                    required
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="p-box-left-box" style={{ fontSize: "12px", color: "#6f42c1" }}  >
                                            위에 링크하고 싶으신 URL을 입력하세요. 없으실 경우 이미지 클릭시 자체 생성된 블로그로 이동됩니다.
                                        </div>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="p-box-left-box mar-t-15" >
                                            위에 링크하고 싶으신 URL을 입력하세요. 없으실 경우 이미지 클릭시 자체 생성된 블로그로 이동됩니다.
                                        </div>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-md-7 mar-top-15 p-box-left">
                                        <div className="mat-input-textfield-div-sub">
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="position" name="radio" id="radio" value={radio} onChange={this.onHandleFormChange} row>
                                                    <FormControlLabel
                                                        value="creditcard"
                                                        control={<Radio className="creation-cafe-radio-select" />}
                                                        label="신용카드"
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        value="Paypal"
                                                        control={<Radio className="creation-cafe-radio-select" />}
                                                        label="페이팔"
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        value="JunglePoint"
                                                        control={<Radio className="creation-cafe-radio-select" />}
                                                        label="정글포인트"
                                                        labelPlacement="end"
                                                    />
                                                </RadioGroup>

                                            </FormControl>
                                        </div>
                                        <div className="botom-alert-info-div">
                                            정글 포인트로 결재시 10%의 기간 만큼 추가됩니다.
                                        </div>
                                        <div style={{ fontWeight: "700", marginBottom: "10px" }}>선택한 광고 내역
                                                <div style={{
                                                background: "#e3e4e8",
                                                borderRadius: "5px",
                                                padding: "10px",
                                                border: "1px sold #0000FF",
                                                marginBottom: "30px"
                                            }}>
                                                <br></br>
                                                <span>광고 신청기간 : </span><span style={{ color: "#6f42c1" }}>2019년 12월 22일 ~ 2020년 12월 21일</span>
                                                <br></br>
                                                <span>광고 금액 : </span><span style={{ color: "#6f42c1" }}>US$5,400.00</span>

                                            </div>
                                            <Button variant="contained" color="primary" size="large" className="btn-blue my-register-submit-btn cust-input-button-next" onClick={this.onFormSubmit}>직접 등록하기</Button>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="right-coman-box">
                                            <div className="right-comman-logo">
                                                <img src="src/assets/img/AdInsertPage/junglepointcardRIGHT.png"></img>
                                            </div>
                                            <div className="logo-bootam-text">
                                                없으실 경우 이미지 클릭시 자체 생성된 블로그로 이동됩니다.<i className="fa fa-bomb" aria-hidden="true"></i><i className="fa fa-bomb" aria-hidden="true"></i><i className="fa fa-bomb" aria-hidden="true"></i>
                                            </div>
                                            <div className="logo-bootam-text-sub">
                                                직접 등록하기
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="after-form-info">


                                            <div className="botom-alert-info-div">
                                                결재 ALERT
                                            </div>

                                        </div>
                                    </div>
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
export default AdInsert;