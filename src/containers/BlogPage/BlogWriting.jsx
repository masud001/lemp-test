import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";
import Footer from "../../components/FooterComponent/Footer.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
// import CKEditor from 'ckeditor4-react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
let editorConfig = {
    toolbarGroups: [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'styles', groups: ['styles'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'others', groups: ['others'] },
        { name: 'links', groups: ['links'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'insert', groups: ['insert'] },
       
        { name: 'about', groups: ['about'] }
    ],
    bodyClass: 'bg-gray',
    contentsCss: "src/assets/sass/base/ck-editore.sass",
    removeButtons: 'Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Form,Checkbox,TextField,Radio,Textarea,Select,Button,ImageButton,HiddenField,Underline,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,NumberedList,BulletedList,Indent,Blockquote,CreateDiv,Outdent,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiLtr,BidiRtl,Language,Link,Unlink,Anchor,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Font,FontSize,TextColor,BGColor,Maximize,ShowBlocks,Scayt,Flash',

};

class BlogWriting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            dropdownVal: 'Select1',
            selectedBlogCategory: ""
        }
        this.updateContent = this.updateContent.bind(this);
        this.onLangaugeSelect = this.onLangaugeSelect.bind(this);
        this.updateSubtitle = this.updateSubtitle.bind(this);
    }

    updateSubtitle(subtitle) {
        this.setState(
            {selectedBlogCategory: subtitle}
        )
    }


    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    onChange(evt) {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent
        })
    }

    onBlur(evt) {
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt) {
        console.log("afterPaste event called with event info: ", evt);
    }
    onLangaugeSelect(data) {
        this.setState({
            dropdownVal: data
        })
    }


    render() {
        let { dropdownVal } = this.state;
        return (
            <div id="blog-writing-page">
                <div className="blog-writing-list-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <Mainlogo logo={BlogListLogo} logoTitleText="Tokyo" logoMainText="정글장터" logoSubText="글쓰기" ></Mainlogo>
                            </div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="blog-writing-main">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="create-new-topic">
                                        <div className="create-new-topic-text">{this.state.selectedBlogCategory}카타고리를 확인하고 내용을 적어주세요.</div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="Topic-Title-panel">
                                        <div className="Topic-Title-text">블로그 제목</div>
                                        <input type="text" placeholder="Subject of your topic" className="topic-input"></input>
                                        <div className="topic-input-warning-text">30자이내로 제목을 간략하게 적어주세요.</div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="Topic-type-panel">
                                        <div className="Topic-Title-text">글쓰기 분야</div>
                                        <div className="topic-type-icon-group">
                                            <div className="topic-icon-section">
                                                <img src="src/assets/img/BlogWrittingPage/discussion.png"></img>
                                                <div className="topic-icon-text">정글장터</div>
                                            </div>
                                            <div className="topic-icon-section">
                                                <img src="src/assets/img/BlogWrittingPage/question.png"></img>
                                                <div className="topic-icon-text">부동산</div>
                                            </div>
                                            <div className="topic-icon-section">
                                                <img src="src/assets/img/BlogWrittingPage/poll.png"></img>
                                                <div className="topic-icon-text">구인구직</div>
                                            </div>
                                            <div className="topic-icon-section">
                                                <img src="src/assets/img/BlogWrittingPage/imagegallery.png"></img>
                                                <div className="topic-icon-text">카페 글쓰기</div>
                                            </div>
                                            <div className="topic-icon-section">
                                                <img src="src/assets/img/BlogWrittingPage/video.png"></img>
                                                <div className="topic-icon-text">생활정보</div>
                                            </div>
                                            <div className="topic-icon-section">
                                                <img src="src/assets/img/BlogWrittingPage/other.png"></img>
                                                <div className="topic-icon-text">정글로 문의하기</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="Topic-body-panel">
                                        <div className="Topic-body-text">내용 작성</div>
                                        <CKEditor
                                            activeClass="p10"
                                            config={editorConfig}
                                            content={this.state.content}
                                            events={{
                                                "blur": this.onBlur,
                                                "afterPaste": this.afterPaste,
                                                "change": this.onChange
                                            }}
                                        />
                                        {/* <CKEditor
                                            data={this.state.content}                                          
                                        /> */}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="Topic-category-tag">
                                        <div className="Topic-category-panel">
                                            <div className="Topic-category-text">카테고리</div>
                                            <div className="dropdown select-align-right main-page-dropdown fullWidth">
                                                <button type="button" id="dd_drop_3" className="btn custom-main-div-dropdown-menu-button category-dropdown fullWidth" data-toggle="dropdown">
                                                    {dropdownVal}
                                                    <i className="fa fa-angle-down arrow-icon " aria-hidden="true" />
                                                </button>
                                                <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                                                    <option value="0" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("Select1")}>Select 1</option>
                                                    <option value="1" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("Select2")}>Select 2</option>
                                                    <option value="2" className="footer-text-drop custom-item-div-dropdown-menu-design" onClick={() => this.onLangaugeSelect("Select3")}>Select  3</option>
                                                </div>
                                            </div>
                                            {/* <input type="text" placeholder="Select" className="category-input"></input> */}
                                        </div>
                                        <div className="Topic-tag-panel">
                                            <div className="Topic-tag-text">Tag </div>
                                            <input type="text" placeholder="예) 태그설정으로 더 쉽게 찾을 수 있습니다.  작성방법 예) #컴퓨터#중고가구#테레비" className="tag-input"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="Topic-btn-panel">
                                        <Button>글쓰기</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer></Footer>
            </div>

        )
    }
}
export default BlogWriting;