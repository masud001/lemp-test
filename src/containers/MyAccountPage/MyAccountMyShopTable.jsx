import React, { Component } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Edit from '@material-ui/icons/Edit';

class MyAccountMyShopTable extends React.Component {
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
              <th>업종</th>             
              <th>회사(가게)명</th>
              <th>전화번호</th>
              <th>영업시간</th>
              <th>휴일</th>
              <th>포인트카드</th>
            </tr>
            </thead>
           <tbody>
           {
              this.props.tableRow.map((x, index) =>
                  <tr key={index} >
                      <td>{x.sequence}</td>
                      <td>{x.businessCategory}</td>
                      <td>{x.shopName}</td>
                      <td>{x.telephone}</td>
                      <td>{x.openingHours}</td>
                      <td>{x.holiday}</td>
                      <td>{x.pointCard}</td>
                  </tr>
              )
             }
           </tbody>
            {/* <tr>
              <td>9</td>
              <td>식당</td>
              <td>엄마 김치찌게</td>
              <td>8231-0202-0003</td>
              <td>오전10시~오후 10시</td>
              <td>매주 첫째주 월요일</td>
              <td>글로벌|숍카드</td>
            </tr>
            <tr>
              <td>9</td>
              <td>식당</td>
              <td>엄마 김치찌게</td>
              <td>8231-0202-0003</td>
              <td>오전10시~오후 10시</td>
              <td>매주 첫째주 월요일</td>
              <td>숍카드</td>
            </tr>
            <tr>
            <td>9</td>
              <td>식당</td>
              <td>맛집 스시</td>
              <td>8231-0202-0003</td>
              <td>오전10시~오후 10시</td>
              <td>매주 첫째주 월요일</td>
              <td>사용안함</td>
            </tr>
            <tr>
            <td>9</td>
              <td>식당</td>
              <td>감자탕 맛집</td>
              <td>8231-0202-0003</td>
              <td>오전10시~오후 10시</td>
              <td>매주 첫째주 월요일</td>
              <td>숍카드</td>
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
export default MyAccountMyShopTable;