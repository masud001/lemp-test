import React, { Component } from "react";
import {
	TextField,
	Button,
	Select,
	InputAdornment,
	IconButton,
	MenuItem,
	InputLabel,
	FormControl,
	ListItem
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Footer from "../../components/FooterComponent/Footer.jsx";
import BlogDetailLogo from "./../../assets/img/blog-detail-logo.jpg";
// import DummyIcon from "./../../assets/img/Dummy-icon.png";
import Mainlogo from "../../components/MainLogoComponent/MainLogo.jsx";
import BlogTable from "../../containers/BlogPage/BlogTable.jsx";
import Pagenation from "../../components/UtilityComponent/Pagenation.jsx";
import BlogListLogo from "./../../assets/img/blog-list-logo.jpg";
import { connect } from "react-redux";
import { findIndex } from "lodash";
import Cap_Man from "./../../assets/img/cap-man.png";

// in the blog list masud added image for the table

class BlogList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectTabKey: "Tokyo",
			MainDropDown1: 1,
			MainDropDown2: 1,
			categorySubtitle: "",
			blogList: [
				{
					tabKey: "Tokyo",
					displayName: "동경",
					data: [
						{
							date: "2019 Sep 21",
							tableImageUrl: "https://via.placeholder.com/120X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Sonny",
							category: "삽니다",
							title: "I will buy a computer",
							tags: "computer",
							view: "23"
						},
						{
							date: "2019 Oct 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Wonhee",
							category: "방구해요",
							title: "I need to rent a house",
							tags: "House",
							view: "23"
						},
						{
							date: "2019 Dec 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Sonny",
							category: "Travel Info",
							title: "I will buy a ar",
							tags: "car",
							view: "23"
						}
					]
				},
				{
					tabKey: "Osaka",
					displayName: "오사카",
					data: [
						{
							date: "2019 Sep 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Mansur",
							category: "삽니다",
							title: "I will buy a computer",
							tags: "computer",
							view: "23"
						},
						{
							date: "2019 Oct 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Wonhee",
							category: "RealEstate",
							title: "I need to rent a house",
							tags: "House",
							view: "23"
						},
						{
							date: "2019 Dec 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Sonny",
							category: "구인",
							title: "I will buy a ar",
							tags: "car",
							view: "23"
						}
					]
				},
				{
					tabKey: "Kagosima",
					displayName: "카고시마",
					data: [
						{
							date: "2019 Sep 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "James",
							category: "팝니다",
							title: "I will buy a computer",
							tags: "computer",
							view: "23"
						},
						{
							date: "2019 Oct 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Wonhee",
							category: "방있어요",
							title: "I need to rent a house",
							tags: "House",
							view: "23"
						},
						{
							date: "2019 Dec 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Sonny",
							category: "Travel Info",
							title: "I will buy a ar",
							tags: "car",
							view: "23"
						}
					]
				},
				{
					tabKey: "Hotkaido",
					displayName: "홋카이도",
					data: [
						{
							date: "2019 Sep 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "왕정치",
							category: "팝니다",
							title: "I will buy a computer",
							tags: "computer",
							view: "23"
						},
						{
							date: "2019 Oct 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Wonhee",
							category: "구인",
							title: "I need to rent a house",
							tags: "House",
							view: "23"
						},
						{
							date: "2019 Dec 21",
							tableImageUrl: "https://via.placeholder.com/150X75",
							languageFlag: "https://via.placeholder.com/50X50",
							username: "Sonny",
							category: "삽니다",
							title: "I will buy a ar",
							tags: "car",
							view: "23"
						}
					]
				}
			],
			valueDrop: "all",
			ValueSearch: ""
		};
		this.onHandleFormChange = this.onHandleFormChange.bind(this);
	}

	updateSubtitle(x) {
		// let { categorySubtitle } = { ...this.state };
		this.props.history.push({
			pathname: "/blog-writing",
			state: { categorySubtitle: x }
		});
	}

	// shouldComponentUpdate(Prevprops, nextState) {

	//     if (Prevprops.headerClickedName != nextState.categorySubtitle) {
	//         this.updateSubtitle();
	//         // return false;

	//     }

	//     return true;
	// }
	handleBlogTitle(x) {
		this.props.history.push({
			pathname: "/blog-detail",
			state: { selectedBlog: x }
		});
	}

	renderTableValue() {
		const tabKey = this.state.selectTabKey;
		const index = findIndex(this.state.blogList, function(o) {
			return o.tabKey == tabKey;
		});
		return this.state.blogList[index].data;
	}

	handleTab(item) {
		this.setState({ selectTabKey: item.tabKey });
	}

	onHandleFormChange(evt) {
		const value = evt.target.value;
		this.setState({
			...this.state,
			[evt.target.name]: value
		});
	}

	render() {
		// alert(this.props.headerClickedName);
		let {
			valueDrop,
			ValueSearch,
			MainDropDown1,
			MainDropDown2
		} = this.state;
		return (
			<div id="blog-list-page">
				<div className="container">
					<div className="row">
						<div className="col-sm col-md">
							<div className="bloglist-wizard-area">
								<div className="bloglist-wizard-image">
									<img
										src="https://via.placeholder.com/200X200"
										alr="bloglist wizard image"
									/>
								</div>
								<div className="bloglist-wizard-text">
									<p>쿠킹 클래스</p>
									<p>시장 방문과 한국 가정식 만들기</p>
									<p>
										1인당 ₩60,000부터 · 교통편, 음식, 장비
										포함
									</p>
									<p>평점 4.96/5 후기 496개</p>
									<p>
										<span>
											<i class="fas fa-star"></i>
										</span>
										<span>4.96 (496)</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm col-md">
							<div className="bloglist-wizard-area">
								<div className="bloglist-wizard-image">
									<img
										src="https://via.placeholder.com/200X200"
										alr="bloglist wizard image"
									/>
								</div>
								<div className="bloglist-wizard-text">
									<p>쿠킹 클래스</p>
									<p>시장 방문과 한국 가정식 만들기</p>
									<p>
										1인당 ₩60,000부터 · 교통편, 음식, 장비
										포함
									</p>
									<p>평점 4.96/5 후기 496개</p>
									<p>
										<span>
											<i class="fas fa-star"></i>
										</span>
										<span>4.96 (496)</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm col-md">
							<div className="bloglist-wizard-area">
								<div className="bloglist-wizard-image">
									<img
										src="https://via.placeholder.com/200X200"
										alr="bloglist wizard image"
									/>
								</div>
								<div className="bloglist-wizard-text">
									<p>쿠킹 클래스</p>
									<p>시장 방문과 한국 가정식 만들기</p>
									<p>
										1인당 ₩60,000부터 · 교통편, 음식, 장비
										포함
									</p>
									<p>평점 4.96/5 후기 496개</p>
									<p>
										<span>
											<i class="fas fa-star"></i>
										</span>
										<span>4.96 (496)</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm col-md">
							<div className="bloglist-wizard-area">
								<div className="bloglist-wizard-image">
									<img
										src="https://via.placeholder.com/200X200"
										alr="bloglist wizard image"
									/>
								</div>
								<div className="bloglist-wizard-text">
									<p>쿠킹 클래스</p>
									<p>시장 방문과 한국 가정식 만들기</p>
									<p>
										1인당 ₩60,000부터 · 교통편, 음식, 장비
										포함
									</p>
									<p>평점 4.96/5 후기 496개</p>
									<p>
										<span>
											<i class="fas fa-star"></i>
										</span>
										<span>4.96 (496)</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm col-md">
							<div className="bloglist-wizard-area">
								<div className="bloglist-wizard-image">
									<img
										src="https://via.placeholder.com/200X200"
										alr="bloglist wizard image"
									/>
								</div>
								<div className="bloglist-wizard-text">
									<p>쿠킹 클래스</p>
									<p>시장 방문과 한국 가정식 만들기</p>
									<p>
										1인당 ₩60,000부터 · 교통편, 음식, 장비
										포함
									</p>
									<p>평점 4.96/5 후기 496개</p>
									<p>
										<span>
											<i class="fas fa-star"></i>
										</span>
										<span>4.96 (496)</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="blog-list-section">
					<div className="my-blog">
						<div className="tab-table">
							{/* <Mainlogo
								logo={BlogListLogo}
								logoTitleText="Tokyo"
								logoSubText={this.props.headerClickedName}
							></Mainlogo> */}
							<div className="ad-text">
								<div className="div-text-1">
									정글뉴스에 오신 여러분을 환영합니다!
								</div>
								<div className="div-text-2">
									왼쪽의 약관 동의를 체크하신 후 우측의 버튼을
									통해서 가입하실 수있습니다.
								</div>
							</div>

							{/* <div className="page-filter-box-main-div">
								<div className="page-filter-box-sub-div">
									<div className="page-filter-dropdown">
										<div className="dropdown select-purple-align">
											<button
												type="button"
												id="dd_drop_3"
												className="btn select-purple footer-dropdown custom-main-div-dropdown-menu-button"
												data-toggle="dropdown"
											>
												지역선택
												<i
													className="fa fa-angle-down "
													aria-hidden="true"
												/>
											</button>
											<div className="dropdown-menu custom-main-div-dropdown-menu-design">
												<option
													value="0"
													className="footer-text-drop custom-item-div-dropdown-menu-design"
													onClick={() =>
														this.onLangaugeSelect(
															"지역선택"
														)
													}
												>
													지역선택
												</option>
												<option
													value="1"
													className="footer-text-drop custom-item-div-dropdown-menu-design"
													onClick={() =>
														this.onLangaugeSelect(
															"일본"
														)
													}
												>
													일본
												</option>
												<option
													value="2"
													className="footer-text-drop custom-item-div-dropdown-menu-design"
													onClick={() =>
														this.onLangaugeSelect(
															"인도네시아"
														)
													}
												>
													인도네시아
												</option>
											</div>
										</div>
									</div>
									<div className="page-filter-input">
                                        <TextField
                                            id="ValueSearch"
                                            name="ValueSearch"
                                            className="fullWidth"
                                            value={ValueSearch}
                                            onChange={this.onHandleFormChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            edge="end"
                                                            aria-label="toggle password visibility"
                                                        >
                                                            <SearchIcon></SearchIcon>
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </div> 
								</div>
                            </div> */}

							<div id="longitude" className="tabcontent">
								<div className="table-responsive">
									<BlogTable
										tableRow={this.renderTableValue()}
										onBlogTitle={x =>
											this.handleBlogTitle(x)
										}
										onBlogCategory={x =>
											this.updateSubtitle(x)
										}
									/>
								</div>
							</div>
						</div>

						<div className="blog-tab-table-right">
							<div className="table-right-box boxs-1">
								<img src="src/assets/img/AdSelectBanner/Banner1.jpg" />

								{/* <p>Ad No</p>
                                <p>T222</p> */}
							</div>
							<div className="table-right-box boxs-2">
								<img src="src/assets/img/AdSelectBanner/Banner2.jpg" />
								{/* <p>Ad No</p>
                                <p>T222</p> */}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
// export default BlogList;
// going to commit for commenting this page logo by masud
const mapStateToProps = state => {
	return {
		// headerClickedName: state.data.headerMessage
	};
};
const mapDispatchToProps = dispatch => {
	return;
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
