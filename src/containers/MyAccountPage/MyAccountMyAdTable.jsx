import React, { Component } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Edit from '@material-ui/icons/Edit';
import bannerImage from '../../assets/img/Banner/asian-laughing-banner-2.jpg';

class MyAccountMyAdTable extends React.Component {
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
                <th>광고ID</th>
                <th>이미지</th>
                <th>광고 시작일</th>
                <th>광고 종료일</th>     
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.tableRow.map((x, index) =>
                  <tr key={index} >
                      <td>{x.sequence}</td>
                      <td>{x.locationId}</td>
                      <td>
                      <img src={x.image} alt={x.locationId} className="tableViewImg"/>
                      
                      </td>
                      <td>{x.dateOfStart}</td>
                      <td>{x.dateOfEnd}</td>
                      <td>{x.view}</td>
                  </tr>
              )
             }
            </tbody>
            {/* <tr>
              <td>9</td>
              <td>MC001</td>
              <td><bannerImage style={{height:"20px", width:"100px"}}/></td>
              <td>2020.09.31</td>
              <td>2010.09.21</td>
              <td>152</td>
            </tr>
            <tr>
              <td>9</td>
              <td>MC001</td>
              <td>PHOTO</td>
              <td>2020.09.31</td>
              <td>2010.09.21</td>
              <td>152</td>
            </tr>
            <tr>
              <td>9</td>
              <td>MC001</td>
              <td>PHOTO</td>
              <td>2020.09.31</td>
              <td>2010.09.21</td>
              <td>152</td>
            </tr> */}
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
export default MyAccountMyAdTable;