import React, { Component } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormGroup
} from "@material-ui/core";
import CurrencyFormat from 'react-currency-format';
import CloseIcon from "@material-ui/icons/Close";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import {renderLocationId} from "../../../utils/locationService";


class AdSelectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonthDrop: [
        { name: "1개월", discountRate: 0 },
        { name: "2개월", discountRate: 0.05 },
        { name: "3개월", discountRate: 0.10 },
        { name: "6개월", discountRate: 0.15 },
        { name: "12개월", discountRate: 0.20 }
      ],
      isWarnigPopupActive: false,
      selectedAdContents: {
        selectedMonth:"",
        monthlyCharge: 180.00,
    //    locationId: "",
        existingAdEndDate: ""
      }
    };
    this.OnAdvtPopupClick = this.OnAdvtPopupClick.bind(this);
    this.onMonthSelect = this.onMonthSelect.bind(this);
  }

  

  renderTotalAmount() {

      const {selectedAdContents, selectedMonthDrop} = this.state;
      let month = 0; 
    //  debugger;
      if(!selectedAdContents.selectedMonth)  return { totalAmount:0, finalAmount:0, discount:0 }
      switch(selectedAdContents.selectedMonth) {
        case "1개월": month=1; break;
        case "2개월": month=2; break;
        case "3개월": month=3; break;
        case "6개월": month=6; break;
        case "12개월": month=12; break;
      }
      const totalAmount = selectedAdContents.monthlyCharge * month;
      let discount = selectedMonthDrop.find(x => x.name==selectedAdContents.selectedMonth);
      const finalAmount = totalAmount * (1-discount.discountRate); 
      return { totalAmount:totalAmount, finalAmount:finalAmount, discount:discount.discountRate*100}
          
  }


  OnAdvtPopupClick() {
    this.props.onAdSelectPopupclose();
    this.props.history.push({
      pathname: "/ad-insert",
      state: {locationAdId: this.props.locationAdId, selectedAdContents: this.state.selectedAdContents}
    })
  }

  onMonthSelect(value) {
      const {selectedAdContents} = {...this.state};
      selectedAdContents["selectedMonth"] = value; 
      this.setState({
       selectedAdContents
     });
  }

  componentDidMount() {
    let { isAdvtPopupActive } = this.props;
    this.setState({
      isAdvtPopupActive
    });
  }
  componentWillReceiveProps() {
    let { isAdvtPopupActive } = this.props;    
    this.setState({
      isAdvtPopupActive
    });
  }
  render() {
    let { selectedAdContents, selectedMonthDrop} = this.state;
    let { isAdvtPopupActive, locationAdId } = this.props;
   // console.log(selectedAdContents);
    return (
      isAdvtPopupActive && (
        <div id="letest-ad-select-advt-popup">
          <div className="advt-popup-head">
            <span className="head-status">
              <span className="round-design"></span>
            </span>
            <span className="head-title">Location ID : {locationAdId}</span>
            <span className="head-close" onClick={()=> this.OnAdvtPopupClick()}>
              <CloseIcon />
            </span>
          </div>
          <div className="advt-popup-body">
            <div className="advt-popup-body-main">
              <div className="advt-popup-body-main-left">기존 광고 종료일</div>
              <div className="advt-popup-body-main-right">00.00.00 (금)</div>
            </div>
            <div className="advt-popup-body-dropdown">
              <div className="dropdown select-align-right main-page-dropdown ">
                <button
                  type="button"
                  id="dd_drop_3"
                  className="btn custom-main-div-dropdown-menu-button"
                  data-toggle="dropdown"
                >
                  {selectedAdContents["selectedMonth"]}
                  <i
                    className="fa fa-angle-down arrow-icon "
                    aria-hidden="true"
                  />
                </button>
                <div className="dropdown-menu custom-main-div-dropdown-menu-design">
                  {
                      selectedMonthDrop.map(x=> 
                        <option
                            className="footer-text-drop custom-item-div-dropdown-menu-design"
                            onClick={() => this.onMonthSelect(x.name)}
                        >
                            {x.name}
                        </option>                     
                      )
                  }
                  
                </div>
              </div>
            </div>
            <div className="advt-popup-body-info-text-1">선정기간: {selectedAdContents["selectedMonth"]}</div>
            <div className="advt-popup-body-info-text-1"><span>할인율: {this.renderTotalAmount().discount}%</span><span> 합계:<CurrencyFormat value={this.renderTotalAmount().totalAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span></div>
            <div className="advt-popup-body-info-text-2">총:<CurrencyFormat value={this.renderTotalAmount().finalAmount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
            <div className="advt-popup-body-button">
              <Button
                variant="outlined"
                className="advt-popup-body-button-design"
                onClick={() => this.OnAdvtPopupClick()}
              >
                광고 예약
              </Button>
            </div>
          </div>
        </div>
      )
    );
  }
}
export default withRouter(AdSelectModal);
