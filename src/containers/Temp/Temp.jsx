import React, { Component } from 'react';
import Footer from "../../components/FooterComponent/Footer.jsx";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import BlogListLogo from "./../../assets/img/blog-detail-logo-1.jpg";
import { TextField, Grid, Button } from '@material-ui/core';
class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "", webSite: "", band: "", youtube: "", facebook: "", story: "", instagram: "",
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
        let { company, webSite, band, youtube, facebook, story, instagram, isFormSubmited } = this.state;
        return (
            <div id="temp-page">
                <Mainlogo logo={BlogListLogo} logoTitleText="Global" logoMainText="정글뉴스" logoSubText="통합 안내" ></Mainlogo>
                <div className="temp-main-section">
                    <div className="ad-text">
                        <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                        <div className="div-text-2">정글뉴스, 정글토크, 정글 포인트, 정글TV등 통합 안내메일입니다.</div>
                    </div>
                    <div className="temp-container">
                        <div className="row ">
                            <div className="col-md-12 heading-div">
                                <span className="title-text">유료옵션 정보 [1]</span>
                            </div>
                            <div className="col-md-12">
                                <div className="mat-input-icon-div">
                                    <span className={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : company ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="company"
                                        id="isCompany"
                                        label="회사 소개"
                                        className="fullWidth"
                                        defaultValue={company}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : company ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mat-input-icon-div">
                                    <span className={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : webSite ? "icon-elephent-icon  mat-input-icon  " : "icon-elephent-icon  mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="webSite"
                                        id="isWebSite"
                                        label="WebSite"
                                        className="fullWidth"
                                        defaultValue={webSite}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : webSite ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mat-input-icon-div">
                                    <span className={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : band ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>

                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="band"
                                        id="isBand"
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
                                    <span className={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : youtube ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>

                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="youtube"
                                        id="isYoutube"
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
                                    <span className={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : facebook ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon  mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="facebook"
                                        id="isFacebook"
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
                                    <span className={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : story ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon  mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="story"
                                        id="isStory"
                                        label="카카오스토리"
                                        className="fullWidth"
                                        defaultValue={story}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : story ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mat-input-icon-div">
                                    <span className={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : instagram ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>

                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="instagram"
                                        id="isInstagram"
                                        label="Instagram"
                                        className="fullWidth"
                                        defaultValue={instagram}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : instagram ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-12 ">
                                <Button variant="contained" color="primary" size="large" onClick={this.onFormSubmit} className="btn-blue ">
                                    Send
                                </Button>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div >
            </div >
        );
    }
}

export default Temp;