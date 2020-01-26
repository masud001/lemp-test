import React, { Component } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Input, InputAdornment, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker,
} from '@material-ui/pickers';

import Logo from "./../../assets/img/customer-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import UploadImage from "./../../assets/img/customer-img-upload.jpg";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import MapImage from "./../../assets/img/customer-map-img.jpg";
import { Close } from '@material-ui/icons';
// import Select from "react-select";
import $ from "jquery";

const useStyles = {
    textField: {
        marhinLeft: '18px',
        width: '200px',
        marginTop: '-4px'
    },

    select: {
        width: '200px'
    }
}


const options = [
    { value: '전체 1', label: '전체 1' },
    { value: '전체 2', label: '전체 2' }
];

const customStyle = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid #333',
        background: 'transparent',
        ':hover': {
            border: '1px solid #7a56d7',
            color: '#333'
        },
    })
}
class CustomerRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setSelectedDate: new Date('2014-08-18T21:11:54'),
            customerName: "",
            businessName: "",
            contact: "",
            businessNumber: "지역선택",
            sectors: "",
            all: "",
            AllOne: "지역선택",
            AllTwo: "지역선택",
            detailedAddress: "",
            zipCode: "",
            aboutUs: "",
            website: "",
            band: "",
            youtube: "",
            facebook: "",
            cacaoStory: "",
            instagram: "",
            errors: [],
            isfocused: false,
            selectedDay: "선택하세요",
            openingDays: [],
            regularHoliday: { type: "매월", week: "선택하지 않음", day: "월요일" },
            checkedA: false, checkedB: false, checkedC: false,
            isFormSubmited: false
        }
        this.onInputchange = this.onInputchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addTextBoxe = this.addTextBoxe.bind(this)
        this.onRegularDaySelect = this.onRegularDaySelect.bind(this);

        this.onHandleFormChange = this.onHandleFormChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.onCustomerDropdownSelect = this.onCustomerDropdownSelect.bind(this);
        this.onDaySelect = this.onDaySelect.bind(this);
        this.handleTimeClose = this.handleTimeClose.bind(this);
    }

    onRegularDaySelect(item, index) {
        debugger
        const { regularHoliday } = this.state;

        if (index == 1)
            regularHoliday["week"] = item;
        else if (index == 2)
            regularHoliday["day"] = item;

        this.setState({ regularHoliday });
    }

    handleTimeClose(index) {
        const { openingDays } = this.state;
        openingDays.splice(index, 1);
        this.setState({ openingDays });
    }
    addTextBoxe() {

        let timepicker1 = $("#timepicker1").val();
        let timepicker2 = $("#timepicker2").val();
        const { openingDays, selectedDay } = this.state;
        if (timepicker1 && timepicker2 && selectedDay != "Select") {
            if (openingDays.length <= 4) {
                openingDays.push({
                    openingDay: selectedDay,
                    openingTime: timepicker1,
                    closingTime: timepicker2
                })
                this.setState({
                    openingDays,
                    selectedDay: "선택하세요"
                })
                $("#timepicker1").val("");
                $("#timepicker2").val("");
            } else {
                alert("4일까지만 표기 가능합니다.");
            }
        }
        else {
            alert("시간과 요일을 선택해야 합니다.");
        }


    }
    onInputchange(event) {
        const { name = '', value = '' } = event.target;
        const { errors } = this.state;
        errors[name] = ''
        this.setState({
            [name]: value,
            errors


        })
        // const isCheckbox = event.target.type === "Checkbox";
        // this.setState({
        //     [event.target.name]:isCheckbox ? event.target.checked : event.target.value
        // })
        // this.setState({
        //     [event.target.name]:event.target.value
        // })
    }
    handleChange(selectedOption) {
        const { errors } = this.state;
        errors['AllOne'] = '';
        this.setState({ AllOne: selectedOption, errors });
        console.log(`Option selected:`, selectedOption);


    }
    handleSelectChange(e) {
        this.setState({ AllOne: e.target });
    }
    handleDateChange(date) {
        let { setSelectedDate } = { ...this.state };
        setSelectedDate = date;
        this.setState({ setSelectedDate }, () => {

            let a = this.state.setSelectedDate;
        })
    }
    validate() {

        const { errors } = this.state;
        if (!this.state.customerName) {
            errors['customerName'] = "필수 사항입니다.";
            // customerNameError="This field is required"
        }
        if (!this.state.businessName) {
            errors['businessName'] = "필수 사항입니다."
        }
        if (!this.state.contact) {
            errors['contact'] = "필수 사항입니다."
        }
        if (!this.state.AllOne) {
            errors['AllOne'] = "필수 사항입니다."
        }
        this.setState({
            errors
        })

    }
    handleSubmit(e) {
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.setState(initialValues)
        }
    }

    onCustomerDropdownSelect(stateObj, value) {
        this.setState({
            ...this.state,
            [stateObj]: value
        })
    }

    onDaySelect(obj) {

        let openingDays = this.state.openingDays;
        if (openingDays.filter(x => x.openingDay == obj).length > 0) {
            alert("이미 선택하셨습니다." + obj);

        } else {
            this.setState({ selectedDay: obj });

        }
    }

    onHandleFormChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value,
        })
    }
    handleCheckboxChange(evt) {
        const checked = evt.target.checked;
        this.setState({
            ...this.state,
            [evt.target.name]: checked,
        })
    }

    onFormSubmit() {
        this.setState({
            isFormSubmited: true
        })
    }
    render() {
        const { customerName, businessName, contact, businessNumber, sectors, all, AllOne, AllTwo, detailedAddress, zipCode, aboutUs, website, checkedA, checkedB, checkedC,
            band, youtube, facebook, cacaoStory, instagram, dynamicDropdown, customerNameError, regularHoliday,
            errors, businessNameError, contactError, AllOneError, isfocused, isFormSubmited, selectedDay } = this.state;
        return (
            <div id="customer-register-page">
                <div>
                    <div className="customer-register-container">
                        <div className="customer-register-main">
                            <div className="customer-register-img">
                                <Mainlogo logo={Logo} logoTitleText="Tokyo" logoMainText="정글뉴스" logoSubText="업소등록"></Mainlogo>
                                <div className="ad-text">
                                    <div className="div-text-1">회사 홈페이지를 무료로 링크하고, </div>

                                    <div className="div-text-2">필요시 월 3,000원에 홈페이지도 만들고 무료로 호스팅하세요!.</div>
                                </div>
                            </div>
                            <div className="customer-register-content">
                                <div className="row">
                                    <div className="col-md-12"><h4 className="customer-title">기본 정보</h4></div>
                                    <div className="col-md-6 register-left">
                                        <div className="img-upload-div" >
                                            <div className="upload-box">
                                                <div className=" imgUp position-reletive" id="img-upload-1">
                                                    <div className="imagePreview" style={{ backgroundPosition: "center center" }}>
                                                    </div>
                                                    <input type="file" className="uploadFile img file-img cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="map-div">
                                            <div className="map-box">
                                                <img src={MapImage} className="map-img"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 register-right">
                                        <div className="row ">

                                            <div className="col-md-12">
                                                <div className="mat-input-icon-div">
                                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : customerName ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                                </div>
                                                <div className="mat-input-textfield-div">
                                                    <TextField
                                                        name="customerName"
                                                        id="customerName"
                                                        label="고객명 "
                                                        className="fullWidth"
                                                        defaultValue={customerName}
                                                        onChange={this.onHandleFormChange}
                                                        error={!isFormSubmited ? false : customerName ? false : true}
                                                        required
                                                    />
                                                </div>
                                            </div>


                                        </div>
                                        <div className="row ">

                                            <div className="col-md-12">
                                                <div className="mat-input-icon-div">
                                                    <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : businessName ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon mat-input-icon  bg-danger border-danger color-white"}></span>
                                                </div>
                                                <div className="mat-input-textfield-div">
                                                    <TextField
                                                        name="businessName"
                                                        id="businessName"
                                                        label="사업체 명"
                                                        className="fullWidth"
                                                        defaultValue={businessName}
                                                        onChange={this.onHandleFormChange}
                                                        error={!isFormSubmited ? false : businessName ? false : true}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row ">

                                            <div className="col-md-12">
                                                <div className="mat-input-icon-div">
                                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : contact ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree mat-input-icon  bg-danger border-danger color-white"}></span>
                                                </div>
                                                <div className="mat-input-textfield-div">
                                                    <TextField
                                                        name="contact"
                                                        id="contact"
                                                        label="연락처"
                                                        className="fullWidth"
                                                        defaultValue={contact}
                                                        onChange={this.onHandleFormChange}
                                                        error={!isFormSubmited ? false : contact ? false : true}
                                                        required

                                                    />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row ">

                                            <div className="col-md-12">
                                                <div className="mat-input-icon-div">
                                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : AllOne ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree mat-input-icon  bg-danger border-danger color-white"}></span>
                                                </div>
                                                <div className="mat-input-textfield-div">
                                                    <div className="dropdown customer-ragister-dropdown">
                                                        <button type="button" id="dd_drop_3" className="btn select-trans-btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                            {AllOne}
                                                            <i className="fa fa-angle-down " aria-hidden="true" />
                                                        </button>
                                                        <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                            <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onCustomerDropdownSelect("AllOne", "일본")}>일본</option>
                                                            <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onCustomerDropdownSelect("AllOne", "인도네시아")}>인도네시아</option>
                                                            <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onCustomerDropdownSelect("AllOne", "베트남")}>베트남</option>
                                                            <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onCustomerDropdownSelect("AllOne", "싱가폴")}>싱가폴</option>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">

                                            <div className="col-md-12">
                                                <div className="mat-input-icon-div">
                                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : all ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                                </div>
                                                <div className="mat-input-textfield-div">

                                                    <FormControl className="fullWidth">
                                                        <InputLabel htmlFor="all">전체</InputLabel>
                                                        <Input
                                                            name="all"
                                                            id="all"
                                                            defaultValue={all}
                                                            onChange={this.onHandleFormChange}
                                                            error={!isFormSubmited ? false : all ? false : true}
                                                            required
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Button variant="contained" color="primary" size="small">검색</Button>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="col-md-12">
                                                <div className="mat-input-icon-div">
                                                    <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : detailedAddress ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon mat-input-icon  bg-danger border-danger color-white"}></span>
                                                </div>
                                                <div className="mat-input-textfield-div">
                                                    <TextField
                                                        name="detailedAddress"
                                                        id="detailedAddress"
                                                        label="상세주소"
                                                        className="fullWidth"
                                                        defaultValue={detailedAddress}
                                                        onChange={this.onHandleFormChange}
                                                        error={!isFormSubmited ? false : detailedAddress ? false : true}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row ">

                                            <div className="col-md-12">
                                                <div className="mat-input-icon-div">
                                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : zipCode ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree mat-input-icon  bg-danger border-danger color-white"}></span>
                                                </div>
                                                <div className="mat-input-textfield-div">
                                                    <TextField
                                                        name="zipCode"
                                                        id="zipCode"
                                                        label="우편번호"
                                                        className="fullWidth"
                                                        defaultValue={zipCode}
                                                        onChange={this.onHandleFormChange}
                                                        error={!isFormSubmited ? false : zipCode ? false : true}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row second-section">
                                    <div className="main-text-box">
                                        <span className="text-data">영업시간</span>
                                    </div>
                                    <div className="main-input-box" >
                                        {
                                            this.state.openingDays.length > 0 &&
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Day </th>
                                                        <th>Opening Time</th>
                                                        <th>Closing Time</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.openingDays.map((x, index) =>
                                                        <tr>
                                                            <td>{x.openingDay}</td>
                                                            <td>{x.openingTime}</td>
                                                            <td>{x.closingTime}</td>
                                                            <td> <span onClick={() => this.handleTimeClose(index)} style={{ cursor: "pointer" }}> <Close /> </span>  </td>
                                                        </tr>

                                                    )}

                                                </tbody>
                                            </table>
                                        }
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="dropdown customer-ragister-dropdown">
                                                    <button type="button" id="dd_drop_3" className="btn select-trans-btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                        {selectedDay}
                                                        <i className="fa fa-angle-down " aria-hidden="true" />
                                                    </button>

                                                    <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                        <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onDaySelect("평일")}>평일</option>
                                                        <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onDaySelect("주말")}>주말</option>
                                                        <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onDaySelect("공휴일")}>공휴일</option>
                                                        <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onDaySelect("기타")}>기타</option>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <input type="text" id="timepicker1" className="form-control" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="frm-to-time-arrow">~</span>
                                                <input type="text" id="timepicker2" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <span className="dropdown-text cursor-pointer" onClick={this.addTextBoxe}>+  시간대 추가</span>


                                    <div className="row second-section">
                                        <div className="main-text-box">
                                            <span className="text-data">정기휴일</span>
                                        </div>
                                        <div className="main-input-box" >
                                            <div className="row regularday-row">
                                                <div className="col-md-4">
                                                    <div className="dropdown customer-ragister-dropdown">
                                                        <button type="button" id="dd_drop_3" className="btn select-trans-btn custom-main-div-dropdown-menu-button">
                                                            {regularHoliday.type}
                                                            {/* <i className="fa fa-angle-down " aria-hidden="true" /> */}
                                                        </button>

                                                        {/* <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                    <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onDaySelect("매주")}>매주</option>
                                                    <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onDaySelect("매월")}>매월</option>
                                                    <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onDaySelect("매년")}>매년</option>
                                                </div> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="dropdown customer-ragister-dropdown">
                                                        <button type="button" id="dd_drop_3" className="btn select-trans-btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                            {regularHoliday.week}
                                                            <i className="fa fa-angle-down " aria-hidden="true" />
                                                        </button>

                                                        <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("선택하지 않음", 1)}>선택하지 않음</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("첫째주", 1)}>첫째주</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("둘째주", 1)}>둘째주</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("셋째주", 1)}>셋째주</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("마지막주", 1)}>마지막주</option>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="dropdown customer-ragister-dropdown">
                                                        <button type="button" id="dd_drop_3" className="btn select-trans-btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                            {regularHoliday.day}
                                                            <i className="fa fa-angle-down " aria-hidden="true" />
                                                        </button>

                                                        <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("월요일", 2)}>월요일</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("화요일", 2)}>화요일</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("수요일", 2)}>수요일</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("목요일", 2)}>목요일</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("금요일", 2)}>금요일</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("토요일", 2)}>토요일</option>
                                                            <option className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onRegularDaySelect("일요일", 2)}>일요일</option>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <span className="dropdown-text cursor-pointer">+  휴일추가</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row third-section">
                            <div className="col-md-12">
                                <div className="mat-input-icon-div">
                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : aboutUs ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div" >
                                    <TextField
                                        name="website"
                                        id="website"
                                        label="휴일 관련 사항을 적어주세요"
                                        className="fullWidth"
                                        defaultValue={website}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : website ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row third-section" >
                            <div className="col-md-12 heading-div">
                                <span className="title-text">유료옵션 정보 [1]</span>
                            </div>
                            <div className="col-md-12">
                                <div className="mat-input-icon-div">
                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : aboutUs ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="aboutUs"
                                        id="aboutUs"
                                        label="회사 소개"
                                        className="fullWidth"
                                        defaultValue={aboutUs}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : aboutUs ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="mat-input-icon-div">
                                    <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : website ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="website"
                                        id="website"
                                        label="Website"
                                        className="fullWidth"
                                        defaultValue={website}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : website ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="mat-input-icon-div">
                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : band ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="band"
                                        id="band"
                                        label="Band"
                                        className="fullWidth"
                                        defaultValue={band}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : band ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="mat-input-icon-div">
                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : youtube ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="youtube"
                                        id="youtube"
                                        label="Youtube"
                                        className="fullWidth"
                                        defaultValue={youtube}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : youtube ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="mat-input-icon-div">
                                    <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : facebook ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="facebook"
                                        id="facebook"
                                        label="Facebook"
                                        className="fullWidth"
                                        defaultValue={facebook}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : facebook ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="mat-input-icon-div">
                                    <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : cacaoStory ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="cacaoStory"
                                        id="cacaoStory"
                                        label="카카오스토리"
                                        className="fullWidth"
                                        defaultValue={cacaoStory}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : cacaoStory ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="mat-input-icon-div">
                                    <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : instagram ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="instagram"
                                        id="instagram"
                                        label="Instagram"
                                        className="fullWidth"
                                        defaultValue={instagram}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : instagram ? false : true}
                                        required
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="row fourth-section">
                            <div className="col-md-12">
                                <div className="heading-div">
                                    <span className="title-text">유료옵션 정보 [2]</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content-main-text">동영상 및 추가 이미지 업로드</div>
                                <div className="content-subtext">- 동영상은 5초 이하의 영상만 업로드 가능합니다.</div>
                            </div>
                            <div className="col-md-8">
                                <div className="imgUp mar-0" id="vid-upload-1">
                                    <div className="imagePreview-video" style={{ backgroundPosition: "center center" }}>

                                    </div>
                                    <input type="file" className="uploadFile img file-img cursor-pointer" />

                                </div>
                            </div>
                            <div className="col-md-12 fourth-imgup">
                                <div className="row " >
                                    <div className="col-md-4 pad-r-5">
                                        <div className=" imgUp " id="img-upload-2">
                                            <div className="imagePreview" style={{ backgroundPosition: "center center" }}></div>
                                            <input type="file" className="uploadFile img file-img cursor-pointer cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 pad-l-r-5">
                                        <div className=" imgUp" id="img-upload-3">
                                            <div className="imagePreview imgp-1" style={{ backgroundPosition: "center center " }}></div>
                                            <input type="file" className="uploadFile img file-img cursor-pointer" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 pad-l-5 ">
                                        <div className=" imgUp" id="img-upload-4">
                                            <div className="imagePreview imgp-2" style={{ backgroundPosition: "center center" }}></div>
                                            <input type="file" className="uploadFile img file-img cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row fifth-section">
                            <div className="col-md-6">

                                <FormGroup >
                                    <FormControlLabel
                                        className="mar-0"
                                        control={
                                            <Checkbox
                                                name="checkedA"
                                                checked={checkedA}
                                                onChange={this.handleCheckboxChange}
                                                value={checkedA}
                                                color="primary"
                                                inputProps={{
                                                    'aria-label': 'secondary checkbox',
                                                }}
                                            />
                                        }
                                        label="개별 홈페이지를 신청하겠습니다."
                                    />
                                    <FormControlLabel
                                        className="mar-0"
                                        control={
                                            <Checkbox
                                                name="checkedB"
                                                checked={checkedB}
                                                onChange={this.handleCheckboxChange}
                                                value={checkedB}
                                                color="primary"
                                                inputProps={{
                                                    'aria-label': 'secondary checkbox',
                                                }}
                                            />
                                        }
                                        label="이용약관에 동의합니다."
                                    />
                                    <FormControlLabel
                                        className="mar-0"
                                        control={
                                            <Checkbox
                                                name="checkedC"
                                                checked={checkedC}
                                                onChange={this.handleCheckboxChange}
                                                value={checkedC}
                                                color="primary"
                                                inputProps={{
                                                    'aria-label': 'secondary checkbox',
                                                }}
                                            />
                                        }

                                        label="포인트 카드 시스템을 사용하겠습니다."
                                    />
                                </FormGroup>
                            </div>
                            <div className="col-md-6">
                                <Button variant="contained" color="primary" size="large" className="btn-blue my-register-submit-btn cust-input-button-next" onClick={this.onFormSubmit}>등록하기</Button>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div >
        )
    }
}
export default CustomerRegister;