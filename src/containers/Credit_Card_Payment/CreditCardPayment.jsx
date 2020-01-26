import React, { Component } from 'react';
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import CreditCardLogo from "./../../assets/img/credit-card-payment.jpg";
import VisaImage from "./../../assets/img/visa-image.jpg";
import MasterImage from "./../../assets/img/master-card.jpg";
import JcbImage from "./../../assets/img/jcb-image.jpg";
import PaypalImage from "./../../assets/img/paypal-image.jpg";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
class CreditCardPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHolderName: "", cardNumber: "", cardExpireMonth: "", cardExpireYear: "", cardCNS: "",
            isFormSubmited: false
        }
        this.onHandleFormChange = this.onHandleFormChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onHandleFormChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value,
        })
    }

    onFormSubmit() {
        this.setState({
            isFormSubmited: true
        })
    }
    render() {
        let { cardHolderName, cardNumber, cardExpireMonth, cardExpireYear, cardCNS, isFormSubmited } = this.state;
        return (
            <div id="credit-card-payment-page">
                <div className="credit-card-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <Mainlogo logo={CreditCardLogo} logoTitleText="Tokyo" logoMainText="정글" logoSubText="결제창"></Mainlogo>
                                <div className="ad-text">
                                    <div className="div-text-1">안심 하세요! 정글뉴스/정글톡/정글푸드 모든 정글 사이트는 어떤 카드정보도 보관하지 않습니다.</div>
                                    <div className="div-text-2">이하 정보는 고객님이 주문을 결제하실때만 쓰이며 어떤 정보도 다른 회사(사람)에게 판매,공유, 대여하지 않습니다.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mar-l-13">
                                <div className="credit-heading"><span className="bell-icon"><i className="fa fa-bell-o" aria-hidden="true"></i></span><span className="font-weight-bold bell-head-text">입금이 완료되었습니다.   게시 예정일은 2019년 3월 27일입니다.</span></div>
                                <div className="credit-card-image-section">
                                    <div className="row">
                                        <div className="col-md-12 credit-payment-box">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="credit-img-section-1 border-radius">
                                                                <img src={VisaImage} className="border-radius"></img>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="credit-img-section-2 border-radius">
                                                                <img src={MasterImage} className="border-radius"></img>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="credit-img-section-3 border-radius">
                                                                <img src={JcbImage} className="border-radius"></img>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="credit-img-section-4 border-radius">
                                                                <img src={PaypalImage} className="border-radius"></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="credit-card-payment-right-part">
                                                                <div className="payment-main-div">
                                                                    <div className="payment-main-text">
                                                                        <div className="title-text">입금 CREDIT CARD PAYMENT</div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="left-part">
                                                                                <div className="sub-left">Booking ID</div>
                                                                                <div className="sub-left">Location ID</div>
                                                                                <div className="sub-left">지불 금액 </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="right-part">
                                                                                <div className="sub-right">MLT001</div>
                                                                                <div className="sub-right">MLT001</div>
                                                                                <div className="sub-right">US$ 74.70</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="payment-input-div">
                                                                    <div className="row form-group has-error">
                                                                        {/* <div className="col-md-3">
                                                                            <div className="text-lbl-1">
                                                                                <label className="control-label font-bold" htmlFor="Label1">신용카드 번호</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9">
                                                                            <div className="">
                                                                                <input className="form-control cust-form-1" id="Label1" type="text" required />
                                                                            </div>
                                                                        </div> */}

                                                                        <div className="col-md-12">
                                                                            <div className="mat-input-icon-div">
                                                                                <span className={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : cardNumber ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon  mat-input-icon  bg-danger border-danger color-white"}></span>
                                                                            </div>
                                                                            <div className="mat-input-textfield-div">
                                                                                <TextField
                                                                                    name="cardNumber"
                                                                                    id="isCardNumber"
                                                                                    label="신용카드 번호"
                                                                                    className="fullWidth"
                                                                                    defaultValue={cardNumber}
                                                                                    onChange={this.onHandleFormChange}
                                                                                    error={!isFormSubmited ? false : cardNumber ? false : true}
                                                                                    required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row form-group has-error">
                                                                        {/* <div className="col-md-3">
                                                                            <div className="text-lbl-2">
                                                                                <label className="control-label font-bold" htmlFor="Label1">사용자명</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-9">
                                                                            <div className="">
                                                                                <input className="form-control cust-form-2" id="Label1" type="text" required />
                                                                            </div>
                                                                        </div> */}
                                                                        <div className="col-md-12">
                                                                            <div className="mat-input-icon-div">
                                                                                <span className={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : cardHolderName ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                                                            </div>
                                                                            <div className="mat-input-textfield-div">
                                                                                <TextField
                                                                                    name="cardHolderName"
                                                                                    id="isCardHolderName"
                                                                                    label="사용자명"
                                                                                    className="fullWidth"
                                                                                    defaultValue={cardHolderName}
                                                                                    onChange={this.onHandleFormChange}
                                                                                    error={!isFormSubmited ? false : cardHolderName ? false : true}
                                                                                    required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row form-group has-error">
                                                                        <div className="col-md-2">
                                                                            <div className="text-lbl-3">
                                                                                <label className="control-label font-bold" htmlFor="Label1">유효기간</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-10 pad-l-0">
                                                                            <div className="row ">
                                                                                <div className="col-md-4">
                                                                                    <TextField
                                                                                        name="cardExpireMonth"
                                                                                        id="isCardExpireMonth"
                                                                                        label="MM"
                                                                                        className="fullWidth"
                                                                                        defaultValue={cardExpireMonth}
                                                                                        onChange={this.onHandleFormChange}
                                                                                        error={!isFormSubmited ? false : cardExpireMonth ? false : true}
                                                                                        required
                                                                                    />
                                                                                    {/* <input className="form-control cust-form-3" id="Label1" placeholder="MM" type="text" required /> */}
                                                                                </div>
                                                                                <div className="col-md-4">
                                                                                    <TextField
                                                                                        name="cardExpireYear"
                                                                                        id="isCardExpireYear"
                                                                                        label="YY"
                                                                                        className="fullWidth"
                                                                                        defaultValue={cardExpireYear}
                                                                                        onChange={this.onHandleFormChange}
                                                                                        error={!isFormSubmited ? false : cardExpireYear ? false : true}
                                                                                        required
                                                                                    />
                                                                                    {/* <input className="form-control cust-form-4" id="Label1" placeholder="YY" type="text" required /> */}
                                                                                </div>
                                                                                <div className="col-md-4 ">
                                                                                    <TextField
                                                                                        name="cardCNS"
                                                                                        id="isCardCNS"
                                                                                        label="CNS"
                                                                                        className="fullWidth"
                                                                                        defaultValue={cardCNS}
                                                                                        onChange={this.onHandleFormChange}
                                                                                        error={!isFormSubmited ? false : cardCNS ? false : true}
                                                                                        required
                                                                                    />
                                                                                    {/* <input className="form-control cust-form-5" id="Label1" placeholder="CNS" type="text" required /> */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="fullWidth submit-btn-section text-center">
                                                        <Button variant="contained" color="primary" size="large" className="btn-blue cust-input-button-next" onClick={this.onFormSubmit}>결제</Button>
                                                        {/* <button className="btn-blue cust-input-button-next">결제</button> */}
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
export default CreditCardPayment;