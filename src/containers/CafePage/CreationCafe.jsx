import React, { Component } from 'react';;
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Input, InputAdornment, FormControlLabel, FormGroup, Checkbox, Radio, RadioGroup } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Logo from "./../../assets/img/customer-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
class CreationCafe extends Component {
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
        this.setState({
            isFormSubmited: true
        })
    }
    render() {
        const { customerName, contact, businessNumber, btnInput1, btnInput2, btnInput3, checkedA, checkedB, checkedC, detailedAddress, zipCode, isFormSubmited, radio } = this.state;
        return (
            <div id="creation-cafe-register-page">
                <div>
                    <div className="creation-cafe-container">
                        <div className="creation-cafe-main">
                            <div className="creation-cafe-img">
                                <Mainlogo logo={Logo} logoTitleText="Tokyo" logoMainText="정글장터" logoSubText="카페 만들기" ></Mainlogo>
                                <div className="ad-text">
                                    <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                                    <div className="div-text-2">정글뉴스에 오신 여러분을 환영합니다!</div>
                                    <div className="div-text-2">Hello World</div>
                                </div>
                            </div>
                            <div className="creation-cafe-content">
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
                                            <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : businessNumber ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon  mat-input-icon  bg-danger border-danger color-white"}></span>
                                        </div>
                                        <div className="mat-input-textfield-div">
                                            <div className="dropdown creation-cafe-dropdown">
                                                <button type="button" id="dd_drop_3" className="btn select-trans-btn custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                                    {businessNumber}
                                                    <i className="fa fa-angle-down " aria-hidden="true" />
                                                </button>
                                                <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                    <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onCustomerDropdownSelect("businessNumber", "지역선택")} >지역선택</option>
                                                    <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onCustomerDropdownSelect("businessNumber", "일본")}>일본</option>
                                                    <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onCustomerDropdownSelect("businessNumber", "인도네시아")}>인도네시아</option>
                                                </div>
                                            </div>
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
                                            <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : btnInput1 ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                        </div>
                                        <div className="mat-input-textfield-div" error={!isFormSubmited ? false : btnInput1 ? false : true}>
                                            <FormControl className="fullWidth">
                                                <InputLabel htmlFor="btnInput1">전체</InputLabel>
                                                <Input
                                                    name="btnInput1"
                                                    id="btnInput1"
                                                    defaultValue={btnInput1}
                                                    onChange={this.onHandleFormChange}
                                                    required
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <Button variant="contained" color="primary" className="btn-blue mat-input-aftert-btn">검색하기</Button>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="mat-input-icon-div"></div>
                                        <div className="mat-input-textfield-div">
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                                </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="mat-input-icon-div"></div>
                                        <div className="mat-input-textfield-div">
                                            <FormGroup row>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox value={checkedA}
                                                            checked={checkedA}
                                                            name="checkedA"
                                                            onClick={this.OnCheckboxSelectChange}
                                                            className="creation-cafe-checkbox-select" />
                                                    }
                                                    label="checkedA"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            value={checkedB} checked={checkedB}
                                                            name="checkedB"
                                                            onClick={this.OnCheckboxSelectChange}
                                                            className="creation-cafe-checkbox-select"
                                                        />
                                                    }
                                                    label="checkedB"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            value={checkedC} checked={checkedC}
                                                            name="checkedC"
                                                            onClick={this.OnCheckboxSelectChange}
                                                            className="creation-cafe-checkbox-select"
                                                        />
                                                    }
                                                    label="checkedC"
                                                />

                                            </FormGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="mat-input-icon-div">
                                            <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : btnInput2 ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                        </div>
                                        <div className="mat-input-textfield-div">
                                            <FormControl className="fullWidth" error={!isFormSubmited ? false : btnInput2 ? false : true}>
                                                <InputLabel htmlFor="btnInput2">전체</InputLabel>
                                                <Input
                                                    name="btnInput2"
                                                    id="btnInput2"
                                                    defaultValue={btnInput2}
                                                    onChange={this.onHandleFormChange}
                                                    required
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <Button variant="contained" color="primary" className="btn-blue mat-input-aftert-btn">검색하기</Button>
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
                                                multiline
                                                rowsMax="4"
                                                rows="4"
                                                margin="normal"
                                                variant="outlined"


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
                                                multiline
                                                rowsMax="6"
                                                rows="6"
                                                margin="normal"
                                                variant="outlined"

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-12 mar-top-15">
                                        <div className="mat-input-icon-div"></div>
                                        <div className="mat-input-textfield-div">
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="position" name="radio" id="radio" value={radio} onChange={this.onHandleFormChange} row>
                                                    <FormControlLabel
                                                        value="radio1"
                                                        control={<Radio className="creation-cafe-radio-select" />}
                                                        label="radio1"
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        value="radio2"
                                                        control={<Radio className="creation-cafe-radio-select" />}
                                                        label="radio2"
                                                        labelPlacement="end"
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mat-input-icon-div">
                                            <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : btnInput3 ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                        </div>
                                        <div className="mat-input-textfield-div">
                                            <FormControl className="fullWidth" error={!isFormSubmited ? false : btnInput3 ? false : true}>
                                                <InputLabel htmlFor="btnInput3">전체</InputLabel>
                                                <Input
                                                    name="btnInput3"
                                                    id="btnInput3"
                                                    defaultValue={btnInput3}
                                                    onChange={this.onHandleFormChange}
                                                    required
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <Button variant="contained" color="primary" className="btn-blue mat-input-aftert-btn">검색하기</Button>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="tooltip-div">
                                            <HelpIcon className="tooltip-icon" />
                                            <div className="tooltip-content">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-12">
                                        <div className="after-form-info">
                                            <div className="botom-alert-info-div">
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                </div>
                                            <div className="button-div">
                                                <Button variant="contained" color="primary" size="large" className="btn-blue my-register-submit-btn cust-input-button-next" onClick={this.onFormSubmit}>등록하기</Button>
                                            </div>
                                            <div className="botom-info-div">
                                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
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
export default CreationCafe;