import React, { Component } from 'react';
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import BlogListLogo from "./../../assets/img/blog-detail-logo-1.jpg";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", email: "", title: "", JungleNews: "", message: "",
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
        let { name, email, title, JungleNews, message, isFormSubmited } = this.state;
        return (
            <div id="cafe-creation-page">
                <Mainlogo logo={BlogListLogo} logoTitleText="Global" logoMainText="정글뉴스" logoSubText="통합 안내" ></Mainlogo>
                <div className="contact-us-main-section">
                    <div className="ad-text">
                        <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                        <div className="div-text-2">정글뉴스, 정글토크, 정글 포인트, 정글TV등 통합 안내메일입니다.</div>
                    </div>
                    <div className="context-us-container">
                        <div className="contact-us-section">
                            <div className="container">
                                {/* <div className="col-md-12">
                                    <div className="heading-text">Contact Us</div>
                                </div> */}
                                {/* <div className="col-md-12">
                                    <div className=" form-group form-cust-2 has-error">
                                        <div className="col-md-12">
                                            <div class="">
                                                <div className="dropdown">
                                                    <button type="button" id="dd_drop_3" className="dropdown-toggle" data-toggle="dropdown">
                                                        <span className="jungle-news-text">Jungle News</span>
                                                        <i className="fa fa-angle-down" aria-hidden="true" />
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a class="dropdown-item" href="#">전체 1</a>
                                                        <a class="dropdown-item" href="#">전체 1</a>
                                                        <a class="dropdown-item" href="#">전체 1</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="row form-group form-cust-3 has-error">
                                        <div className="col-md-12">
                                            <div className="mat-input-icon-div">
                                                <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : JungleNews ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon  mat-input-icon  bg-danger border-danger color-white"}></span>
                                            </div>
                                            <div className="mat-input-textfield-div">
                                                <FormControl className="fullWidth" error={!isFormSubmited ? false : JungleNews ? false : true}>
                                                    <InputLabel htmlFor="JungleNews-simple">Jungle News</InputLabel>
                                                    <Select
                                                        value={JungleNews}
                                                        native={true}
                                                        className="form-control"
                                                        onChange={this.onHandleFormChange}
                                                        inputProps={{
                                                            name: 'JungleNews',
                                                            id: 'JungleNews-simple',
                                                        }}
                                                    >
                                                        <option value={1}>전체 1</option>
                                                        <option value={2}>전체 2</option>
                                                        <option value={3}>전체 3</option>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            {/* <div class="form-set-1">
                                                <label class="control-label label-1" htmlFor="Label1">*  Name</label>
                                                <input class="form-control form-control-cust-1" id="Label1" type="text" required placeholder="* Name" />
                                            </div> */}
                                            <div className="mat-input-icon-div">
                                                <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : name ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                            </div>
                                            <div className="mat-input-textfield-div">
                                                <TextField
                                                    name="name"
                                                    id="isName"
                                                    label="Name"
                                                    className="fullWidth"
                                                    defaultValue={name}
                                                    onChange={this.onHandleFormChange}
                                                    error={!isFormSubmited ? false : name ? false : true}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            {/* <div class="form-set-1">
                                                <label class="control-label label-2" htmlFor="Label1">*  Email</label>
                                                <input class="form-control form-control-cust-1" id="Label1" type="text" required placeholder="* Email" />
                                            </div> */}
                                            <div className="mat-input-icon-div">
                                                <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : email ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon mat-input-icon  bg-danger border-danger color-white"}></span>
                                            </div>
                                            <div className="mat-input-textfield-div">
                                                <TextField
                                                    name="email"
                                                    id="isEmail"
                                                    label="Email"
                                                    className="fullWidth"
                                                    defaultValue={email}
                                                    onChange={this.onHandleFormChange}
                                                    error={!isFormSubmited ? false : email ? false : true}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            {/* <div class="form-set-1">
                                                <label class="control-label label-3" htmlFor="Label1">*  Title</label>
                                                <input class="form-control form-control-cust-1" id="Label1" type="text" required placeholder="* Title" />
                                            </div> */}
                                            <div className="mat-input-icon-div">
                                                <span class={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : title ? "icon-coconut-tree  mat-input-icon  " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                            </div>
                                            <div className="mat-input-textfield-div">
                                                <TextField
                                                    name="title"
                                                    id="isTitle"
                                                    label="Title"
                                                    className="fullWidth"
                                                    defaultValue={title}
                                                    onChange={this.onHandleFormChange}
                                                    error={!isFormSubmited ? false : title ? false : true}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            {/* <div class="textare-form">
                                                <label class="control-label label-4" htmlFor="Label1">* Message</label>
                                                <textarea class="form-control cust-textarea" id="Label1" type="text" required />
                                            </div> */}
                                            <div className="mat-input-icon-div">
                                                <span class={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : message ? "icon-elephent-icon  mat-input-icon  " : "icon-elephent-icon  mat-input-icon  bg-danger border-danger color-white"}></span>
                                            </div>
                                            <div className="mat-input-textfield-div mar-t-5">
                                                <TextField
                                                    id="isMessage"
                                                    name="message"
                                                    label="Message"
                                                    className="fullWidth"
                                                    multiline
                                                    rowsMax={8}
                                                    rows={6}
                                                    defaultValue={message}
                                                    onChange={this.onHandleFormChange}
                                                    error={!isFormSubmited ? false : message ? false : true}
                                                    variant="outlined"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <Button variant="contained" color="primary" size="large" className="btn-blue" onClick={this.onFormSubmit}>Send</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div >
            </div >
        );
    }
}

export default ContactUs;