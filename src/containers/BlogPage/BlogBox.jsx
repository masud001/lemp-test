import React, { Component } from 'react';
import UserIcon from "./../../assets/img/user-icon.png";
import CircleName from "../../components/UtilityComponent/CircleName.jsx";
import BlogTag from "../../components/UtilityComponent/BlogTag.jsx";


class BlogBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: "",
            comments: [],
            IsTextAreaDefault: true
        }
        this.handleRemoveComment = this.handleRemoveComment.bind(this);
    }


    getCurrentDateTime() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds();
        return date.toString();
    }

    handleAddComment() {
        const { commentText } = this.state;
        let comments = [...this.state.comments];//... means clone the object 
        comments.push({ commentted: commentText, createdDateTime: this.getCurrentDateTime(), userName: "Sonny" });
        this.setState({ comments, commentText: "", IsTextAreaDefault: true });
    }
    handleRemoveComment(index) {
        let { comments } = this.state;//... means clone the object 

        for (var i = 0; i < comments.length; i++) {
            if (i === index) {
                comments.splice(index, 1);

            }
        }
        this.setState({ comments });
    }


    handleChange(e) {
        this.setState({ commentText: e.target.value, IsTextAreaDefault: false });
    }
    // Arrow function is required whenever binding is required 
    // Nomal is name() { return}

    render() {
        console.log(this.state.comments);
        let { IsTextAreaDefault } = this.state;
        return (
            <>
                <div className="container">
                    <div className="blog-detail-panel ">
                        <div className="blog-box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="profile-main">
                                        <div className="profile-img"></div>
                                        <div className="profile-name">dylan89</div>
                                        {/* <div className="profile-date">6 jan,2019</div> */}
                                        <div className="profile-right">6 jan,2019</div>
                                    </div>
                                    <div>
                                        <ul className="tt-list-badge">

                                            <BlogTag tag="exchange"/>
                                            <BlogTag tag="computer"/>
                                            <BlogTag tag="new"/>
                                            {/* <li class="show-mobile"><a href="#"><span class="tt-color03 tt-badge">exchange</span></a></li>
                                            <li><a href="#"><span class="tt-badge">themeforest</span></a></li>
                                            <li><a href="#"><span class="tt-badge">elements</span></a></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <p style={{ fontSize: "18px", fontWeight: 700, marginTop: 20 }}>{this.props.blogTitle}</p>
                                    <p div className="blog-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make</p>
                                    <div className="qeustion-text">Lorem Ipsum is simply dummy</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="fa-icon-panel">
                                        <div className="fa-thumbup-icon" style={{cursor: "pointer"}}><i className="fa fa-thumbs-up" aria-hidden="true"></i><span>24</span></div>
                                        <div className="fa-thumbdown-icon" style={{cursor: "pointer"}} ><i className="fa fa-thumbs-down" aria-hidden="true"></i><span>4</span></div>
                                        <div className="fa-heart-icon" style={{cursor: "pointer"}} ><i className="fa fa-heart-o" aria-hidden="true"></i><span>14</span></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="fa-icon-panel">
                                        <div className="fa-pencil-icon" style={{cursor: "pointer"}}><i className="fa fa-pencil" aria-hidden="true"></i><span>Edit</span></div>
                                        <div className="fa-share-icon" style={{cursor: "pointer"}}><i className="fa fa-share-alt" aria-hidden="true"></i><span>Share</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-section">
                            <div className="input-img">
                                <img src={UserIcon}></img>
                            </div>
                            <div className="input-box" >
                                {/* <textarea type="text" value={this.state.commentText} onChange={(e) => this.handleChange(e)} className="form-control cust-comment-form blogComment" placeholder="Comment" aria-label="Comment" aria-describedby="basic-addon1" /> */}
                                <textarea type="text" value={this.state.commentText} onChange={(e) => this.handleChange(e)} style={{ height: "40px" }} className={IsTextAreaDefault ? "form-control animated text-area-height  cust-comment-form blogComment" : "form-control animated  cust-comment-form blogComment"} placeholder="Comment" aria-label="Comment" aria-describedby="basic-addon1" />

                                <button className="btn-blue"style={{cursor: "pointer"}} onClick={() => this.handleAddComment()}><i class="fa fa-reply" aria-hidden="true"></i> Reply</button>
                            </div>
                        </div>
                    </div>

                </div>


                {

                    this.state.comments.length > 0 &&
                    <div className="blog-detail-main-box"> {
                        this.state.comments.map((x, index) =>
                            <div className="container child-box" key={index}>

                                <div className="">
                                    <div className="row blog-detail-comment">

                                        <div className="comment-panel-box">
                                            <i className="fa fa-reply" aria-hidden="true"></i>
                                            <i className="fa fa-pencil-square-o pencil-icon" aria-hidden="true"></i>
                                            <i className="fa fa-times close-icon"
                                                onClick={() => this.handleRemoveComment(index)}
                                                aria-hidden="true" id="close-map-modal"></i>
                                            {
                                                x.userName && <CircleName username={x.userName} />
                                            }

                                            {x.createdDateTime}
                                            <div className="comment-text" >{x.commentted}</div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        )

                    }
                    </div>
                }




            </>

        );



    }

}

export default BlogBox;