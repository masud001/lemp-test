import React, { Component } from 'react';
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import Footer from "../../components/FooterComponent/Footer.jsx";
import CafeIconsModal from "../../containers/CafePage/Modal/CafeIconsModal.jsx";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { SportsBasketball,SportsCricket,SportsBaseball } from '@material-ui/icons';

class CreateCafeBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", JungleNews: "",
            cafeModalOpen: false,
            checkedA: false, checkedB: false, checkedC: false,
            isFormSubmited: false,
            selectedIcon: ""
        }
        this.onHandleFormChange = this.onHandleFormChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleCafeModalClose = this.handleCafeModalClose.bind(this);
        this.showIconModal = this.showIconModal.bind(this);
        this.handleSelectedIcon = this.handleSelectedIcon.bind(this);
    }

    renderIcon() {
        const {selectedIcon} = this.state;
        switch (selectedIcon) {
            case "SportsBaseball": return <SportsBaseball/>
            case "SportsBasketball": return <SportsBasketball/>
            case "SportsCricket": return <SportsCricket/>
        }
    }

    handleSelectedIcon(icon) {
        this.setState({selectedIcon: icon, cafeModalOpen:false});
    }

    handleCafeModalClose() {
        this.setState({cafeModalOpen: false});
    }

    showIconModal() {
        this.setState({cafeModalOpen: true});

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
        let { name, JungleNews, checkedA, checkedB, checkedC, isFormSubmited } = this.state;
        return (
            <div id="create-cafe-blog-page">
                <Mainlogo logo={BlogListLogo} logoTitleText="Tokyo" logoMainText="카페블로그" logoSubText="만들기" ></Mainlogo>
                <div className="create-cafe-blog-container">
                    <div className="ad-text">
                        <div className="div-text-1">정글뉴스에 오신 여러분을 환영합니다!</div>
                        <div className="div-text-2">왼쪽의 약관 동의를 체크하신 후 우측의 버튼을 통해서 가입하실 수있습니다.</div>
                    </div>
                    <div className="customer-register-container">

                        <div className="row create-cafe-blog-section">
                            <div className="col-md-12 ">
                                <div className="heading-div">
                                    <span className="title-text">엄마 카페</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                {/* <div className="row form-group form-cust-1 has-error">
                                        <div className="left-content">
                                            <div className="text-lbl-1">
                                                <label className="control-label" htmlFor="Label1">타이틀</label>
                                            </div>
                                        </div>
                                        <div className="right-content">
                                            <input className="form-control form-control-cust-1" id="Label1" type="text" required />
                                        </div>
                                    </div> */}
                                <div className="mat-input-icon-div">
                                    <span className={!isFormSubmited ? "icon-coconut-tree  mat-input-icon " : name ? "icon-coconut-tree  mat-input-icon " : "icon-coconut-tree  mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <TextField
                                        name="name"
                                        id="isName"
                                        label="타이틀"
                                        className="fullWidth"
                                        defaultValue={name}
                                        onChange={this.onHandleFormChange}
                                        error={!isFormSubmited ? false : name ? false : true}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mat-input-icon-div">
                                    <span className={!isFormSubmited ? "icon-elephent-icon  mat-input-icon " : JungleNews ? "icon-elephent-icon  mat-input-icon " : "icon-elephent-icon  mat-input-icon  bg-danger border-danger color-white"}></span>
                                </div>
                                <div className="mat-input-textfield-div">
                                    <FormControl className="fullWidth" error={!isFormSubmited ? false : JungleNews ? false : true}>
                                        <InputLabel htmlFor="JungleNews-simple">Jungle News</InputLabel>
                                        <Select
                                            value={JungleNews}
                                            
                                            onChange={this.onHandleFormChange}
                                            inputProps={{
                                                name: 'JungleNews',
                                                id: 'JungleNews-simple',
                                            }}
                                        >
                                            <MenuItem value={1}>전체 1</MenuItem>
                                            <MenuItem value={2}>전체 2</MenuItem>
                                            <MenuItem value={3}>전체 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="right-part ">
                            <label className="control-label input-bottom-text" style={{marginRight:"20px"}} htmlFor="Label1">BLOG를 상징하는 ICON을 설정하세요.</label>

                                    <Button variant="contained" color="primary" size="small" className="ad-button" onClick={()=> this.showIconModal()} >ICON선택</Button>                                </div>
                            </div>
                            {
                                        this.renderIcon()
                            }
                            <div className="col-md-12 ">
                                {/* <div className="custome-control-panel">
                                        <div className=" pad-l-r-0 form-control-lg custom-checkbox-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label width-1" for="customCheck1"><span className="custom-checkbox-text-1">회원삭제</span></label>
                                        </div>
                                        <div className="pad-l-r-0 custom-control form-control-lg custom-checkbox-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label width-2" for="customCheck2"><span className="custom-checkbox-text-2">블로그 삭제</span></label>
                                        </div>
                                        <div className="pad-l-r-0 custom-control form-control-lg custom-checkbox-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                            <label className="custom-control-label" for="customCheck3"><span className="custom-checkbox-text-3">공지사항 등록 및 삭제</span></label>
                                        </div>
                                    </div> */}
                                <FormGroup row>
                                    <FormControlLabel
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
                                        label="회원삭제"
                                    />
                                    <FormControlLabel
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
                                        label="블로그 삭제"
                                    />
                                    <FormControlLabel
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
                                        className="mar-r-0"
                                        label="공지사항 등록 및 삭제"
                                    />
                                </FormGroup>

                            </div>
                            <div className="col-md-12 ">
                                <label className="control-label input-bottom-text" htmlFor="Label1">최대 3개의 블로그까지 형성 할수 있습니다.</label>
                            </div>
                            <div className="col-md-12 ">
                                <div className="right-part">
                                    <Button variant="contained" color="primary" size="large" className="btn-blue" onClick={this.onFormSubmit}>등록</Button>
                                    {/* <button className="btn-blue my-btn cust-input-button-next">등록</button> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <CafeIconsModal isCafeModalOpen={this.state.cafeModalOpen} onSelectedIcons={(selectedIcon)=>this.handleSelectedIcon(selectedIcon)} onCafeModalClose={this.handleCafeModalClose} ></CafeIconsModal>
                
                <Footer></Footer>
            </div>

        );
    }
}
export default CreateCafeBlog;