import React, { Component } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Footer from "../../components/FooterComponent/Footer.jsx";
import BlogDetailLogo from "./../../assets/img/blog-detail-logo-1.jpg";
import UserIcon from "./../../assets/img/user-icon.png";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import Pagenation from "../../components/UtilityComponent/Pagenation.jsx";
import BlogListLogo from "./../../assets/img/blog-detail-logo-1.jpg";
import BlogBox from "./../../containers/BlogPage/BlogBox.jsx";
import Pagination from "../../components/PaginationComponent/Pagination.jsx";
import CKEditor from "react-ckeditor-component";
let editorConfig = {

    removeButtons: 'Source,Save,NewPage,Preview,Print,Cut,Templates,Copy,Paste,PasteText,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,TextField,Textarea,Select,Button,ImageButton,HiddenField,Underline,JustifyRight,JustifyLeft,JustifyCenter,Blockquote,CreateDiv,Outdent,Indent,NumberedList,JustifyBlock,BidiLtr,BidiRtl,Language,Unlink,Anchor,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,BGColor,Maximize,ShowBlocks,About,Font,Format,FontSize,RemoveFormat,CopyFormatting,Strike,Subscript,Superscript,Radio,Checkbox,PasteFromWord,TextColor',

};
class BlogDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MainDropDown1: 1, MainDropDown2: 1
        };
        this.onHandleFormChange = this.onHandleFormChange.bind(this);
    }

    // componentDidMount() {
    //     if(this.props.location.state.selectedBlog) {
    //         this.setState({selectedBlog: this.props.location.state.selectedBlog})
    //     }
    // }

    onHandleFormChange(evt) {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value,
        })
    }
    render() {
        let { MainDropDown1, MainDropDown2 } = this.state;
        return (
            <div id="blog-detail-page">
                <div className="blog-detail-list-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <Mainlogo logo={BlogListLogo} logoTitleText="Tokyo" logoMainText="정글뉴스" logoSubText="블로그" ></Mainlogo>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-detail-section">
                    <div className="blog-dropdown">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="customer-dropdown-2">
                                     
                                    <div className="dropdown select-align-right">
                                        <button type="button" id="dd_drop_3" className="btn select-trans-btn footer-dropdown custom-main-div-dropdown-menu-button" data-toggle="dropdown">
                                        카테고리
                                            <i className="fa fa-angle-down " aria-hidden="true" />
                                        </button>
                                        <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                            <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("지역선택")} >지역선택</option>
                                            <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("일본")}>일본</option>
                                            <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("인도네시아")}>인도네시아</option>
                                        </div>
                                    </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BlogBox blogTitle={this.props.location.state && this.props.location.state.selectedBlog && this.props.location.state.selectedBlog.title} />
                    <div className="col-md-12">
                        <Pagination />
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default BlogDetail;