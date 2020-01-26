import React, { Component } from "react";
import Pagenation from "../../components/UtilityComponent/Pagenation.jsx";
import CircleName from "../../components/UtilityComponent/CircleName.jsx";
import BlogTag from "../../components/UtilityComponent/BlogTag.jsx";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from "react-router-dom";

class BlogTable extends Component {
	render() {
		return (
			<div id="blog-table-comp">
				<div className="blog-dropdown">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="customer-dropdown-2">
									<div className="dropdown select-align-right">
										<button
											type="button"
											id="dd_drop_3"
											className="btn footer-dropdown select-trans-btn  custom-main-div-dropdown-menu-button"
											data-toggle="dropdown"
										>
											카테고리
											<i
												className="fa fa-angle-down "
												aria-hidden="true"
											/>
										</button>
										<div
											className="dropdown-menu custom-main-div-dropdown-menu-design"
											style={{ minWidth: "inherit" }}
										>
											<option
												value="0"
												className="footer-text-drop custom-item-div-dropdown-menu-design"
												onClick={() =>
													this.onLangaugeSelect(
														"전체보기"
													)
												}
											>
												전체보기
											</option>
											<option
												value="1"
												className="footer-text-drop custom-item-div-dropdown-menu-design"
												onClick={() =>
													this.onLangaugeSelect(
														"삽니다"
													)
												}
											>
												삽니다
											</option>
											<option
												value="2"
												className="footer-text-drop custom-item-div-dropdown-menu-design"
												onClick={() =>
													this.onLangaugeSelect(
														"팝니다"
													)
												}
											>
												팝니다
											</option>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<table className="table blog-list-table">
					<thead>
						<tr>
							<th>작성자 / 작성일</th> {/*writer(username) */}
							<th>작성일</th>
							{/* langulages country flag */}
							<th>언어</th>
							{/*  date of write */}
							<th>카테고리</th>
							{/*  category */}
							<th>제목</th> {/* title */}
							<th>태그</th> {/* tags */}
							<th>조회수</th>
							{/*  view */}
						</tr>
					</thead>
					<tbody>
						{/* table content is edited by masud to get data  */}
						{this.props.tableRow.map((x, index) => (
							<tr key={index}>
								<td>
									<div
										style={{
											display: "flex",
											margin: "auto",
											width: "60%"
										}}
									>
										<CircleName username={x.username} />
										<span style={{ paddingLeft: "10px" }}>
											{x.username}
										</span>
									</div>
									<div
										className="ml-4"
										style={{
											display: "inline"
										}}
									>
										<span style={{ paddingLeft: "10px" }}>
											{x.date}
										</span>
									</div>
								</td>
								<td>
									<img
										style={{
											height: "50px",
											width: "100px"
										}}
										src={x.tableImageUrl}
										alt={x.tableImageUrl}
									/>
								</td>
								<td>
									<div>
										<img
											style={{
												width: "50px",
												height: "50px",
												borderRadius: "50%"
											}}
											src={x.languageFlag}
											alt={x.languageFlag}
										/>
									</div>
								</td>
								<td>{x.category}</td>
								<td>
									<span
										className="cursor-pointer txt"
										onClick={() =>
											this.props.onBlogTitle(x)
										}
									>
										{x.title}
									</span>
								</td>
								<td>
									<BlogTag tag={x.tags} />
								</td>
								<td className="cursor-pointer"> 34</td>
							</tr>
						))}
					</tbody>
				</table>
				<Link to="/blog-writing">
					<Button
						variant="contained"
						size="medium"
						className="btn-blue mat-input-aftert-btn px-5 mt-2 float-right"
						onClick={() => this.props.onBlogCategory(x)}
					>
						글쓰기
					</Button>
				</Link>
				{/* <button className="btn-blue ">글쓰기</button>*/}
				{/* this is updated code by masud date jnu 26 added another orange button   */}

				<Link to="/blog-writing">
					<Button
						variant="contained"
						size="medium"
						className="btn-blue mat-input-aftert-btn px-5 mt-2 mr-4 float-right"
						onClick={() => this.props.onBlogCategory(x)}
					>
						글쓰기
					</Button>
				</Link>
				{/* <MyButton color="red">Red</MyButton> */}

				<Pagenation pageSize={10} />
			</div>
		);
	}
}

export default BlogTable;
