import React, { Component } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Edit from '@material-ui/icons/Edit';

class MyAccountMyCafeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="my-account-table">
        <div className="myaccount-box-sec">
          <table>
            <thead>
            <tr>
              <th>NO</th>
              <th>카페네임</th>
              <th>직책</th>
              <th>가입날짜</th>
              <th>회원수</th>
              <th>관리</th>
            </tr>
            </thead>
            <tbody>
            {
              this.props.tableRow.map((x, index) =>
                  <tr key={index} >
                      <td>{x.sequence}</td>
                      <td>{x.cafeName}</td>
                      <td>{x.position}</td>
                      <td>{x.date}</td>
                      <td>{x.members}</td>
                      <td>{x.management}</td>
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
          <div className="table-bottom-btn">
           <Button><Edit style={{paddingRight:"5px"}}/> 수정</Button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default MyAccountMyCafeTable;