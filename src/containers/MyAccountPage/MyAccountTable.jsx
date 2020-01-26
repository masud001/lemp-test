import React, { Component } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Edit from '@material-ui/icons/Edit';

class MyAccountTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.tableRow);
    return (
      
      <div id="my-account-table">
        <div className="myaccount-box-sec">
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>섹션</th>
                <th>카테고리</th>
                <th className="my-boxs-table">제목</th>
                <th>날짜</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.tableRow.map((x, index) =>
                  <tr key={index} >
                      <td>{x.sequence}</td>
                      <td>{x.section}</td>
                      <td>{x.category}</td>
                      <td className="my-boxs-table txt cursor-pointer ">{x.title}</td>
                      <td>{x.date}</td>
                      <td>{x.view}</td>
                  </tr>
              )
             }
            </tbody>
          </table>
          <div className="my-account-table-footer-div">
          <div className="table-pagination-list">
            <ul>
              <li><ChevronLeftIcon/></li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li><ChevronRightIcon/></li>
            </ul>
          </div>
          {/* <div className="table-bottom-btn">
          <Button><Edit style={{paddingRight:"5px"}}/> 수정</Button>
          </div> */}
        </div>
        </div>
      </div>
    );
  }
}
export default MyAccountTable;